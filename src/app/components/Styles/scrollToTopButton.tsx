// components/ScrollToTopButton.tsx

import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-10 p-3 right-10 bg-green-500 text-white px-4 py-2 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:bg-green-600`}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000' 
      }}
    >
      <img className='w-5' src={'./assets/imgs/seta-para-cima.png'} alt="" />
    </button>
  );
};

export default ScrollToTopButton;
