import { useEffect } from 'react';

export function useInterval(fn, n) {
  useEffect(() => {
    const intervalId = setInterval(() => {
      fn();  
    }, n);

    return () => clearInterval(intervalId);
  }, [fn, n]); 
}