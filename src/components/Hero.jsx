import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
const v = { hidden: { opacity: 0, y: 24 }, show: i => ({ opacity: 1, y: 0, transition: { delay: 0.12 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] } }) }
export default function Hero() {
  return (
    <section id="top" className="hero"><div className="wrap hero-grid">
      <div>
        <motion.h1 variants={v} custom={0} initial="hidden" animate="show">We turn digital ideas into powerful business solutions.</motion.h1>
        <motion.hr className="rule" variants={v} custom={1} initial="hidden" animate="show" />
        <motion.p variants={v} custom={2} initial="hidden" animate="show">From professional websites and custom applications to digital marketing, video production and branding, Tusonge Digital helps businesses build, grow and thrive in the digital world.</motion.p>
        <motion.div className="btns" variants={v} custom={3} initial="hidden" animate="show">
          <a className="btn btn-orange" href="#contact"><Calendar size={18} /> Start a project</a>
          <a className="btn btn-green" href="#services">Explore our services</a>
        </motion.div>
        <motion.p className="badge" variants={v} custom={4} initial="hidden" animate="show">6+ years of professional experience</motion.p>
      </div>
      <motion.img src="/images/hero.svg" alt="Developer working at a desk with a dashboard on screen" className="illus" width="400" height="300" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8 }} />
    </div></section>
  )
}
