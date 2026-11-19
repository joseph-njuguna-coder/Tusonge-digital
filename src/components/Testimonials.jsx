import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../data/testimonials'
import Heading from './Heading'
export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = d => setI((i + d + testimonials.length) % testimonials.length)
  return (
    <section className="section"><div className="wrap">
      <Heading eyebrow="Trusted by clients" title="Testimonials" />
      <div className="testi">
        <button className="pill" onClick={() => go(-1)} aria-label="Previous testimonial">‹</button>
        <AnimatePresence mode="wait">
          <motion.div key={i} className="blob" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
            <div className="avatar" aria-hidden="true">{t.name[0]}</div>
            <p>“{t.quote}”</p><b>{t.name}</b><span>{t.role}</span>
            {t.placeholder && <em>Placeholder content</em>}
          </motion.div>
        </AnimatePresence>
        <button className="pill" onClick={() => go(1)} aria-label="Next testimonial">›</button>
      </div>
    </div></section>
  )
}
