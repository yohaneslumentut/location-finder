import { useCallback, useEffect, useMemo, useState, useRef } from 'react';

export const useProgress = ({ isPinging }) => {
  const [value, setValue] = useState(0);
  const timer = useRef();

  const count = useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    if (!isPinging) return;
    timer.current = setTimeout(() => {
      setValue(value + 10);
    }, 100);
  }, [isPinging, value]);

  useEffect(() => {
    if (isPinging) count();
  }, [isPinging, count]);

  const success = useMemo(
    () => !!(!isPinging && value === 100),
    [isPinging, value],
  );

  return {
    success,
    value,
    setValue,
  };
};
