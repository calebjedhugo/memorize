import { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';

const useAnimationFrame = (callback) => {
  const [isMounted, setIsMounted] = useState();
  const doTheThing = useCallback(() => {
    window.requestAnimationFrame(() => {
      callback();
      if (isMounted) {
        doTheThing();
      }
    });
  }, [callback, isMounted]);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, [setIsMounted]);

  useEffect(doTheThing, [doTheThing]);
};

export default useAnimationFrame;
