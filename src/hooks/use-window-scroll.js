import { useState, useCallback, useRef } from 'react';
import { useWindowEvent } from './use-window-event';

function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

export const useWindowScroll = () => {
  const [scroll, setScroll] = useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const throttledSetScrollRef = useRef();

  const handleScroll = useCallback(() => {
    const newScroll = {
      x: window.pageXOffset,
      y: window.pageYOffset,
    };

    if (!throttledSetScrollRef.current) {
      throttledSetScrollRef.current = throttle(setScroll, 100);
    }

    throttledSetScrollRef.current(newScroll);
  }, []);

  useWindowEvent('scroll', handleScroll);

  const scrollTo = useCallback(({ x, y, behavior = 'auto' }) => {
    const options = {};

    if (typeof x === 'number') options.left = x;
    if (typeof y === 'number') options.top = y;
    options.behavior = behavior;

    window.scrollTo(options);
  }, []);

  return [scroll, scrollTo];
};
