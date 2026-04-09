import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only activate on pointer (non-touch) devices
    if (!window.matchMedia('(hover: hover)').matches) return;

    let rx = window.innerWidth / 2;
    let ry = window.innerHeight / 2;
    let cx = rx, cy = ry;
    let animFrame;

    const onMove = (e) => { rx = e.clientX; ry = e.clientY; };
    document.addEventListener('mousemove', onMove);

    const loop = () => {
      cx += (rx - cx) * 0.18;
      cy += (ry - cy) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.left = rx + 'px';
        dotRef.current.style.top  = ry + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = cx + 'px';
        ringRef.current.style.top  = cy + 'px';
      }
      animFrame = requestAnimationFrame(loop);
    };
    loop();

    // Hover effect on interactive elements
    const hoverEls = document.querySelectorAll('a, button, .p-card, .tm-card, .testi-card, .svc-item, .i-stat');
    const onEnter = () => {
      if (ringRef.current) { ringRef.current.style.width = '52px'; ringRef.current.style.height = '52px'; ringRef.current.style.borderColor = '#0062ff'; }
      if (dotRef.current)  { dotRef.current.style.background = '#0062ff'; }
    };
    const onLeave = () => {
      if (ringRef.current) { ringRef.current.style.width = '32px'; ringRef.current.style.height = '32px'; ringRef.current.style.borderColor = '#1A6FFF'; }
      if (dotRef.current)  { dotRef.current.style.background = '#1A6FFF'; }
    };

    hoverEls.forEach(el => { el.addEventListener('mouseenter', onEnter); el.addEventListener('mouseleave', onLeave); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(animFrame);
      hoverEls.forEach(el => { el.removeEventListener('mouseenter', onEnter); el.removeEventListener('mouseleave', onLeave); });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
