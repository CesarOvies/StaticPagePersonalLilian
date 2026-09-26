export async function onRequestPost(context) {
  try {
    const body = await context.request.json().catch(() => null);
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ sucesso: false }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const { senha } = body;
    const senhaCorreta = context.env.ANANMESE_KEY;
    const formsUrl = context.env.URL_FORMS;

    if (!senha || typeof senha !== 'string' || senha.length > 50) {
      return new Response(JSON.stringify({ sucesso: false }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (senhaCorreta && senha.trim().toUpperCase() === senhaCorreta.trim().toUpperCase()) {
      return new Response(JSON.stringify({ sucesso: true, url: formsUrl }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ sucesso: false }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ sucesso: false, erro: 'Erro interno' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}