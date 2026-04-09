import './TeamSection.css';
const TEAM = [
  {
    name: 'Zeeshan',
    role: 'Founder & Creative Director',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=faces,top&auto=format&q=80',
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Alisha Imran',
    role: 'Lead Designer & Web Dev',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces,top&auto=format&q=80',
    linkedin: '#',
    instagram: '#',
  },
  {
    name: 'Open Role',
    role: 'Brand Strategist',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=faces,top&auto=format&q=80',
    isOpen: true,
  },
  {
    name: 'Open Role',
    role: 'Growth Partner',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces,top&auto=format&q=80',
    isOpen: true,
  },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19"/>
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

export default function TeamSection() {
  return (
    <section id="team" style={{ background: '#fff' }}>
      <div className="team-inner">
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: 0 }}>
          <div>
            <div className="sec-tag rv">The People</div>
            <h2 className="sec-h rv">Our creative team<br />behind the work</h2>
          </div>
          <a href="#contact" className="btn-gold rv">
            Join Our Team <span className="arr">→</span>
          </a>
        </div>

        <div className="tm-grid">
          {TEAM.map(({ name, role, img, linkedin, instagram, isOpen }) => (
            <div key={`${name}-${role}`} className="tm-card rv">
              <img className="tm-img" loading="lazy" src={img} alt={name} />
              <div className="tm-over">
                <div className="tm-role">{role}</div>
                <div className="tm-name">{name}</div>
                <div className="tm-soc">
                  {isOpen ? (
                    <a href="#contact"><PlusIcon /></a>
                  ) : (
                    <>
                      <a href={linkedin}><LinkedInIcon /></a>
                      <a href={instagram}><InstagramIcon /></a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
