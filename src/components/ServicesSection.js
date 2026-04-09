import './ServicesSection.css';

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10zm0-18C7.59 4 4 7.59 4 12s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1 4h-2v5l4.25 2.52.75-1.23-3-1.79V8z"/></svg>
    ),
    title: 'Logo & Brand Identity',
    desc: 'Distinctive logos and complete brand systems that tell your story.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    ),
    title: 'Web Design & Development',
    desc: 'Fast, responsive websites built to convert visitors into clients.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    title: 'Social Media Design',
    desc: 'Scroll-stopping content that builds community and drives engagement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    ),
    title: 'Print & Packaging Design',
    desc: 'Tactile designs that make your product unforgettable on any shelf.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    title: 'Brand Strategy & Consulting',
    desc: 'Data-driven strategy that aligns your brand with your audience.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    ),
    title: 'Digital Marketing',
    desc: 'ROI-focused campaigns that grow your reach and revenue.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="svc-inner">
        <div className="svc-header rv">
          <div className="sec-tag">What We Do</div>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Services built for<br />brands that mean business
          </h2>
        </div>

        <div className="svc-grid">
          {SERVICES.map(({ icon, title, desc }) => (
            <div key={title} className="svc-item rv">
              <div className="svc-icon">{icon}</div>
              <h3 className="svc-title">{title}</h3>
              <p className="svc-desc">{desc}</p>
              <a href="#contact" className="svc-link">
                Get Started
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="14 7 19 12 14 17"/></svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
