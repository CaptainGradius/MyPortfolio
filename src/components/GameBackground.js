import React, { useRef, useEffect, useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const GameBackground = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const missiles = useRef([]);
  const asteroids = useRef([]);
  const { setScore } = useContext(ScoreContext);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Update mouse position for the spaceship.
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // On click, add a new missile.
    const handleClick = () => {
      missiles.current.push({
        x: mousePos.current.x,
        y: mousePos.current.y,
        speed: 5,
        width: 5,
        height: 2,
      });
    };
    window.addEventListener('click', handleClick);

    // Collision detection between a rectangle and a circle.
    // We'll use this for both missile-asteroid and spaceship-asteroid collisions.
    const rectCircleColliding = (rect, circle) => {
      const rectLeft = rect.x;
      const rectRight = rect.x + rect.width;
      const rectTop = rect.y;
      const rectBottom = rect.y + rect.height;
      // Find the closest point on the rectangle to the circle's center.
      const closestX = Math.max(rectLeft, Math.min(circle.x, rectRight));
      const closestY = Math.max(rectTop, Math.min(circle.y, rectBottom));
      const distanceX = circle.x - closestX;
      const distanceY = circle.y - closestY;
      return (distanceX * distanceX + distanceY * distanceY) < (circle.size * circle.size);
    };

    // Main game loop
    const gameLoop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the spaceship as a blue triangle following the mouse.
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.moveTo(mousePos.current.x, mousePos.current.y);
      ctx.lineTo(mousePos.current.x - 20, mousePos.current.y + 30);
      ctx.lineTo(mousePos.current.x + 20, mousePos.current.y + 30);
      ctx.closePath();
      ctx.fill();

      // Define the spaceship's bounding rectangle.
      const spaceshipRect = {
        x: mousePos.current.x - 20,
        y: mousePos.current.y,
        width: 40,
        height: 30,
      };

      // Update and draw missiles.
      ctx.fillStyle = 'red';
      missiles.current = missiles.current.filter((missile) => {
        missile.x += missile.speed;
        // Draw the missile if it's still on screen.
        if (missile.x < canvas.width) {
          ctx.fillRect(missile.x, missile.y, missile.width, missile.height);
          return true;
        }
        return false;
      });

      // Spawn asteroids randomly.
      if (Math.random() < 0.02) {
        asteroids.current.push({
          x: canvas.width,
          y: Math.random() * canvas.height,
          speed: 2 + Math.random() * 3,
          size: 20 + Math.random() * 30, // Used as the radius.
        });
      }

      // Update asteroids, check for collisions, and draw them.
      asteroids.current = asteroids.current.filter((asteroid) => {
        // Check collision with the spaceship.
        if (rectCircleColliding(spaceshipRect, asteroid)) {
          // If an asteroid hits the spaceship, reset score to zero.
          setScore(0);
          return false; // Remove this asteroid.
        }

        // Move the asteroid.
        asteroid.x -= asteroid.speed;
        let collided = false;
        // Check each missile for collision with this asteroid.
        missiles.current = missiles.current.filter((missile) => {
          if (rectCircleColliding(missile, asteroid)) {
            collided = true;
            // Increase the score on collision.
            setScore((prev) => prev + 1);
            return false; // Remove this missile.
          }
          return true;
        });
        // Only draw and keep the asteroid if it hasn't been hit and is on screen.
        if (!collided && asteroid.x + asteroid.size > 0) {
          ctx.fillStyle = 'gray';
          ctx.beginPath();
          ctx.arc(asteroid.x, asteroid.y, asteroid.size, 0, Math.PI * 2);
          ctx.fill();
          return true;
        }
        return false;
      });

      requestAnimationFrame(gameLoop);
    };

    gameLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [setScore]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default GameBackground;
