import React from 'react';

export default function VideoDisplay({ src }) {
  return (
    <video
      className="rounded-lg shadow-2xl border-4 border-teal-300"
      src={src}
      style={{
        width: '100%'
      }}
      autoPlay
      loop
      muted
    />
  );
}
