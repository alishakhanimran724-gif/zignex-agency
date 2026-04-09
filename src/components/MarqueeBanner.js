import './MarqueeBanner.css';

const STRIP_1_ITEMS = [
  'OUR NEW WEBSITE IS LIVE!',
  'CHECK OUT OUR LATEST SERVICES.',
  'WE ARE NOW OFFERING AI SOLUTIONS!',
  'FOLLOW US ON SOCIAL MEDIA FOR UPDATES.',
];

const STRIP_2_ITEMS = [
  'LOGO & BRAND IDENTITY',
  'SOCIAL MEDIA DESIGN',
  'WEB DESIGN & DEVELOPMENT',
  'PRINT & PACKAGING DESIGN',
  'BRAND STRATEGY & CONSULTING',
  'DIGITAL MARKETING',
];

// Duplicate for seamless loop
const repeat = (arr) => [...arr, ...arr, ...arr];

export default function MarqueeBanner() {
  return (
    <div className="marquee-banner">
      {/* Strip 1 — white, -2deg, scrolls LEFT */}
      <div className="marquee-strip strip-1">
        <div className="marquee-track">
          {repeat(STRIP_1_ITEMS).map((text, i) => (
            <div key={i} className="marquee-item m">
              <span className="m-star">✻</span>{text}
            </div>
          ))}
        </div>
      </div>

      {/* Strip 2 — gold, +3deg, scrolls RIGHT */}
      <div className="marquee-strip strip-2">
        <div className="marquee-track">
          {repeat(STRIP_2_ITEMS).map((text, i) => (
            <div key={i} className="marquee-item">
              <span className="m-star">✻</span>{text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
