import './App.css'
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact, FaNodeJs } from "react-icons/fa";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

const projects = [
  {
    title: "Personal Portfolio",
    tech: "React, CSS",
    desc: "Responsive portfolio website",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Upcoming Project",
    tech: "Full Stack",
    desc: "Working on backend integration",
    image: "https://via.placeholder.com/400x200"
  }
];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message captured!");
  };

  return (
    <div>
     <nav className="navbar">
  <a href="#about">About</a>
  <a href="#projects">Projects</a>
  <a href="#contact">Contact</a>
</nav>
      {/* HERO */}
      <header className="hero-section">
       <h1 className="hero-title">Hi, I'm Sana Shaikh</h1>
      <p className="hero-subtitle">
        I build modern, responsive and scalable web applications. Currently a Full-Stack Developer Intern, I'm passionate about creating seamless user experiences and continuously learning new technologies.
      </p>
      <a href="#projects" className="hero-btn">Explore Projects</a> 

       <a href="#projects" className="hero-btn">View My Work</a>
      <div className="social-links">
  <a href="https://github.com/sanashiakh171" target="_blank"><FaGithub /></a>
  <a href="https://linkedin.com/in/yourprofile" target="_blank"><FaLinkedin /></a>
  <a href="mailto:shaikhsana7181@gmail.com"><MdEmail /></a>
</div>
     
      </header>

      {/* ABOUT */}
     <section id="about" className="section-card">
  <h2 className="section-heading">About Me</h2>

  <p>
    I am a Full-Stack Developer Intern with a strong interest in building 
    scalable and user-friendly web applications. I enjoy solving problems 
    and continuously learning new technologies.
  </p>

  <h3 style={{ marginTop: "20px" }}>Skills</h3>
  <p>React | JavaScript | HTML | CSS | Java | SQL</p>
</section>

      {/* PROJECTS */}
      <section id="projects" className="section-card">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-icons">
  <FaReact />
</div>
              <img src={project.image} alt="project" className="project-img" />
              <h3>{project.title}</h3>
              <span className="tech-badge">{project.tech}</span>
              <p>{project.desc}</p>
            </div> 
          ))}
        </div>
      </section>

      {/* CONTACT */}
 <section id="contact" className="section-card">
  <h2 className="section-heading">Get in Touch</h2>

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-info">
      <h3>Let’s Connect</h3>

      <p>
        I'm currently open to internship opportunities and collaborative projects.
        If you have an idea, opportunity, or just want to connect, feel free to reach out.
      </p>

      <div className="contact-details">
        <p><strong>Email:</strong> youremail@gmail.com</p>
        <p>
          <strong>GitHub:</strong> 
          <a href="https://github.com/yourusername" target="_blank">
            github.com/yourusername
          </a>
        </p>
        <p>
          <strong>LinkedIn:</strong> 
          <a href="https://linkedin.com/in/yourprofile" target="_blank">
            linkedin.com/in/yourprofile
          </a>
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Your Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Your Message"
        rows="5"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      ></textarea>

      <button type="submit" className="send-btn">
        Send Message
      </button>
    </form>

  </div>
</section>
    </div>
  )
}

export default App;