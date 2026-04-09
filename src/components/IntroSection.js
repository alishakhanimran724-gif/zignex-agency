import './IntroSection.css';

export default function IntroSection() {
  const handleVideoClick = () => {
    const v = document.getElementById('introVid');
    const o = document.getElementById('introOverlay');
    if (v && v.src && v.src !== window.location.href) {
      v.play();
      if (o) o.style.display = 'none';
    } else {
      alert('Video coming soon!');
    }
  };

  return (
    <section id="intro">
      <div className="intro-inner">
        <div className="intro-left rv">
          <div className="tag">WHO WE ARE</div>
          <h2>
            We Build <em>Bold Brands</em> That Refuse to Blend In
          </h2>
          <p>
            Zignex is a creative design agency based in Islamabad, Pakistan. We partner
            with startups and established businesses to create compelling brand identities,
            stunning visuals, and digital experiences that make a lasting impression.
          </p>
        </div>

        <div className="intro-video rv" onClick={handleVideoClick}>
          <video id="introVid" playsInline muted loop />
          <div className="intro-video-overlay" id="introOverlay">
            <div className="intro-play">
              <svg viewBox="0 0 24 24">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
