import { useState } from 'react';
import './PortfolioSection.css';

const FILTERS = [
  { key: 'all',    label: 'All Work'  },
  { key: 'brand',  label: 'Branding' },
  { key: 'social', label: 'Social'   },
  { key: 'web',    label: 'Web'      },
  { key: 'print',  label: 'Print'    },
];

const PORTFOLIO_ITEMS = [
  { id: 1, cat: 'brand',  title: 'Brand Identity',    sub: 'Logo & Brand System',    img: 'img1.png', bg: 'linear-gradient(135deg,#0a1240,#0062ff33)' },
  { id: 2, cat: 'social', title: 'Social Campaign',   sub: 'Instagram & Facebook',   img: 'img2.png', bg: 'linear-gradient(135deg,#1a0a40,#6200ff33)' },
  { id: 3, cat: 'web',    title: 'Web Design',        sub: 'UI/UX & Development',    img: 'img3.png', bg: 'linear-gradient(135deg,#001a40,#0062ff55)' },
  { id: 4, cat: 'print',  title: 'Packaging Design',  sub: 'Product Packaging',      img: 'img4.png', bg: 'linear-gradient(135deg,#401a00,#ff620033)' },
  { id: 5, cat: 'brand',  title: 'Visual Identity',   sub: 'Complete Brand Package', img: 'img5.png', bg: 'linear-gradient(135deg,#00401a,#00ff6233)' },
  { id: 6, cat: 'social', title: 'Content Strategy',  sub: 'Social Media Package',   img: 'img6.png', bg: 'linear-gradient(135deg,#40001a,#ff006233)' },
  { id: 7, cat: 'web',    title: 'E-Commerce Store',  sub: 'Web Design & Dev',       img: 'img7.png', bg: 'linear-gradient(135deg,#0a2040,#0062ff44)' },
  { id: 8, cat: 'print',  title: 'Print Collateral',  sub: 'Brochures & Flyers',     img: 'img8.png', bg: 'linear-gradient(135deg,#1a1a00,#ffcc0033)' },
  { id: 9, cat: 'brand',  title: 'Startup Branding',  sub: 'Brand Identity System',  img: 'img9.png', bg: 'linear-gradient(135deg,#001040,#0044ff33)' },
];

export default function PortfolioSection() {
  const [active, setActive] = useState('all');

  const visible = PORTFOLIO_ITEMS.filter(
    item => active === 'all' || item.cat === active
  );

  return (
    <section id="portfolio">
      <div className="port-inner">
        <div className="port-header rv">
          <div className="sec-tag" style={{ borderColor: '#0062ff', color: '#0062ff' }}>Our Work</div>
          <h2 className="sec-h" style={{ color: '#fff' }}>
            Projects that speak<br />louder than words
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="port-filters rv">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`fbtn${active === key ? ' active' : ''}`}
              onClick={() => setActive(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="port-grid" id="PGRID">
          {visible.map(({ id, title, sub, bg, img }) => (
            <div key={id} className="p-card" style={{ background: bg }}>
              <img
                src={img}
                alt={title}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className="p-card-over">
                <div className="p-card-sub">{sub}</div>
                <div className="p-card-title">{title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}