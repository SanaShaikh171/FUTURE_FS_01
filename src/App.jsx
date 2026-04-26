import './App.css'

function App() {
  const projects = [
    {
      title: "Personal Portfolio",
      tech: "React, Custom CSS",
      desc: "My first task for Future Interns internship."
    },
    {
      title: "Upcoming Project",
      tech: "Full Stack",
      desc: "Task 2 for the internship program."
    }
  ];

  return (
    <div className="portfolio-container">
      {/* Introduction */}
      <header className="hero-section">
        <h1 className="hero-title">Hi, I'm Sana Shaikh</h1>
        <p className="hero-subtitle">Full-Stack Developer Intern</p>
      </header>

      {/* About Me Section */}
      <section className="section-card">
        <h2 className="section-heading">About Me</h2>
        <p>
          I am a passionate developer currently interning at <strong>Future Interns</strong>. 
          I specialize in building clean, functional, and professional web applications.
        </p>
      </section>

      {/* Projects Section */}
      <section className="section-card">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <span className="tech-badge">{project.tech}</span>
              <p>{project.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-card">
        <h2 className="section-heading">Get in Touch</h2>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="4"></textarea>
          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default App