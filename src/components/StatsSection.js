import { useEffect, useRef, useState } from 'react';
import './StatsSection.css';

const STATS = [
  { id: 'b1', label: 'Clients Served',      target: 50, suffix: '+' },
  { id: 'b2', label: 'Projects Completed',  target: 30, suffix: '+' },
  { id: 's1', label: 'Designs Delivered',   target: 50, suffix: ''  },
  { id: 's2', label: 'Revisions Done',       target: 30, suffix: ''  },
  { id: 's3', label: 'Years Experience',     target: 2,  suffix: ''  },
  { id: 's4', label: 'Industries Covered',   target: 5,  suffix: ''  },
];

function useCounter(target, suffix, triggered) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setValue(target);
        clearInterval(timer);
      } else {
        setValue(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, triggered]);

  return value + suffix;
}

function StatItem({ label, target, suffix, triggered }) {
  const display = useCounter(target, suffix, triggered);
  return (
    <div className="i-stat rv">
      <div className="stat-num">{display}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const [triggered, setTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="band" ref={ref}>
      <div className="band-inner">
        {STATS.map(s => (
          <StatItem key={s.id} {...s} triggered={triggered} />
        ))}
      </div>
    </section>
  );
}
