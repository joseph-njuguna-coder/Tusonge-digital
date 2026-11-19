import { MessageCircle } from 'lucide-react'
import { site } from '../data/site'
export default function WhatsAppButton() {
  return <a className="wa" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><MessageCircle /></a>
}
