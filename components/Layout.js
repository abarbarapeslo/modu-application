export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 720, margin: '0 auto', padding: '2rem' }}>
      <header>
        <strong>MODU</strong>
      </header>
      <main>{children}</main>
    </div>
  );
}
