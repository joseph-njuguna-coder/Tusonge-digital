import Heading from './Heading'
import Reveal from './Reveal'
const steps = [
  ['Discover', 'We learn your goals, audience and constraints.'],
  ['Plan & design', 'We agree scope, structure and the look and feel.'],
  ['Build', 'We develop, produce and test every deliverable.'],
  ['Launch', 'We publish and hand over with clear guidance.'],
  ['Grow & support', 'We maintain, optimise and extend what we built.'],
]
export default function Process() {
  return (
    <section id="process" className="section tint"><div className="wrap">
      <Heading eyebrow="Our approach" title="How we work" />
      <ol className="steps">{steps.map(([t, d], n) => (
        <Reveal as="li" key={t} delay={n * 0.1}><span>{n + 1}</span><h3>{t}</h3><p>{d}</p></Reveal>
      ))}</ol>
    </div></section>
  )
}
