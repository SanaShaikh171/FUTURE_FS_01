import './App.css'

function App() {
  return (
    <div className="portfolio-container">
      {/* Introduction */}
      <header className="hero-section">
        <h1 className="hero-title">Hi, I'm Sana Shaikh</h1>
        <p className="hero-subtitle">Full-Stack Developer Intern</p>
      </header>

      {/* About Me Section */}
      <section className="about-card">
        <h2 style={{color: '#60a5fa', marginBottom: '15px'}}>About Me</h2>
        <p>
          I am a passionate developer currently interning at <strong>Future Interns</strong>. 
          I specialize in building clean, functional, and professional web applications.
        </p>
      </section>
    </div>
  )
}

export default App