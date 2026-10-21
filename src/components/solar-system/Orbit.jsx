export default function Orbit({ radius, active }) {
  return (
    <div
      className={`orbit-ring ${active ? 'is-active' : ''}`}
      style={{ '--orbit': `${radius}cqw` }}
      aria-hidden="true"
    />
  )
}
