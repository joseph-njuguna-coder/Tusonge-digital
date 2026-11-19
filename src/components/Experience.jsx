import Reveal from './Reveal'
import { site } from '../data/site'
export default function Experience() {
  return (
    <section className="section"><div className="wrap exp">
      <Reveal className="exp-num"><strong>6+</strong><span>years of professional experience</span></Reveal>
      <Reveal delay={0.1}>
        <h2>Led by hands-on engineering</h2>
        <p className="lead left">Your project is guided by <b>{site.lead.name}</b>, {site.lead.role}, so technical decisions are made by the person who builds the work.</p>
      </Reveal>
    </div></section>
  )
}
