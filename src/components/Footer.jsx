import { site } from '../data/site'
import { services } from '../data/services'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap fgrid">
      <div><a href="#top" className="logo"><b>Tusonge</b><span>Digital</span></a>
        <p>A digital consultancy for websites, applications, marketing, video and branding. {site.experience}.</p></div>
      <div><h4>Services</h4>{services.map(s => <a key={s.id} href="#services">{s.title}</a>)}</div>
      <div><h4>Company</h4><a href="#process">Our process</a><a href="#work">Work</a><a href="#faq">FAQ</a><a href="#contact">Contact</a></div>
      <div><h4>Contact</h4><a href={site.phoneHref}>{site.phone}</a>
        {site.emails.map(m => <a key={m} href={`mailto:${m}`}>{m}</a>)}<span>{site.location}</span></div>
    </div>
    <p className="copy">© {new Date().getFullYear()} {site.name}. {site.domain}</p></footer>
  )
}
