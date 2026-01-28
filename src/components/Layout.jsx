export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <footer style={footerStyle}>
        <span style={{ opacity: 0.6 }}>💖 Made for fun in Cambridge.</span>
      </footer>
    </>
  )
}

const footerStyle = {
  padding: 'var(--site-padding, 1rem)',
  textTransform: 'uppercase',
  fontSize: '0.75rem',
}
