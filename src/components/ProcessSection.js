import './ProcessSection.css';

const STEPS = [
  {
    num: '01',
    title: 'Understand Vision',
    desc: 'We analyze your goals and craft a tailored strategy.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Plan and Design',
    desc: 'Bringing ideas to life with precision and innovation.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Develop and Test',
    desc: 'Ensuring perfection with rigorous testing.',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        <path d="M11 8v6l4 2"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Deliver & Support',
    desc: 'Seamless delivery with ongoing assistance.',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

const ArrowSVG = () => (
  <div className="proc-arrow">
    <svg viewBox="0 0 48 28">
      <path d="M2 14c8-12 16-12 22-6s10 4 22 0"/>
      <polyline points="40 4 46 8 40 14"/>
    </svg>
  </div>
);

export default function ProcessSection() {
  return (
    <section id="process">
      <div className="proc-inner">
        <div className="proc-header rv">
          <h2 className="proc-title">Our Work Process</h2>
          <p className="proc-subtitle">Explained in just 4 easy Steps</p>
        </div>

        <div className="proc-steps">
          {STEPS.map((step, i) => (
            <>
              <div key={step.num} className="proc-step-item rv">
                <div className="proc-circle">
                  {step.icon}
                  <div className="proc-badge">{step.num}</div>
                </div>
                <h3 className="proc-step-title">{step.title}</h3>
                <p className="proc-step-desc">{step.desc}</p>
              </div>
              {i < STEPS.length - 1 && <ArrowSVG key={`arrow-${i}`} />}
            </>
          ))}
        </div>

        <div className="proc-cta rv">
          <span className="proc-cta-text">
            Let's Request a Schedule For Free Consultation
          </span>
          <a href="#contact" className="proc-cta-btn">
            GET IN TOUCH
            <svg viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="14 7 19 12 14 17"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
