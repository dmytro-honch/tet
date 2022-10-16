import { useEffect, useState } from 'react';
import '../styles/components/_fps.css';

export function CounterFPS() {
  const [fps, setFps] = useState(0);

  useEffect(() => {
    setFps(1);
  }, [fps]);

  return <div className="fps-counter">{fps}</div>;
}
