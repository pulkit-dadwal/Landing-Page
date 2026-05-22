import './styles.css'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">Landing Page</div>
        <nav className="site-nav">
          <a href="#hero">Home</a>
          <a href="#about">About Me</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header;