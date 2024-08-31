import React, { useState, useEffect } from 'react';
import './scrollStyle.css'; // Подключаем файл стилей

const ScrollEffectComponent = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0 && !isScrolledDown) {
        setIsScrolledDown(true);
      } else if (scrollTop === 0 && isScrolledDown) {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolledDown]);

  return (
    <div className={`showTime ${isScrolledDown ? 'shrink' : ''}`}>
      <h2>Ваш текст</h2>
    </div>
  );
};

export default ScrollEffectComponent;
