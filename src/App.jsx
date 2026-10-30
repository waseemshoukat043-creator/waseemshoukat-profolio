
import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, Briefcase, CheckCircle2, Code2,
  Database, Download, GitBranch, GraduationCap, Mail, Menu,
  Moon, Send, Smartphone, Sun, X, Globe, Terminal,
  UserRound, MapPin, CalendarDays
} from "lucide-react";
import "./App.css";

const EMAIL = "waseemshoukat043@gmail.com";
const GITHUB_URL = "https://github.com/waseemshoukat043-creator";

const projects = [
  {
    number: "01",
    title: "File Sharing Web Application",
    type: "Full-Stack Web Application",
    description: "A web application for uploading, listing and downloading files through an Express API with a responsive interface.",
    technologies: ["React", "Node.js", "Express", "Multer"],
    icon: Globe
  },
  {
    number: "02",
    title: "Kanban Task Management",
    type: "Project Management Application",
    description: "A task management application with boards, lists and tasks to organize work into workflow stages.",
    technologies: ["React", "Express", "JavaScript"],
    icon: Briefcase
  },
  {
    number: "03",
    title: "Flutter Task Manager",
    type: "Mobile Application",
    description: "A mobile task management application with task creation, completion and organization features.",
    technologies: ["Flutter", "Dart", "SQLite"],
    icon: Smartphone
  },
  {
    number: "04",
    title: "Smart Inventory System",
    type: "Academic Capstone Concept",
    description: "An academic project concept focused on inventory management and automated demand forecasting.",
    technologies: ["React", "Node.js", "Database"],
    icon: Database
  }
];

const skillGroups = [
  {
    title: "Frontend Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript", "React.js"]
  },
  {
    title: "Backend Development",
    icon: Terminal,
    items: ["Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database & Tools",
    icon: Database,
    items: ["MongoDB", "Supabase", "Git", "GitHub", "VS Code"]
  },
  {
    title: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter", "Dart", "Responsive UI"]
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formMessage, setFormMessage] = useState("");

  const navItems = [
    "Home", "About", "Skills", "Projects", "Education", "Contact"
  ];

  function handleContactSubmit(event) {
    event.preventDefault();

    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormMessage("Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;

    setFormMessage("Your email app should open with your message.");
  }

  return (
    <div className={`app ${lightMode ? "light" : ""}`}>
      <header className="navbar">
        <div className="nav-container">
          <a className="logo" href="#home">WS<span>.</span></a>

          <button
            className="menu-toggle icon-button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav
            className={`nav-links ${menuOpen ? "open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}

            <a
              className="nav-contact"
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Let's talk <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            className="icon-button theme-button"
            aria-label="Toggle theme"
            onClick={() => setLightMode(!lightMode)}
          >
            {lightMode ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              PERSONAL PORTFOLIO
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              Waseem
              <br />
              <span>Shoukat.</span>
            </h1>

            <h2>
              Computer Science Student
              <span className="muted-separator"> / </span>
              Developer
            </h2>

            <p className="hero-description">
              I enjoy building modern web and mobile applications,
              learning new technologies, and turning practical ideas
              into useful digital experiences.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work <ArrowUpRight size={17} />
              </a>

              <a
                className="button button-secondary"
                href="/resume.pdf"
                download
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            <div className="social-links">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GitBranch size={19} />
              </a>

              <a href={`mailto:${EMAIL}`} aria-label="Email">
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="photo-frame">
              <img
                className="profile-photo"
                src="/profile.jpg"
                alt="Waseem Shoukat"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement.classList.add("photo-missing");
                }}
              />

              <div className="photo-overlay">
                <span className="photo-kicker">COMPUTER SCIENCE</span>
                <strong>Waseem Shoukat</strong>
                <span>Building. Learning. Creating.</span>
              </div>
            </div>

            <div className="visual-index">
              01 <span>—</span> PORTFOLIO
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <ArrowDown size={14} />
            SCROLL TO EXPLORE
          </a>
        </section>

        <section id="about" className="section section-standard">
          <SectionHeading
            eyebrow="GET TO KNOW ME"
            title={<>A little <span>about me.</span></>}
            subtitle="The person behind the projects and the curiosity that drives the work."
          />

          <div className="about-grid">
            <div className="about-copy">
              <h3>
                Curious mind. <span>Creative builder.</span>
              </h3>

              <p>
                I am Waseem Shoukat, a Bachelor of Science in
                Computer Science student at COMSATS University
                Islamabad, Vehari Campus. I am interested in web
                development, mobile applications and practical
                software solutions.
              </p>

              <p>
                Through academic and personal projects, I am
                developing my skills in frontend development,
                backend technologies, databases and Flutter.
                I value clean code, continuous learning and
                thoughtful user experiences.
              </p>

              <a className="inline-link" href="#contact">
                Let's connect <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="about-highlights">
              <Highlight icon={Code2} title="Web Development" text="Building responsive web interfaces" />
              <Highlight icon={Smartphone} title="Mobile Development" text="Exploring Flutter applications" />
              <Highlight icon={Database} title="Backend & Database" text="Working with APIs and data" />
              <Highlight icon={GraduationCap} title="Continuous Learning" text="Growing through practical projects" />
            </div>
          </div>

          <div className="quick-facts">
            <div>
              <UserRound size={17} />
              <span><small>PROFILE</small><b>Computer Science Student</b></span>
            </div>
            <div>
              <MapPin size={17} />
              <span><small>UNIVERSITY</small><b>COMSATS, Vehari Campus</b></span>
            </div>
            <div>
              <CalendarDays size={17} />
              <span><small>ACADEMIC STATUS</small><b>6th Semester</b></span>
            </div>
          </div>
        </section>

        <section id="skills" className="section section-tinted">
          <div className="section-inner">
            <SectionHeading
              eyebrow="MY TOOLKIT"
              title={<>Technical <span>skills.</span></>}
              subtitle="Technologies and tools I am learning and using in my projects."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-top">
                      <div className="skill-icon"><Icon size={21} /></div>
                      <ArrowUpRight className="card-arrow" size={17} />
                    </div>

                    <h3>{group.title}</h3>

                    <div className="skill-tags">
                      {group.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="section section-standard">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={<>Things I've <span>worked on.</span></>}
            subtitle="A selection of academic and personal projects."
          />

          <div className="projects-grid">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <Icon className="project-icon" size={24} />
                  </div>

                  <p className="project-type">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>PROJECT {project.number}</span>
                    <span className="project-arrow"><ArrowUpRight size={16} /></span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="education" className="section section-tinted">
          <div className="section-inner">
            <SectionHeading
              eyebrow="ACADEMIC BACKGROUND"
              title={<>Education & <span>learning.</span></>}
            />

            <article className="education-card">
              <div className="education-icon">
                <GraduationCap size={27} />
              </div>

              <div className="education-content">
                <p className="project-type">UNDERGRADUATE DEGREE</p>
                <h3>Bachelor of Science in Computer Science</h3>
                <p>COMSATS University Islamabad, Vehari Campus</p>
                <span className="education-status">
                  <CheckCircle2 size={15} />
                  Currently in 6th Semester
                </span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section section-standard contact-section">
          <SectionHeading
            eyebrow="HAVE A QUESTION?"
            title={<>Let's <span>connect.</span></>}
            subtitle="For opportunities, collaborations or questions, send me a message."
          />

          <div className="contact-grid">
            <div className="contact-intro">
              <div className="contact-icon"><Mail size={23} /></div>
              <h3>Let's start a conversation.</h3>

              <p>
                I welcome professional connections, learning
                opportunities and collaboration on meaningful projects.
              </p>

              <div className="contact-method">
                <Mail size={17} />
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </div>

              <div className="contact-method">
                <GitBranch size={17} />
                <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                  GitHub Profile
                </a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleContactSubmit}>
              <h3>Send a message</h3>

              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={(event) => setForm({ ...form, name: event.target.value })}
                placeholder="Enter your name"
                required
              />

              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                placeholder="you@example.com"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={(event) => setForm({ ...form, message: event.target.value })}
                placeholder="Write your message..."
                required
              />

              <button className="button button-primary submit-button" type="submit">
                Prepare Email <Send size={15} />
              </button>

              {formMessage && (
                <p className="form-message" role="status">{formMessage}</p>
              )}

              <p className="form-hint">
                This form opens your default email app.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">WS<span>.</span></a>
        <p>Designed & built by Waseem Shoukat.</p>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

function Highlight({ icon: Icon, title, text }) {
  return (
    <div className="highlight-card">
      <div className="highlight-icon"><Icon size={20} /></div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
