import { useEffect, useRef } from 'react';
import './Footer.css';

const NAV_LINKS = [
  { label: 'About Us',       href: '#about'   },
  { label: 'Contact Us',     href: '#contact' },
  { label: 'Privacy Policy', href: '#'        },
];

const SERVICES = [
  'Logo & Brand Identity',
  'Social Media Design',
  'Web Design & Development',
  'Print & Packaging Design',
  'Brand Strategy',
  'Digital Marketing',
];

export default function Footer() {
  const netRef = useRef(null);

  // Generate constellation dots + lines
  useEffect(() => {
    const FNET = netRef.current;
    if (!FNET) return;
    const dots = [];

    for (let i = 0; i < 30; i++) {
      const d = document.createElement('div');
      d.className = 'footer-net-dot';
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      d.style.cssText = `left:${x}%;top:${y}%`;
      FNET.appendChild(d);
      dots.push({ el: d, x, y });
    }

    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 30) {
          const line = document.createElement('div');
          line.className = 'footer-net-line';
          const ang = Math.atan2(dy, dist) * 180 / Math.PI;
          line.style.cssText = `left:${dots[j].x}%;top:${dots[j].y}%;width:${dist}%;transform:rotate(${-ang}deg);opacity:${(0.15 * (1 - dist / 30)).toFixed(2)}`;
          FNET.appendChild(line);
        }
      }
    }

    return () => { while (FNET.firstChild) FNET.removeChild(FNET.firstChild); };
  }, []);

  return (
    <footer>
      {/* Constellation background */}
      <div className="footer-net" ref={netRef} />

      <div className="footer-inner">
        {/* Col 1: Brand */}
        <div className="footer-brand">
          <div className="f-logo-wrap">
            <img src="logo.png" alt="Zignex" onError={e => e.target.style.display = 'none'} />
            <div className="f-logo-text">ZIG<span>NEX.</span></div>
          </div>
          <ul className="footer-links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}><a href={href}>{label}</a></li>
            ))}
          </ul>
          <p className="footer-copy">
            &copy; 2025 <span>Zignex Design</span>. All rights reserved.
          </p>
        </div>

        {/* Col 2: Services */}
        <div className="footer-services">
          <h4>Services</h4>
          <ul>
            {SERVICES.map(s => <li key={s}>{s}</li>)}
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="footer-contact">
          <h4>Contact Us</h4>

          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:hello@zignexdesign.com">hello@zignexdesign.com</a>
          </div>

          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <a href="https://wa.me/923409236718">+92 340 923 6718</a>
          </div>

          <div className="footer-contact-row">
            <svg viewBox="0 0 24 24">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Islamabad, Pakistan</span>
          </div>

          <div className="footer-socials">
            <a href="https://behance.net/zignexdesign" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="#fff" stroke="none">
                <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.2.247 1.86.76 2.34.387.358.894.54 1.502.54 1.23 0 1.873-.609 2.135-1.83H23.726zm-7.726-3.5h4.5c-.05-1.4-.61-2.1-2.1-2.1-1.27 0-2.09.7-2.4 2.1z"/>
              </svg>
            </a>
            <a href="https://instagram.com/zignexdesign" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="5"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/923409236718" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </a>
            <a href="mailto:hello@zignexdesign.com">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
