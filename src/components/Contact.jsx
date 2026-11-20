import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { services } from '../data/services'
import { site } from '../data/site'
import Heading from './Heading'
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT
const empty = { name: '', email: '', phone: '', service: '', budget: '', message: '' }
export default function Contact() {
  const [f, setF] = useState(empty)
  const [err, setErr] = useState({})
  const [status, setStatus] = useState('idle')
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const validate = () => {
    const e = {}
    if (f.name.trim().length < 2) e.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Enter a valid email address.'
    if (!/^\+?[\d\s()-]{9,}$/.test(f.phone)) e.phone = 'Enter a valid phone number.'
    if (!f.service) e.service = 'Choose a service.'
    if (f.message.trim().length < 10) e.message = 'Describe your project in at least 10 characters.'
    return e
  }
  const submit = async ev => {
    ev.preventDefault()
    const e = validate(); setErr(e)
    if (Object.keys(e).length) return
    if (!ENDPOINT) { setStatus('noendpoint'); return }
    setStatus('sending')
    try {
      const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(f) })
      if (!r.ok) throw new Error()
      setStatus('sent'); setF(empty)
    } catch { setStatus('error') }
  }
  const wa = `${site.whatsapp}?text=${encodeURIComponent(`Hello Tusonge Digital, I'm ${f.name || 'interested'}. Service: ${f.service || 'not chosen'}. ${f.message}`)}`
  const field = (k, label, props = {}) => (
    <label>{label}<input value={f[k]} onChange={set(k)} aria-invalid={!!err[k]} {...props} />{err[k] && <small role="alert">{err[k]}</small>}</label>
  )
  return (
    <section id="contact" className="section"><div className="wrap contact">
      <div>
        <Heading eyebrow="Contact" title="Start your project" />
        <ul className="info">
          <li><Phone /><a href={site.phoneHref}>{site.phone}</a></li>
          {site.emails.map(m => <li key={m}><Mail /><a href={`mailto:${m}`}>{m}</a></li>)}
          <li><MapPin />{site.location}</li>
        </ul>
        <p>{site.lead.name}, {site.lead.role}</p>
      </div>
      <form onSubmit={submit} noValidate>
        {field('name', 'Name', { autoComplete: 'name' })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('phone', 'Phone number', { type: 'tel', autoComplete: 'tel' })}
        <label>Service required
          <select value={f.service} onChange={set('service')} aria-invalid={!!err.service}>
            <option value="">Select a service</option>
            {services.map(s => <option key={s.id}>{s.title}</option>)}
          </select>{err.service && <small role="alert">{err.service}</small>}
        </label>
        {field('budget', 'Project budget (optional)', { placeholder: 'e.g. KES 150,000' })}
        <label>Project description<textarea rows="4" value={f.message} onChange={set('message')} aria-invalid={!!err.message} />{err.message && <small role="alert">{err.message}</small>}</label>
        <button className="btn btn-orange" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send enquiry'}</button>
        {status === 'sent' && <p className="ok" role="status">Enquiry sent. We will be in touch.</p>}
        {status === 'error' && <p className="bad" role="alert">Your enquiry did not send. Try again, or call {site.phone}.</p>}
        {status === 'noendpoint' && <p className="bad" role="alert">Online form delivery is not configured yet. <a href={wa} target="_blank" rel="noreferrer">Send this enquiry on WhatsApp</a> instead.</p>}
      </form>
    </div></section>
  )
}
