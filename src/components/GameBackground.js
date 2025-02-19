import React, { useRef, useEffect, useContext } from 'react';
import { ScoreContext } from '../contexts/ScoreContext';

const GameBackground = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const missiles = useRef([]);
  const asteroids = useRef([]);
  const { setScore } = useContext(ScoreContext);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Resize canvas to match the container's dimensions.
    const resizeCanvas = () => {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Update mouse position relative to the container.
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      // Clamp mouse position so it doesn't leave the container.
      const x = Math.min(Math.max(e.clientX - rect.left, 0), rect.width);
      const y = Math.min(Math.max(e.clientY - rect.top, 0), rect.height);
      mousePos.current = { x, y };
    };
    container.addEventListener('mousemove', handleMouseMove);

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
    container.addEventListener('click', handleClick);

    // Collision detection between a rectangle and a circle.
    const rectCircleColliding = (rect, circle) => {
      const rectLeft = rect.x;
      const rectRight = rect.x + rect.width;
      const rectTop = rect.y;
      const rectBottom = rect.y + rect.height;
      const closestX = Math.max(rectLeft, Math.min(circle.x, rectRight));
      const closestY = Math.max(rectTop, Math.min(circle.y, rectBottom));
      const distanceX = circle.x - closestX;
      const distanceY = circle.y - closestY;
      return (distanceX * distanceX + distanceY * distanceY) < (circle.size * circle.size);
    };

    // Main game loop.
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
        if (missile.x < canvas.width) {
          ctx.fillRect(missile.x, missile.y, missile.width, missile.height);
          return true;
        }
        return false;
      });

      // Spawn asteroids randomly, making sure they spawn within container bounds.
      if (Math.random() < 0.02) {
        asteroids.current.push({
          x: canvas.width,
          // Spawn asteroid only within the container's height.
          y: Math.random() * canvas.height,
          speed: 2 + Math.random() * 3,
          size: 20 + Math.random() * 30, // asteroid radius
        });
      }

      // Update asteroids, check for collisions, and draw them.
      asteroids.current = asteroids.current.filter((asteroid) => {
        // Check collision with the spaceship.
        if (rectCircleColliding(spaceshipRect, asteroid)) {
          setScore(0);
          return false;
        }
        asteroid.x -= asteroid.speed;
        let collided = false;
        missiles.current = missiles.current.filter((missile) => {
          if (rectCircleColliding(missile, asteroid)) {
            collided = true;
            setScore((prev) => prev + 1);
            return false;
          }
          return true;
        });
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
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
    };
  }, [setScore]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <canvas
        id="gameCanvas"
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
          background: 'black',
        }}
      />
    </div>
  );
};

export default GameBackground;
