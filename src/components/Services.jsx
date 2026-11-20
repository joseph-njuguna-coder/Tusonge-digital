import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { services } from '../data/services'
import { icons } from './icons'
import Heading from './Heading'
export default function Services() {
  const [i, setI] = useState(0)
  const s = services[i]
  const Icon = icons[s.icon]
  return (
    <section id="services" className="section"><div className="wrap">
      <Heading eyebrow="What we do" title="Our Services" />
      <div className="tabs" role="tablist">
        {services.map((x, n) => (
          <button key={x.id} role="tab" aria-selected={n === i} className={n === i ? 'on' : ''} onClick={() => setI(n)}>
            {x.tab}{n === i && <motion.i layoutId="ul" className="ul" />}
          </button>
        ))}
      </div>
      <div className="svc-grid">
        <AnimatePresence mode="wait">
          <motion.div key={s.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <div className="svc-head"><Icon size={34} /><div><h3>{s.title}</h3><p>{s.blurb}</p></div></div>
            <ul className="svc-list">
              {s.items.map((t, n) => (
                <motion.li key={t} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * n }}>
                  <Check size={18} /> {t}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <aside className="notsure">
          <img className="illus" src={`/images/service-${s.id}.svg`} alt="" width="400" height="300" loading="lazy" />
          <h3>Not sure?</h3>
          <p>Tell us what you are trying to achieve and we will recommend the right place to start.</p>
          <a className="btn btn-orange" href="#contact">{s.cta}</a>
        </aside>
      </div>
    </div></section>
  )
}
