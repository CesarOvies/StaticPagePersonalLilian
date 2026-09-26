export async function onRequestGet(context) {
    try {
        const cache = typeof caches !== 'undefined' ? caches.default : null;
        let cacheKey = null;
        if (context.request) {
            const cacheUrl = new URL(context.request.url);
            cacheUrl.searchParams.set('v', 'posts_only_v1');
            cacheKey = new Request(cacheUrl.toString());
        }

        if (cache && cacheKey) {
            const cachedResponse = await cache.match(cacheKey);
            if (cachedResponse) {
                return cachedResponse;
            }
        }

        const env = context.env || {};
        let feedUrl = env.INSTAGRAM_FEED_URL;
        if (feedUrl && feedUrl.includes('app.behold.so/feeds/')) {
            feedUrl = feedUrl.replace('app.behold.so/feeds/', 'feeds.behold.so/');
        }
        const accessToken = env.INSTAGRAM_ACCESS_TOKEN;

        if (feedUrl) {
            const response = await fetch(feedUrl, {
                headers: { 'Accept': 'application/json' }
            });
            if (response.ok) {
                const data = await response.json();
                const rawPosts = Array.isArray(data) ? data : (data.posts || data.data || []);
                const posts = rawPosts
                    .filter(item => item.mediaType !== 'VIDEO' && !item.is_video && !((item.permalink || item.url || '').includes('/reel/')))
                    .slice(0, 6)
                    .map((item, index) => ({
                        id: item.id || `post-${index}`,
                        url: item.permalink || item.url || (item.shortcode ? `https://www.instagram.com/p/${item.shortcode}/` : 'https://www.instagram.com/lili.wp/'),
                        display_url: item.sizes?.medium?.mediaUrl || item.sizes?.large?.mediaUrl || item.mediaUrl || item.media_url || item.thumbnailUrl || item.thumbnail_url || item.display_url,
                        caption: item.prunedCaption || item.caption || item.text || '',
                        is_video: false,
                        likes: item.likeCount || item.likes || 0,
                        comments: item.commentsCount || item.comments || 0,
                        timestamp: item.timestamp || null
                    }));

                const apiResponse = new Response(JSON.stringify({
                    sucesso: true,
                    origem: 'api_live',
                    perfil: {
                        username: 'lili.wp',
                        full_name: 'Lilian Moreira Farias'
                    },
                    posts: posts
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=3600',
                        'CDN-Cache-Control': 'max-age=86400'
                    }
                });

                if (cache && cacheKey && context.waitUntil) {
                    context.waitUntil(cache.put(cacheKey, apiResponse.clone()));
                }

                return apiResponse;
            }
        }

        if (accessToken) {
            const graphUrl = `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&limit=12&access_token=${accessToken}`;
            const response = await fetch(graphUrl);
            if (response.ok) {
                const data = await response.json();
                const posts = (data.data || [])
                    .filter(item => item.media_type !== 'VIDEO' && !((item.permalink || '').includes('/reel/')))
                    .slice(0, 6)
                    .map(item => ({
                        id: item.id,
                        url: item.permalink,
                        display_url: item.media_url,
                        caption: item.caption || '',
                        is_video: false,
                        likes: 0,
                        comments: 0,
                        timestamp: item.timestamp
                    }));

                const metaResponse = new Response(JSON.stringify({
                    sucesso: true,
                    origem: 'meta_graph_api',
                    perfil: {
                        username: 'lili.wp',
                        full_name: 'Lilian Moreira Farias'
                    },
                    posts: posts
                }), {
                    headers: {
                        'Content-Type': 'application/json',
                        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
                        'CDN-Cache-Control': 'max-age=86400'
                    }
                });

                if (cache && cacheKey && context.waitUntil) {
                    context.waitUntil(cache.put(cacheKey, metaResponse.clone()));
                }

                return metaResponse;
            }
        }

        const postsPadrao = [
            {
                id: '18153106375442095',
                url: 'https://www.instagram.com/p/DUG6lgEkcrC/',
                display_url: 'https://behold.pictures/eyJ1IjoieXNxZFFJVkJWUVVFVlh3cDZheEhUOG80M3VuMiIsImYiOiJJanJZMFZpVDNCVjdHbmdrUzlkMyIsInAiOiIxODE1MzEwNjM3NTQ0MjA5NSIsImgiOiJ6ZWo1a20ifQ.jpg?class=squareMedium',
                caption: '#tbt Da oportunidade que tive de dar aulas no projeto social e incentivar o esporte aquático.',
                is_video: false,
                likes: 38,
                tag: 'Post'
            },
            {
                id: '18292863442216294',
                url: 'https://www.instagram.com/p/DJQAOLIxGX8/',
                display_url: 'https://behold.pictures/eyJ1IjoieXNxZFFJVkJWUVVFVlh3cDZheEhUOG80M3VuMiIsImYiOiJJanJZMFZpVDNCVjdHbmdrUzlkMyIsInAiOiIxODI5Mjg2MzQ0MjIxNjI5NCIsImgiOiIxbnY3Z3g5In0.jpg?class=squareMedium',
                caption: 'Foram dias intensos e muito cansativos, mas também extremamente gratificantes no polo aquático!',
                is_video: false,
                likes: 116,
                tag: 'Post'
            },
            {
                id: '18056915978051331',
                url: 'https://www.instagram.com/p/DFwO1tkxYe1/',
                display_url: 'https://behold.pictures/eyJ1IjoieXNxZFFJVkJWUVVFVlh3cDZheEhUOG80M3VuMiIsImYiOiJJanJZMFZpVDNCVjdHbmdrUzlkMyIsInAiOiIxODA1NjkxNTk3ODA1MTMzMSIsImgiOiJlbTh6aGcifQ.jpg?class=squareMedium',
                caption: 'O #tbt de hoje é dedicado à pré-temporada. Superando limites e evoluindo a cada dia na piscina.',
                is_video: false,
                likes: 146,
                tag: 'Post'
            }
        ];

        return new Response(JSON.stringify({
            sucesso: true,
            origem: 'configurado_local',
            perfil: {
                username: 'lili.wp',
                full_name: 'Lilian Moreira Farias',
                followers: '1.8k',
                posts_count: '240'
            },
            posts: postsPadrao
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'public, max-age=300'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ sucesso: false, erro: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
