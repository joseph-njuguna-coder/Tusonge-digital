import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, Send, X } from 'lucide-react'
import { greeting, chips, localReply } from '../data/mimi'
import { site } from '../data/site'

// Optional: set VITE_MIMI_ENDPOINT to a URL that accepts { messages } and returns { reply } (see functions/api/mimi.js).
const ENDPOINT = import.meta.env.VITE_MIMI_ENDPOINT

export default function Mimi() {
  const [open, setOpen] = useState(false)
  const [msgs, setMsgs] = useState([{ from: 'bot', text: greeting }])
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const end = useRef(null)

  useEffect(() => { end.current?.scrollIntoView({ block: 'end' }) }, [msgs, busy, open])
  useEffect(() => {
    const k = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k)
  }, [])

  const human = () => {
    const last = [...msgs].reverse().find(m => m.from === 'user')?.text || ''
    const link = `${site.whatsapp}?text=${encodeURIComponent('Hello Tusonge Digital, I was chatting with Mimi. ' + last)}`
    setMsgs(m => [...m, { from: 'bot', text: 'Sure. Tap below to message the team on WhatsApp.', link }])
  }

  const send = async raw => {
    const q = raw.trim()
    if (!q || busy) return
    setText('')
    const next = [...msgs, { from: 'user', text: q }]
    setMsgs(next)
    if (/human|person|agent|someone/i.test(q)) return human()
    setBusy(true)
    let reply
    if (ENDPOINT) {
      try {
        const r = await fetch(ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: next.slice(-10).map(m => ({ role: m.from === 'user' ? 'user' : 'assistant', content: m.text })) }) })
        if (!r.ok) throw new Error()
        reply = (await r.json()).reply
      } catch { reply = localReply(q) }
    } else {
      await new Promise(r => setTimeout(r, 500)); reply = localReply(q)
    }
    setMsgs(m => [...m, { from: 'bot', text: reply }]); setBusy(false)
  }

  return (<>
    <button className="mimi-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Chat with Mimi, our AI assistant">
      {open ? <X size={20} /> : <Bot size={20} />}<span>{open ? 'Close' : 'Ask Mimi'}</span>
    </button>
    <AnimatePresence>
      {open && (
        <motion.section className="mimi" aria-label="Chat with Mimi" initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20 }}>
          <header><Bot size={22} /><div><b>Mimi</b><small>AI assistant · Tusonge Digital</small></div></header>
          <div className="mimi-log" role="log" aria-live="polite">
            {msgs.map((m, i) => (
              <div key={i} className={'bubble ' + m.from}>{m.text}
                {m.link && <a className="btn btn-green" href={m.link} target="_blank" rel="noreferrer">Open WhatsApp</a>}</div>
            ))}
            {busy && <div className="bubble bot typing" aria-label="Mimi is typing">• • •</div>}
            {msgs.length < 3 && <div className="chips">{chips.map(c => <button key={c} onClick={() => (c === 'Talk to a human' ? (setMsgs(m => [...m, { from: 'user', text: c }]), human()) : send(c))}>{c}</button>)}</div>}
            <div ref={end} />
          </div>
          <form onSubmit={e => { e.preventDefault(); send(text) }}>
            <input value={text} onChange={e => setText(e.target.value)} placeholder="Type your question…" aria-label="Message Mimi" maxLength={300} />
            <button aria-label="Send"><Send size={18} /></button>
          </form>
        </motion.section>
      )}
    </AnimatePresence>
  </>)
}
