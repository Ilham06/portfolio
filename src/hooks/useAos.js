
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const useAOS = () => {
  useEffect(() => {
    AOS.init({
      // Global settings
      duration: 500, // animation duration in milliseconds
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);
};

export default useAOS;
