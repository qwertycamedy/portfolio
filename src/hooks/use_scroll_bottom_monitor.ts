import { useCallback, useEffect, useState } from 'react';

export const useScrollBottomMonitor = (lastSectionId: string) => {
  const [isBottom, setIsBottom] = useState(false);

  const checkBottom = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    const isBottom = scrollPosition >= pageHeight - 50;

    setIsBottom(isBottom);
  }, [lastSectionId]);

  useEffect(() => {
    checkBottom(); // Первоначальная проверка
    window.addEventListener('scroll', checkBottom);
    window.addEventListener('resize', checkBottom);

    return () => {
      window.removeEventListener('scroll', checkBottom);
      window.removeEventListener('resize', checkBottom);
    };
  }, [checkBottom]);

  return isBottom;
};
