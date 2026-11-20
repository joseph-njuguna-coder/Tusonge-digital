import Reveal from './Reveal'
export default function CTA() {
  return (
    <section className="cta"><Reveal className="wrap">
      <h2>Together, online.</h2>
      <p>Tell us about your project and we will help you build it.</p>
      <div className="btns center">
        <a className="btn btn-ghost" href="#services">Explore services</a>
        <a className="btn btn-white" href="#contact">Start a project</a>
      </div>
    </Reveal></section>
  )
}
