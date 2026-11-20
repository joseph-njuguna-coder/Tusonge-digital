// Edit Mimi's words here. Mimi never states prices, client names or results you have not supplied.
import { services } from './services'
import { site } from './site'

export const greeting = "Hi, I'm Mimi, Tusonge Digital's AI assistant. I can tell you about our services or help you start a project. What would you like to know?"
export const chips = ['Our services', 'Get a quote', 'Talk to a human']

const list = id => { const s = services.find(x => x.id === id); return `${s.title}: ${s.items.slice(0, 5).join(', ')} and more.` }
const rules = [
  [/\b(domain|dns|\.co\.ke|\.com|renew|transfer)\b/, () => list('domains') + ' Use the domain box on the site, or message the team, to have a name checked.'],
  [/\b(hi|hello|hey|habari|jambo)\b/, () => "Hello! Ask me about websites, apps, marketing, video or branding, or tell me about your project."],
  [/\b(web|website|wordpress|shop|e-?commerce|landing)\b/, () => list('web')],
  [/\b(app|application|system|software|dashboard|booking|api|automation)\b/, () => list('apps')],
  [/\b(market|seo|social|ads?|advert|campaign|content)\b/, () => list('marketing')],
  [/\b(video|reel|film|motion|edit)\b/, () => list('video')],
  [/\b(brand|logo|design|flyer|poster|identity)\b/, () => list('brand')],
  [/\b(price|cost|quote|budget|how much|charge)\b/, () => "Pricing depends on the scope of the work, so I can't give a figure here. Send a short description of your project through the contact form or WhatsApp and the team will respond with a quote."],
  [/\b(experience|years|who|team|joseph|lead)\b/, () => `Tusonge Digital has ${site.experience}. Projects are led by ${site.lead.name}, ${site.lead.role}.`],
  [/\b(contact|phone|call|email|mail|whatsapp|where|location|address|office)\b/, () => `Phone/WhatsApp: ${site.phone}. Email: ${site.emails.join(' or ')}. Location: ${site.location}.`],
  [/\b(service|offer|do you do|what do)\b/, () => "We offer: Website Design & Development, Application Development, Digital Marketing, Video Editing & Production, and Branding & Graphic Design. Which one interests you?"],
]
export const localReply = text => {
  const t = text.toLowerCase()
  const hit = rules.find(([re]) => re.test(t))
  return hit ? hit[1]() : "I'm not sure about that one. For anything specific, you can message the team on WhatsApp and a person will help."
}
