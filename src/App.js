import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { AnimatePresence, motion } from 'framer-motion';
import NavMenu from './components/NavMenu/NavMenu';
import './App.css';
import About from './components/About';
import Education from './components/Education/Education';
import TechStack from './components/TechStack/TechStack';
import Projects from './components/Projects/Projects';
import Downloads from './components/Downloads/Downloads';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [swipeDirection, setSwipeDirection] = useState(null);
  const dragConstraintsRef = useRef(null);

  const tabs = ['about', 'education', 'techstack', 'projects', 'downloads'];

  const handleSwipe = (direction) => {
    const currentIndex = tabs.indexOf(activeTab);
    setSwipeDirection(direction);
    if (direction === 'LEFT' && currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    } else if (direction === 'RIGHT' && currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "push" },
        onHover: { enable: true, mode: "repulse" },
      },
      modes: {
        push: { quantity: 4 },
        repulse: { distance: 200, duration: 0.4 },
      },
    },
    particles: {
      color: { value: "#ffffff" },
      links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "bounce" },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: { enable: true },
        value: 80,
      },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  }), []);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'techstack':
        return <TechStack />;
      case 'projects':
        return <Projects />;
      case 'downloads':
        return <Downloads />;
      default:
        return <About />;
    }
  };

  const handleDragEnd = (event, info) => {
    if (info.offset.x > 50) {
      handleSwipe('RIGHT');
    } else if (info.offset.x < -50) {
      handleSwipe('LEFT');
    }
    event.target.style.transform = 'translateX(0px)';
  };

  const handleScroll = (e) => {
    console.log(e);
  }

  return (
    <div className='flex flex-col w-screen h-screen bg-gray-900 overflow-hidden'>
      <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      <div className='flex-grow flex justify-center items-center z-50' {...handlers}>
        <div className="relative w-full h-full" ref={dragConstraintsRef}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              drag="x"
              dragConstraints={{ left: -100, right: 100 }}
              onDragEnd={handleDragEnd}
              onScroll={handleScroll}
              initial={{ opacity: 0, x: swipeDirection === 'LEFT' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: swipeDirection === 'LEFT' ? 50 : -50 }}
              transition={{ duration: 0.1 }}
              className="w-full h-full flex justify-center items-center"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <NavMenu activeTab={activeTab} setActiveTab={setActiveTab} />
      <footer className='fixed bottom-4 left-4 text-white text-sm'>
        © 2024 Adam Shaar. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
