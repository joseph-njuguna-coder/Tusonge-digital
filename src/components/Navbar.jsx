import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { site } from '../data/site'
const links = [['Services','#services'],['Domains','#domains'],['Work','#work'],['Process','#process'],['FAQ','#faq'],['Contact','#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [stuck, setStuck] = useState(false)
  useEffect(() => {
    const f = () => setStuck(window.scrollY > 10)
    f(); window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  return (
    <header className={'header' + (stuck ? ' stuck' : '')}>
      <div className="topbar"><div className="wrap">
        <a href={site.phoneHref}><Phone size={14} /> {site.phone}</a>
        <a href={`mailto:${site.emails[0]}`}><Mail size={14} /> {site.emails[0]}</a>
      </div></div>
      <div className="wrap nav">
        <a href="#top" className="logo" aria-label="Tusonge Digital home"><b>Tusonge</b><span>Digital</span></a>
        <nav className="links" aria-label="Main">
          {links.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
        </nav>
        <a className="btn btn-orange nav-cta" href="#contact">Start a project</a>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav className="drawer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {links.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            <a className="btn btn-orange" href="#contact" onClick={() => setOpen(false)}>Start a project</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
