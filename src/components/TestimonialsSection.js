import './TestimonialsSection.css';

const StarIcon = ({ filled = true }) => (
  <svg viewBox="0 0 24 24" fill={filled ? '#F0B429' : '#e0d8cc'} stroke="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);

const Stars = ({ count = 5 }) => (
  <div className="testi-stars">
    {Array.from({ length: 5 }, (_, i) => (
      <StarIcon key={i} filled={i < count} />
    ))}
  </div>
);

const TESTIMONIALS = [
  {
    initials: 'CG',
    avatarStyle: {},
    name: 'CountyGarageLtd',
    role: 'Fiverr Client',
    text: 'Easiest one of the most exceptional sellers I have had the pleasure of working with on Fiverr. Quick, reliable and incredibly talented.',
    stars: 4,
  },
  {
    initials: 'ZB',
    avatarStyle: { background: 'linear-gradient(135deg,#EC4899,#8B5CF6)' },
    name: 'Brand Identity Client',
    role: 'Branding Project',
    text: 'Zignex completely transformed our brand identity. The attention to detail and creative vision they brought was beyond anything we expected.',
    stars: 5,
  },
  {
    initials: 'SM',
    avatarStyle: { background: 'linear-gradient(135deg,#84CC16,#06B6D4)' },
    name: 'Social Media Client',
    role: 'Social Media Package',
    text: 'Our social media engagement went up 3x after working with Zignex. Every post is perfectly designed and on-brand. Highly recommend.',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testi">
      <div className="testi-inner">
        <div className="testi-header rv">
          <div className="testi-label">Testimonials</div>
          <h2 className="testi-heading">Our Clients Review</h2>
        </div>

        <div className="testi-grid">
          {TESTIMONIALS.map(({ initials, avatarStyle, name, role, text, stars }) => (
            <div key={name} className="testi-card rv">
              <div className="testi-quote">&ldquo;</div>
              <div className="testi-av-wrap">
                <div className="testi-av" style={avatarStyle}>{initials}</div>
              </div>
              <div className="testi-name">{name}</div>
              <div className="testi-role">{role}</div>
              <p className="testi-txt">{text}</p>
              <Stars count={stars} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
