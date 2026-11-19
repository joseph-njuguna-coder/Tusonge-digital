import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, projects } from '../data/projects'
import Heading from './Heading'
export default function Portfolio() {
  const [c, setC] = useState('All')
  const list = projects.filter(p => c === 'All' || p.category === c)
  return (
    <section id="work" className="section tint"><div className="wrap">
      <Heading eyebrow="Featured work" title="Projects">Sample layouts shown below are placeholders. Real Tusonge Digital projects will replace them.</Heading>
      <div className="filters">{categories.map(x => <button key={x} className={x === c ? 'on' : ''} onClick={() => setC(x)}>{x}</button>)}</div>
      <motion.div layout className="proj-grid">
        <AnimatePresence>
          {list.map(p => (
            <motion.figure layout key={p.title} className="proj" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="proj-img" style={p.image ? { backgroundImage: `url(${p.image})`, backgroundColor: `hsl(${p.hue} 85% 95%)`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' } : { background: `linear-gradient(135deg,hsl(${p.hue} 80% 70%),hsl(${p.hue + 30} 70% 45%))` }} role="img" aria-label={`${p.title} project preview`} />
              <figcaption><b>{p.title}</b><span>{p.category}</span>{p.placeholder && <em>Placeholder</em>}</figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div></section>
  )
}
