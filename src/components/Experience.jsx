import { Github, MessageCircle } from 'lucide-react'
import Reveal from './Reveal'
import { site } from '../data/site'

// Founder section. Replace /public/images/joseph-njuguna.jpg to change the photo.
export default function Experience() {
  return (
    <section id="founder" className="section"><div className="wrap founder">
      <Reveal className="fphoto">
        <img src="/images/joseph-njuguna.jpg" alt={`Portrait of ${site.lead.name}, ${site.lead.role}`} width="800" height="1200" loading="lazy" />
        <div className="fbadge"><strong>6+</strong><span>years of professional experience</span></div>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="eyebrow">Meet the brain behind Tusonge Digital</p>
        <h2>{site.lead.name}</h2>
        <p className="frole">{site.lead.role}</p>
        <p className="lead left">Joseph founded Tusonge Digital and leads its technical direction, with 6+ years of professional experience behind every project. Your website, application and digital growth are guided by the person who set up the company.</p>
        <div className="btns">
          <a className="btn btn-dark" href={site.github} target="_blank" rel="noreferrer"><Github size={18} /> View GitHub</a>
          <a className="btn btn-green" href={site.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Message Joseph</a>
        </div>
      </Reveal>
    </div></section>
  )
}
