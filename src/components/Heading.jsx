import Reveal from './Reveal'
export default function Heading({ eyebrow, title, children }) {
  return (
    <Reveal className="heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </Reveal>
  )
}
