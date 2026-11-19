import Heading from './Heading'
import Reveal from './Reveal'
export default function About() {
  return (
    <section className="section tint"><div className="wrap two">
      <div>
        <Heading eyebrow="About Tusonge Digital" title="One team from idea to complete digital presence" />
        <Reveal delay={0.1}><p className="lead left">Tusonge Digital is a professional digital consultancy for businesses, startups, entrepreneurs and organisations. Your website, application, marketing, video and brand come from one accountable team.</p>
        <a className="btn btn-orange" href="#contact">Book a free consultation</a></Reveal>
      </div>
      <Reveal delay={0.15}><img className="illus" src="/images/about.svg" alt="Two colleagues planning a project around a table" width="400" height="300" loading="lazy" /></Reveal>
    </div></section>
  )
}
