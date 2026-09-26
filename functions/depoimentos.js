export async function onRequestGet(context) {
  const url = `${context.env.API_GOOGLE_SCRIPTS_URL}?token=${context.env.API_GOOLE_SCRIPTS_TOKEN}`;
  const response = await fetch(url);
  const data = await response.text();

  return new Response(data, {
    headers: { 'Content-Type': 'application/json' }
  });
}

export async function onRequestPost(context) {
  const body = await context.request.json();
  body.token = context.env.API_GOOLE_SCRIPTS_TOKEN;

  const response = await fetch(context.env.API_GOOGLE_SCRIPTS_URL, {
    method: 'POST',
    body: JSON.stringify(body)
  });
  const data = await response.text();

  return new Response(data, {
    headers: { 'Content-Type': 'application/json' }
  });
}