// import { useAnimation } from 'framer-motion';
// import React, { useEffect, useState } from 'react';
// import { useScrollTrigger } from 'react-scroll-trigger';
// const useScrollAnimation = () => {
//   const controls = useAnimation();
//   const [scrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     setScrollY(window.scrollY);
//   };

//   useEffect(() => {
//     const onEnterViewport = () => {
//       controls.start({ opacity: 1, y: 0 });
//     };

//     const onExitViewport = () => {
//       controls.start({ opacity: 0, y: 50 });
//     };

//     window.addEventListener('scroll', handleScroll);
//     // You may adjust the threshold and logic below based on your needs
//     if (scrollY > 100) {
//       onEnterViewport();
//     } else {
//       onExitViewport();
//     }

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [controls, scrollY]);

//   return { controls };
// };

// export default useScrollAnimation;
