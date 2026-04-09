import './Hero.css';

const PORTFOLIO_IMAGES = [
  { style: { top:'6%',  left:'48%', width:'13.5%', height:'28%', borderRadius:'20px' }, alt: 'Portfolio 1' },
  { style: { top:'2%',  left:'62%', width:'15.5%', height:'48%', borderRadius:'7px'  }, alt: 'Portfolio 2' },
  { style: { top:'6%',  left:'78%', width:'13.5%', height:'28%', borderRadius:'12px' }, alt: 'Portfolio 3' },
  { style: { top:'35%', left:'46%', width:'15.5%', height:'30%', borderRadius:'20px' }, alt: 'Portfolio 4' },
  { style: { top:'51%', left:'62%', width:'15.5%', height:'48%', borderRadius:'12px' }, alt: 'Portfolio 5' },
  { style: { top:'35%', left:'78%', width:'15.5%', height:'30%', borderRadius:'20px' }, alt: 'Portfolio 6' },
  { style: { top:'66%', left:'48%', width:'13.5%', height:'28%', borderRadius:'12px' }, alt: 'Portfolio 7' },
  { style: { top:'66%', left:'78%', width:'13.5%', height:'28%', borderRadius:'12px' }, alt: 'Portfolio 8' },
];

const MOBILE_CARDS = [
  { cls: 'pm-net-tl',   alt: 'Social Post'    },
  { cls: 'pm-wosh',     alt: 'Wosh Sticker'   },
  { cls: 'pm-medicine', alt: 'Medicine'       },
  { cls: 'pm-pakind',   alt: 'Pak vs Ind'     },
  { cls: 'pm-net-r',    alt: 'NET Social'     },
  { cls: 'pm-dogchew',  alt: 'Dog Chew'       },
  { cls: 'pm-pawstop-l',alt: 'Pawstop Left'   },
  { cls: 'pm-pawstop-r',alt: 'Pawstop Right'  },
];

const fallbackStyle = {
  background: 'linear-gradient(135deg,#0a1240,#0062ff33)',
  border: '1px dashed rgba(0,98,255,0.3)',
};

export default function Hero() {
  const handleImgError = (e) => {
    Object.assign(e.target.style, fallbackStyle);
    e.target.removeAttribute('src');
  };

  return (
    <section className="hero" id="hero">
      {/* Background moon image */}
      <div className="hero-moon">
        <img src="/public/image.png" alt="" onError={e => e.target.style.display = 'none'} />
      </div>

      <div className="hero-gradient" />
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="badge"><span>CREATIVE DESIGN AGENCY</span></div>
        <div className="headline-italic">Building Stronger</div>
        <div className="headline-brands">BRANDS</div>
        <div className="headline-sub">in the Digital World</div>

        <p className="description">
          We craft bold, purpose-driven design for startups and businesses that
          refuse to blend in. From concept to creation — together.
        </p>

        <div className="cta-row">
          <a href="#portfolio" className="btn-view">VIEW OUR WORK</a>
          <a href="#contact" className="btn-start">
            START A PROJECT
            <div className="btn-start-circle">
              <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
            </div>
          </a>
        </div>

        {/* Desktop portfolio images */}
        <div className="imges">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <img
              key={i}
              className="portfolio-img"
              style={{ ...img.style, objectFit: 'cover', position: 'absolute', zIndex: 5 }}
              src="../public/zig.png"
              alt={img.alt}
              onError={handleImgError}
            />
          ))}
        </div>
      </div>

      {/* Mobile portfolio grid */}
      <div className="portfolio-mobile">
        {MOBILE_CARDS.map(({ cls, alt }) => (
          <div key={cls} className={`pm-card ${cls}`}>
            <img
              src="zig.jfif"
              alt={alt}
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#0d1533'; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
