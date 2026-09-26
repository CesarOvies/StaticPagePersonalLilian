function sanitizeString(val, maxLen) {
  if (!val) return '';
  let str = String(val).trim();
  if (maxLen && str.length > maxLen) {
    str = str.substring(0, maxLen);
  }
  // Neutraliza fórmulas ativas do Excel/Sheets (=, +, -, @, \t, \r)
  if (/^[=+@\-\t\r]/.test(str)) {
    str = "'" + str;
  }
  return str;
}

export async function onRequestGet(context) {
  try {
    const url = `${context.env.API_GOOGLE_SCRIPTS_URL}?token=${context.env.API_GOOLE_SCRIPTS_TOKEN}`;
    const response = await fetch(url);
    const data = await response.text();

    return new Response(data, {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ erro: 'Erro ao consultar depoimentos' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    if (!body || typeof body !== 'object') {
      return new Response(JSON.stringify({ erro: 'Corpo da requisição inválido' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validação opcional de Turnstile se TURNSTILE_SECRET_KEY estiver configurado no Cloudflare
    if (context.env.TURNSTILE_SECRET_KEY) {
      const tokenTurnstile = body.token_turnstile || body['cf-turnstile-response'];
      if (!tokenTurnstile) {
        return new Response(JSON.stringify({ erro: 'Validação de segurança obrigatória ausente' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        });
      }

      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${encodeURIComponent(context.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(tokenTurnstile)}`
      });

      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return new Response(JSON.stringify({ erro: 'Validação de segurança inválida' }), {
          status: 403,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // Higienização e limites estritos (30 letras nome, 300 letras mensagem)
    const nomeLimpo = sanitizeString(body.nome, 30);
    const mensagemLimpa = sanitizeString(body.mensagem, 300);

    if (!nomeLimpo || nomeLimpo.length < 2) {
      return new Response(JSON.stringify({ erro: 'Nome é obrigatório (2 a 30 caracteres)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!mensagemLimpa || mensagemLimpa.length < 5) {
      return new Response(JSON.stringify({ erro: 'Mensagem é obrigatória (5 a 300 caracteres)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const papelPermitido = ['Aluno(a)', 'Pai, Mãe ou Responsável'].includes(body.papel)
      ? body.papel
      : 'Aluno(a)';

    const redePermitida = ['instagram', 'facebook'].includes(String(body.rede_social || '').toLowerCase())
      ? String(body.rede_social).toLowerCase()
      : '';

    let perfilLimpo = String(body.perfil_social || '')
      .replace(/^@+/, '')
      .replace(/[^a-zA-Z0-9._]/g, '')
      .slice(0, 30)
      .trim();

    if (perfilLimpo && /^[=+@\-\t\r]/.test(perfilLimpo)) {
      perfilLimpo = "'" + perfilLimpo;
    }

    const payloadSanitizado = {
      token: context.env.API_GOOLE_SCRIPTS_TOKEN,
      nome: nomeLimpo,
      mensagem: mensagemLimpa,
      papel: papelPermitido,
      rede_social: perfilLimpo ? redePermitida : '',
      perfil_social: perfilLimpo,
      categoria: papelPermitido,
      usuario: perfilLimpo,
      instagram: (perfilLimpo && redePermitida === 'instagram') ? perfilLimpo : '',
      facebook: (perfilLimpo && redePermitida === 'facebook') ? perfilLimpo : ''
    };

    const response = await fetch(context.env.API_GOOGLE_SCRIPTS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payloadSanitizado)
    });
    const data = await response.text();

    return new Response(data, {
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ erro: 'Erro interno ao processar depoimento' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}