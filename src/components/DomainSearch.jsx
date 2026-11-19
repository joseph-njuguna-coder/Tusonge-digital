import { useState } from 'react'
import { MessageCircle, Mail, Search } from 'lucide-react'
import { extensions } from '../data/domains'
import { site } from '../data/site'
import Heading from './Heading'

// No live availability check here: that needs your registrar's API. This sends the request to you instead.
export default function DomainSearch() {
  const [name, setName] = useState('')
  const [ext, setExt] = useState(extensions[0])
  const [err, setErr] = useState('')
  const [asked, setAsked] = useState('')

  const submit = e => {
    e.preventDefault()
    const n = name.trim().toLowerCase().replace(/^https?:\/\//, '').replace(/^www\./, '').split('.')[0]
    if (!/^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/.test(n)) { setErr('Use letters, numbers and hyphens only, for example: mybusiness'); setAsked(''); return }
    setErr(''); setAsked(n + ext)
  }
  const msg = `Hello Tusonge Digital, please check whether ${asked} is available and send me a quote to register it.`

  return (
    <section id="domains" className="section tint"><div className="wrap">
      <Heading eyebrow="Domains" title="Find your business domain">Tell us the name you want. We check availability and handle the registration for you.</Heading>
      <form className="dform" onSubmit={submit} noValidate>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="yourbusiness" aria-label="Domain name" aria-invalid={!!err} />
        <button className="btn btn-orange"><Search size={18} /> Check domain</button>
        <div className="dext" role="group" aria-label="Extension">
          {extensions.map(x => <button type="button" key={x} aria-pressed={x === ext} className={x === ext ? 'on' : ''} onClick={() => setExt(x)}>{x}</button>)}
        </div>
      </form>
      {err && <p className="dres bad" role="alert">{err}</p>}
      {asked && (
        <div className="dres" role="status">
          <h3>{asked}</h3>
          <p>Send this to the team and we will confirm availability and send you a quote.</p>
          <div className="btns center">
            <a className="btn btn-green" href={`${site.whatsapp}?text=${encodeURIComponent(msg)}`} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
            <a className="btn btn-orange" href={`mailto:${site.emails[0]}?subject=${encodeURIComponent('Domain enquiry: ' + asked)}&body=${encodeURIComponent(msg)}`}><Mail size={18} /> Email</a>
          </div>
        </div>
      )}
    </div></section>
  )
}
