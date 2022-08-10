import { useState, useEffect, useRef } from 'react'
import { useIntersectionObserver } from 'usehooks-ts';
import 'animate.css';

// just realized it's very similar to 
// useIntersectionObserver from https://usehooks-ts.com/
export const useViewport = (element, rootMargin = '0px') => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      }, { rootMargin }
    );
    
    element.current && observer.observe(element.current);

    return () => observer.disconnect();
  }, [element, rootMargin]);

  return isVisible;
};

export const Animated = ({ 
  animation = '',
  callback,
  children, 
  delay = '0',
  freezeOnceVisible = false,
  offset = '0px',
}) => {
  const ref = useRef();
  const entry = useIntersectionObserver(ref, { rootMargin: offset, freezeOnceVisible });
  if (entry && entry.isIntersecting) {
    callback && callback(ref);
    ref.current && ref.current.classList.add(animation);
  } else {
    ref.current && ref.current.classList.remove(animation);
  }
  return <div ref={ref} className={`animate__animated animate__delay-${delay}s`}>{children}</div>
}

export default Animated;