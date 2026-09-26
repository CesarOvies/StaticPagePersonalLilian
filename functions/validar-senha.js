export async function onRequestPost(context) {
  try {
    const { senha } = await context.request.json();
    const senhaCorreta = context.env.ANANMESE_KEY;
    const formsUrl = context.env.URL_FORMS;

    if (senha && senha.trim().toUpperCase() === senhaCorreta.trim().toUpperCase()) {
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