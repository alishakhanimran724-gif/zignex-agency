import './Hero.css';

const PORTFOLIO_IMAGES = [
  { src: 'img8.png',  style: { top:'calc(6% - 4px)',  left:'calc(48% + 2px)', width:'13.5%', height:'calc(28% + 2px)', borderRadius:'20px' }, alt: 'Portfolio 1' },

  { src: 'img9.png',  style: { top:'calc(2% - 18px)',  left:'calc(62% + 2px)', width:'15.5%', height:'calc(48% + 16px)', borderRadius:'7px'  }, alt: 'Portfolio 2' },

  { src: 'img10.png', style: { top:'calc(6% - 4px)',  left:'calc(78% + 2px)', width:'13.5%', height:'calc(28% + 2px)', borderRadius:'12px' }, alt: 'Portfolio 3' },

  { src: 'img11.png', style: { top:'calc(35% - 2px)', left:'calc(46% + 2px)', width:'15.5%', height:'calc(30% + 2px)', borderRadius:'20px' }, alt: 'Portfolio 4' },

  { src: 'img12.png', style: { top:'calc(51% - 2px)', left:'calc(62% + 2px)', width:'15.5%', height:'calc(45% + 2px)', borderRadius:'12px' }, alt: 'Portfolio 5' },

  { src: 'img13.png', style: { top:'calc(35% - 2px)', left:'calc(78% + 2px)', width:'15.5%', height:'calc(30% + 2px)', borderRadius:'20px' }, alt: 'Portfolio 6' },

  { src: 'img14.png', style: { top:'calc(66% - 0px)', left:'calc(48% + 15px)', width:'12.5%', height:'calc(28% + 0px)', borderRadius:'12px' }, alt: 'Portfolio 7' },

  { src: 'img15.png', style: { top:'calc(66% - 0px)', left:'calc(78% + 2px)', width:'12.5%', height:'calc(28% + 0px)', borderRadius:'12px' }, alt: 'Portfolio 8' },
];

const MOBILE_CARDS = [
  { cls: 'pm-net-tl',    src: 'img8.png',  alt: 'Social Post'   },
  { cls: 'pm-wosh',      src: 'img9.png',  alt: 'Wosh Sticker'  },
  { cls: 'pm-medicine',  src: 'img10.png', alt: 'Medicine'      },
  { cls: 'pm-pakind',    src: 'img11.png', alt: 'Pak vs Ind'    },
  { cls: 'pm-net-r',     src: 'img12.png', alt: 'NET Social'    },
  { cls: 'pm-dogchew',   src: 'img13.png', alt: 'Dog Chew'      },
  { cls: 'pm-pawstop-l', src: 'img14.png', alt: 'Pawstop Left'  },
  { cls: 'pm-pawstop-r', src: 'img15.png', alt: 'Pawstop Right' },
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
        <img src="image.png" alt="" onError={e => e.target.style.display = 'none'} />
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
              src={img.src}
              alt={img.alt}
              onError={handleImgError}
            />
          ))}
        </div>
      </div>

      {/* Mobile portfolio grid */}
      <div className="portfolio-mobile">
        {MOBILE_CARDS.map(({ cls, src, alt }) => (
          <div key={cls} className={`pm-card ${cls}`}>
            <img
              src={src}
              alt={alt}
              onError={e => { e.target.style.display = 'none'; e.target.parentElement.style.background = '#0d1533'; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}