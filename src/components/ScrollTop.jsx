import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(window.scrollY > 600); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  return show ? <a className="top" href="#top" aria-label="Back to top"><ArrowUp /></a> : null
}
