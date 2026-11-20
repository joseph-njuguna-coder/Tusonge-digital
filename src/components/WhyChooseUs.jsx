import { Layers, ShieldCheck, Target, Headphones } from 'lucide-react'
import Heading from './Heading'
import Reveal from './Reveal'
const items = [
  [Layers, 'Complete solutions', 'Websites, applications, marketing, video and branding under one roof.'],
  [ShieldCheck, 'Technical competence', 'Engineering-led delivery with 6+ years of professional experience.'],
  [Target, 'Business focused', 'Every build is tied to what your business needs to achieve.'],
  [Headphones, 'Reliable support', 'Maintenance and support after launch, not just delivery.'],
]
export default function WhyChooseUs() {
  return (
    <section className="section"><div className="wrap">
      <Heading eyebrow="Why choose us" title="Built around your business" />
      <div className="why">{items.map(([I, t, d], n) => (
        <Reveal key={t} delay={n * 0.08} className="why-item"><I size={40} /><div><h3>{t}</h3><p>{d}</p></div></Reveal>
      ))}</div>
    </div></section>
  )
}
