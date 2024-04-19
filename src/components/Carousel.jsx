'use client'
import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661947876256-b44c1bfc04d2?q=80&w=1838&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setTimer(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setTimer(0);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer + 1);
  //     if (timer >= 10) {
  //       setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  //       setTimer(0);
  //     }
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [timer]);

  // useEffect(() => {
  //   setTimer(0); // Reset the timer when the currentIndex changes
  // }, [currentIndex]);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="carousel item"
          className="w-full h-72 object-cover"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '-100%' }}
          transition={{ type: 'tween', duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full">
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handlePrev}
          className="text-white focus:outline-none bg-black bg-opacity-30 p-2 rounded-full"
        >
          <FaChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={handleNext}
          className="text-white focus:outline-none bg-black bg-opacity-30 p-2 rounded-full"
        >
          <FaChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default Carousel;
