import { useEffect } from 'react';

const stats = [
  { label: 'IoT Devices Processed', value: '5,000+' },
  { label: 'Concurrent WebSockets', value: '2,000+' },
  { label: 'API Latency Improvement', value: '64%' },
  { label: 'Production Experience', value: '2+ Years' },
];

const tech = [
  'Node.js',
  'TypeScript',
  'React',
  'MongoDB',
  'Redis',
  'Socket.io',
  'Docker',
  'Express',
  'Nginx',
  'Python',
  'GitHub',
];

const projects = [
  {
    title: 'Crypto Scraper',
    description:
      'High-frequency Binance WebSocket scraper with configurable Telegram alerts, multi-pair stream processing, and sub-second signal notifications.',
    tags: ['Python', 'Pandas', 'WebSockets', 'Telegram Bot API'],
  },
  {
    title: 'Real-Time Chat Application',
    description:
      'Socket.io powered messaging with room orchestration, typing indicators, delivery acknowledgements, and JWT-protected identity.',
    tags: ['Node.js', 'Socket.io', 'JWT', 'MongoDB'],
  },
  {
    title: 'GST Report Generator',
    description:
      'Desktop workflow utility to automate GST-compliant report creation, calculations, and formatted XLSX exports for business users.',
    tags: ['Python', 'Tkinter', 'XlsxWriter'],
  },
];

const timeline = [
  'Architected real-time GPS platform ingesting TCP/UDP telemetry under 100ms.',
  'Built resilient streaming layer handling 2,000+ live dashboard clients.',
  'Implemented modular CRM with RBAC reducing operations overhead by 40%.',
  'Optimized MongoDB performance from 900ms to 250ms with indexing + aggregations.',
];

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.18 }
    );

    const items = document.querySelectorAll('.reveal');
    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <header className="hero section">
        <div className="hero-content reveal">
          <p className="eyebrow">Backend-Focused Full-Stack Engineer</p>
          <h1>Abbas Vora</h1>
          <p className="subtitle">
            I build scalable real-time systems, IoT processing pipelines, and high-performance products with Node.js, TypeScript, Redis, and Docker.
          </p>
          <div className="cta-row">
            <a href="mailto:abbasvora23@gmail.com" className="btn btn-primary">Get in touch</a>
            <a href="https://github.com/Abbasvora" className="btn btn-ghost" target="_blank" rel="noreferrer">View GitHub ↗</a>
          </div>
          <div className="meta">
            <span>📍 Raipur, Chhattisgarh</span>
            <span>✅ Open to relocation & remote</span>
          </div>
        </div>
        <div className="hero-visual reveal">
          <div className="orbital-ui">
            <div className="aurora" />
            <div className="glass-card card-a">
              <p>Live Ingestion</p>
              <h3>&lt;100ms</h3>
            </div>
            <div className="glass-card card-b">
              <p>WebSocket Scale</p>
              <h3>2,000+</h3>
            </div>
            <div className="glass-card card-c">
              <p>Query Reduction</p>
              <h3>64%</h3>
            </div>
            <div className="grid-fx" />
          </div>
        </div>
      </header>

      <section className="section stats-grid">
        {stats.map((item, idx) => (
          <article key={item.label} className="card stat reveal" style={{ ['--delay' as string]: `${idx * 100}ms` }}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className="section reveal">
        <h2>Technology Stack</h2>
        <p className="section-copy">Core tools and frameworks I use for production-grade engineering.</p>
        <div className="logo-grid">
          {tech.map((name, idx) => (
            <div key={name} className="logo-card reveal" style={{ ['--delay' as string]: `${idx * 60}ms` }}>
              <span className="logo-dot" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section split">
        <div className="reveal">
          <h2>What I build</h2>
          <p className="section-copy">
            From telemetry ingestion to live dashboard streaming, I focus on clean architecture, low latency APIs, and resilient distributed workflows.
          </p>
          <ul className="feature-list">
            <li>⚙️ Real-time telemetry ingestion via raw TCP/UDP sockets</li>
            <li>🌊 High-throughput WebSocket streaming with event isolation</li>
            <li>🧠 Data-layer optimization with MongoDB indexing + aggregation</li>
            <li>🔐 Secure role-based APIs and modular service design</li>
          </ul>
        </div>
        <div className="timeline card reveal">
          <h3>Impact Highlights</h3>
          <ol>
            {timeline.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section reveal">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <article key={project.title} className="card project reveal" style={{ ['--delay' as string]: `${idx * 120}ms` }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="section footer reveal">
        <h2>Let’s build something fast, scalable, and reliable.</h2>
        <p>Email: <a href="mailto:abbasvora23@gmail.com">abbasvora23@gmail.com</a> · LinkedIn: <a href="https://www.linkedin.com/in/abbas-vora" target="_blank" rel="noreferrer">abbas-vora</a></p>
      </footer>
    </div>
  );
}
