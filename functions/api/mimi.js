// Cloudflare Pages Function: POST /api/mimi  ->  { reply }
// Set ANTHROPIC_API_KEY in Cloudflare (Settings > Environment variables > encrypted). Never put the key in src/.
// Then set VITE_MIMI_ENDPOINT=/api/mimi and redeploy. Usage costs money and is open to the public, so
// add Cloudflare rate limiting (Security > WAF > Rate limiting rules) before relying on it.
const SYSTEM = `You are Mimi, the AI assistant on the Tusonge Digital website (Nairobi, Kenya).
Say you are an AI if asked. Services: website design & development, application development, digital marketing, video editing & production, branding & graphic design.
The company has 6+ years of professional experience; Joseph Njuguna is Technical Lead Engineer.
Contact: +254 718 779 438 (call/WhatsApp), mwangi@manyumba.co.ke, jnjugunam8@gmail.com, Kiambu Road, Jumeirah Heights Complex.
Rules: be brief and friendly. Never invent prices, timelines, clients, awards or results; for quotes, ask for project details and point to the contact form or WhatsApp. Stay on Tusonge Digital topics.`

export async function onRequestPost({ request, env }) {
  const json = (o, s = 200) => new Response(JSON.stringify(o), { status: s, headers: { 'Content-Type': 'application/json' } })
  try {
    const { messages } = await request.json()
    const clean = (Array.isArray(messages) ? messages : []).slice(-10)
      .map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: String(m.content).slice(0, 500) }))
    if (!clean.length || clean[0].role !== 'user') return json({ error: 'bad request' }, 400)
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
      body: JSON.stringify({ model: 'claude-haiku-5-5', max_tokens: 400, system: SYSTEM, messages: clean }),
    })
    if (!r.ok) return json({ error: 'upstream' }, 502)
    const d = await r.json()
    return json({ reply: d.content?.filter(b => b.type === 'text').map(b => b.text).join('\n') || '' })
  } catch { return json({ error: 'server' }, 500) }
}
