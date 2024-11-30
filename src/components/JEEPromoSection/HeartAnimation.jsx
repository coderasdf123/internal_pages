import React, { useState, useEffect } from 'react';

const HeartAnimation = ({ image }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) => [
        ...prevHearts,
        {
          id: Date.now(),
          size: Math.floor(Math.random() * (25 - 15 + 1)) + 15,
          color: ['#FF6B6B', '#FFA500', '#8B00FF', '#1E90FF'][
            Math.floor(Math.random() * 4)
          ],
          position: { x: 'calc(100% - 50px)', y: '100%' },
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          position: {
            x: heart.position.x,
            y: `${parseFloat(heart.position.y) - 0.5}%`,
          },
          opacity: parseFloat(heart.position.y) / 100,
          scale: parseFloat(heart.position.y) / 80,
        }))
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full h-full"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            fontSize: `${heart.size}px`,
            color: heart.color,
            left: heart.position.x,
            top: heart.position.y,
            opacity: heart.opacity,
            transform: `scale(${heart.scale})`,
            transition: 'all 6s ease-in-out',
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default HeartAnimation;