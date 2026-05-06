import './App.css'
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaReact } from "react-icons/fa";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

const projects = [
  {
    title: "Personal Portfolio",
    tech: "React, CSS, Framer Motion",
    desc: "Modern responsive portfolio website with glassmorphism UI and smooth animations.",
    image: "https://via.placeholder.com/400x200"
  },
  {
    title: "Upcoming Full Stack Project",
    tech: "React, Node.js",
    desc: "Developing a full-stack application with backend integration and API handling.",
    image: "https://via.placeholder.com/400x200"
  }
];

const handleSubmit = async (e) => {

  e.preventDefault();

  try {

    const response = await fetch("https://portfolio-backend-3g6z.onrender.com/contact", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(form),

    });

    const data = await response.json();

    alert(data.message);

    setForm({
      name: "",
      email: "",
      message: ""
    });

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }

};

  return (
    <><div>
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
        <div className="hero-buttons">
          <a href="#projects" className="hero-btn">
            Explore Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
          <div className="social-links">
            <a
              href="https://github.com/SanaShaikh171"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/sana-shaikh113"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:shaikhsana7181@gmail.com">
              <MdEmail />
            </a>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="section-card">
        <h2 className="section-heading">About Me</h2>

        <p>
          I am a passionate Full-Stack Developer Intern focused on building
          responsive, scalable, and user-friendly web applications.
          I enjoy solving problems, learning modern technologies,
          and creating clean digital experiences.
        </p>

        <h3 style={{ marginTop: "20px" }}>Skills</h3>
        <p>React | JavaScript | HTML | CSS | Java | SQL</p>
        <h3 style={{ marginTop: "20px" }}>Experience</h3>
        <p>Full-Stack Developer Intern at Future Interns</p>

        <h3 style={{ marginTop: "20px" }}>Education</h3>
        <p>Computer Science Student</p>
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
              <p><strong>Email:</strong> shaikhsana7181@gmail.com</p>
              <p>
                <strong>GitHub:</strong>
                <a href="https://github.com/SanaShaikh171" target="_blank">
                  github.com/SanaShaikh171
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong>
                <a href="https://www.linkedin.com/in/sana-shaikh113" target="_blank">
                  linkedin.com/in/sana-shaikh113
                </a>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
               value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })} />

            <input
              type="email"
              placeholder="Your Email"
               value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })} />

            <textarea
              placeholder="Your Message"
              rows="5"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            ></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>

        </div>
      </section>
    </div><footer className="footer">
        <p>© 2026 Sana Shaikh. All rights reserved.</p>
      </footer></>
  )
}

export default App;