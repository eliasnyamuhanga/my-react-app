
function Elias() {
  return (
    <div className="elias-page">

      {/* HERO SECTION */}
      <section className="elias-hero">

        <div className="elias-badge">
          ● AVAILABLE FOR PROJECTS
        </div>

        <h1>
          Hi, I'm <span>Elias</span> 👋
        </h1>

        <h2>
          Full-Stack Developer &amp; Tech Enthusiast
        </h2>

        <p>
          I build modern, responsive and powerful web
          applications using today's latest technologies.
          Welcome to my digital space.
        </p>

        <div className="hero-buttons">
          <button
            onClick={() =>
              document
                .getElementById("tech-stack")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            🚀 Explore My Tech
          </button>

          <button
            className="outline-btn"
            onClick={() =>
              document
                .getElementById("about-me")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            👨‍💻 About Me
          </button>
        </div>

      </section>


      {/* STATS */}
      <section className="elias-stats">

        <div className="stat-card">
          <span>⚡</span>
          <h3>Fast</h3>
          <p>Performance</p>
        </div>

        <div className="stat-card">
          <span>💡</span>
          <h3>Creative</h3>
          <p>Solutions</p>
        </div>

        <div className="stat-card">
          <span>🔐</span>
          <h3>Secure</h3>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <span>📱</span>
          <h3>Responsive</h3>
          <p>Design</p>
        </div>

      </section>


      {/* ABOUT */}
      <section
        className="elias-section"
        id="about-me"
      >

        <div className="section-title">
          <span>01</span>
          <h2>About Me</h2>
        </div>

        <div className="about-card">

          <div className="about-icon">
            👨‍💻
          </div>

          <div>
            <h3>Building Ideas Into Reality</h3>

            <p>
              My name is Elias. I'm passionate about
              technology, programming and building
              useful digital experiences.
            </p>

            <p>
              I enjoy learning new technologies,
              solving problems and turning ideas into
              real applications that people can use.
            </p>
          </div>

        </div>

      </section>


      {/* TECHNOLOGY */}
      <section
        className="elias-section"
        id="tech-stack"
      >

        <div className="section-title">
          <span>02</span>
          <h2>Technology Stack</h2>
        </div>

        <div className="tech-grid">

          <div className="tech-card">
            <div className="tech-icon">⚛️</div>
            <h3>React</h3>
            <p>Modern UI development</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🟨</div>
            <h3>JavaScript</h3>
            <p>Dynamic web applications</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🌐</div>
            <h3>HTML</h3>
            <p>Web structure</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🎨</div>
            <h3>CSS</h3>
            <p>Modern interfaces</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">⚡</div>
            <h3>Vite</h3>
            <p>Lightning-fast development</p>
          </div>

          <div className="tech-card">
            <div className="tech-icon">🐙</div>
            <h3>Git</h3>
            <p>Version control</p>
          </div>

        </div>

      </section>


      {/* WHAT I DO */}
      <section className="elias-section">

        <div className="section-title">
          <span>03</span>
          <h2>What I Do</h2>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <span>💻</span>
            <h3>Web Development</h3>
            <p>
              Creating modern and responsive websites
              that work across different devices.
            </p>
          </div>

          <div className="service-card">
            <span>⚙️</span>
            <h3>Web Applications</h3>
            <p>
              Building interactive applications with
              powerful functionality and clean design.
            </p>
          </div>

          <div className="service-card">
            <span>🎯</span>
            <h3>Problem Solving</h3>
            <p>
              Turning complex ideas and problems into
              simple and practical solutions.
            </p>
          </div>

        </div>

      </section>


      {/* FUTURE */}
      <section className="future-card">

        <div>
          <span className="future-label">
            NEXT LEVEL 🚀
          </span>

          <h2>
            Always Learning.
            <br />
            Always Building.
          </h2>

          <p>
            Technology never stops evolving, and neither
            do I. My goal is to keep learning, building
            and creating better digital experiences.
          </p>
        </div>

        <div className="future-symbol">
          &lt;/&gt;
        </div>

      </section>


      {/* FOOTER */}
      <footer className="elias-footer">
        <p>
          Built with ❤️ by <strong>Elias</strong>
        </p>

        <span>
          React • JavaScript • Vite
        </span>
      </footer>

    </div>
  );
}

export default Elias;
