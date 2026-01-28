import { Link, useParams } from 'react-router-dom'

export default function SketchPage() {
  const { year, slug } = useParams()
  const iframeSrc = `/${year}/${slug}.html`

  return (
    <div>
      <p>
        <Link to="/">← Back to gallery</Link>
      </p>
      <iframe
        src={iframeSrc}
        title={slug}
        style={{
          width: '100%',
          height: '80vh',
          border: 'none',
          borderRadius: 4,
          background: '#111',
        }}
      />
    </div>
  )
}
