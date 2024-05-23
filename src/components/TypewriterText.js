import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function TypewriterText({ words, typeSpeed, deleteSpeed }) {
  return (
    <Typewriter
      words={words}
      loop={1}
      typeSpeed={typeSpeed}
      deleteSpeed={deleteSpeed}
      delaySpeed={1000}
    />
  );
}