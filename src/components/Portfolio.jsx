import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { categories, projects } from '../data/projects'
import Heading from './Heading'
export default function Portfolio() {
  const [c, setC] = useState('All')
  const list = projects.filter(p => c === 'All' || p.category === c || p.also?.includes(c))
  return (
    <section id="work" className="section tint"><div className="wrap">
      <Heading eyebrow="Featured work" title="Projects">Selected work. Cards marked Placeholder will be replaced with real projects.</Heading>
      <div className="filters">{categories.map(x => <button key={x} className={x === c ? 'on' : ''} onClick={() => setC(x)}>{x}</button>)}</div>
      <motion.div layout className="proj-grid">
        <AnimatePresence>
          {list.map(p => (
            <motion.figure layout key={p.title} className="proj" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}>
              <div className="proj-img" style={p.image ? { backgroundImage: `url(${p.image})`, backgroundColor: `hsl(${p.hue} 85% 95%)`, backgroundSize: p.cover ? 'cover' : 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: p.cover ? 'top' : 'center' } : { background: `linear-gradient(135deg,hsl(${p.hue} 80% 70%),hsl(${p.hue + 30} 70% 45%))` }} role="img" aria-label={`${p.title} project preview`} />
              <figcaption><b>{p.title}</b><span>{[p.category, ...(p.also || [])].join(' · ')}</span>{p.summary && <p>{p.summary}</p>}{p.tags && <ul className="tags">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>}{p.url && <a href={p.url} target="_blank" rel="noreferrer">Visit website ↗</a>}{p.placeholder && <em>Placeholder</em>}{p.sample && <em>Sample app</em>}</figcaption>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div></section>
  )
}
