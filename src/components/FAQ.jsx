import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Heading from './Heading'
const faqs = [
  ['What services does Tusonge Digital offer?', 'Website design and development, application development, digital marketing, video editing and production, and branding and graphic design.'],
  ['Can you register a domain name for me?', 'Yes. We register and transfer domains, including .co.ke and international extensions. Tell us the name you want and we will check availability and send a quote.'],
  ['Can you handle a project end to end?', 'Yes. We can take a business from an idea to a complete digital presence, or work on one part of it.'],
  ['How do I start?', 'Send an enquiry using the form below, call or WhatsApp +254 718 779 438. We will respond to discuss your goals.'],
  ['Do you offer support after launch?', 'Yes. Website maintenance and support are part of our website services.'],
  ['Do you work with clients outside Nairobi?', 'Yes. Get in touch with your location and requirements and we will confirm how we can work together.'],
]
export default function FAQ() {
  const [o, setO] = useState(0)
  return (
    <section id="faq" className="section tint"><div className="wrap narrow">
      <Heading eyebrow="Questions" title="Frequently asked questions" />
      {faqs.map(([q, a], n) => (
        <div key={q} className="faq">
          <button aria-expanded={o === n} onClick={() => setO(o === n ? -1 : n)}>{q}<ChevronDown className={o === n ? 'rot' : ''} /></button>
          <AnimatePresence initial={false}>{o === n && <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>{a}</motion.p>}</AnimatePresence>
        </div>
      ))}
    </div></section>
  )
}
