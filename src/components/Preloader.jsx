import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Shows the logo and a progress bar until the page has loaded (minimum ~1s, maximum 4s).
export default function Preloader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let t
    const finish = () => { t = setTimeout(() => setShow(false), 1000) }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    const cap = setTimeout(() => setShow(false), 4000)
    return () => { clearTimeout(t); clearTimeout(cap); window.removeEventListener('load', finish); document.body.style.overflow = '' }
  }, [])

  useEffect(() => { if (!show) document.body.style.overflow = '' }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div className="preloader" role="status" aria-label="Loading"
          exit={{ y: '-100%' }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}>
          <motion.div className="pl-logo" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
            <b>Tusonge</b><span>Digital</span>
          </motion.div>
          <div className="pl-bar"><motion.i initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1, ease: 'easeInOut' }} /></div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
