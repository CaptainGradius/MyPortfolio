import React, { useRef, useEffect, useState } from 'react';
import './SpaceGame.css';

const SpaceGame = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const canvasRef = useRef(null);
  const spaceship = useRef({ x: 50, y: 300 });
  const missiles = useRef([]);
  const asteroids = useRef([]);
  const score = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      console.log('Window width:', window.innerWidth); // Log window width
      setIsMobile(window.innerWidth < 600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      score.current = 0; // Set score to zero if the window is small
      return;
    }

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Update canvas dimensions based on window width
    const updateCanvasSize = () => {
      console.log('Window width:', window.innerWidth); // Log window width
      canvas.width = Math.min(1258, window.innerWidth - 41);
      canvas.height = 200; // Fixed height
    };
    updateCanvasSize();

    let animationFrameId;
    let lastAsteroidSpawn = Date.now();

    // Update spaceship vertical position based on mouse movement
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      spaceship.current.y = e.clientY - rect.top;
    };

    // Fire a missile immediately when canvas is clicked
    const handleClick = () => {
      missiles.current.push({
        x: spaceship.current.x,
        y: spaceship.current.y,
        speed: 5,
        radius: 4,
      });
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);
    window.addEventListener('resize', updateCanvasSize);

    const gameLoop = () => {
      const now = Date.now();
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Draw missiles (so they lie below the spaceship)
      missiles.current.forEach((missile) => {
        context.beginPath();
        context.arc(missile.x, missile.y, missile.radius, 0, Math.PI * 2);
        context.fillStyle = 'white';
        context.fill();
      });

      // Draw improved spaceship on top of missiles
      context.save();
      context.translate(spaceship.current.x, spaceship.current.y);
      context.scale(1.5, 1.5);
      // Main body (sleek silver shape)
      context.beginPath();
      context.moveTo(20, 0);
      context.lineTo(-10, -15);
      context.lineTo(-10, 15);
      context.closePath();
      context.fillStyle = 'white';
      context.fill();
      // Cockpit (blue circle)
      context.beginPath();
      context.arc(0, 0, 5, 0, Math.PI * 2);
      context.fillStyle = 'black';
      context.fill();
      context.restore();

      // Calculate base spawn interval (dependent on canvas width)
      const baseSpawnInterval = 2500 * (800 / canvas.width);
      // Increase frequency every 15 points
      const level = Math.floor(score.current / 15);
      const spawnInterval = baseSpawnInterval / (1 + level);
      
      // Spawn a new asteroid when enough time has elapsed
      if (now - lastAsteroidSpawn > spawnInterval) {
        // Choose a random number of vertices between 4 and 10
        const numVertices = Math.floor(Math.random() * 7) + 4;
        // Generate random offsets for each vertex to create irregularity
        const vertexOffsets = [];
        for (let i = 0; i < numVertices; i++) {
          vertexOffsets.push(0.8 + Math.random() * 0.4); // factor between 0.8 and 1.2
        }
        asteroids.current.push({
          x: canvas.width,
          y: Math.random() * canvas.height,
          size: 20, // average radius
          speed: 2 + Math.random() * 2,
          angle: Math.random() * Math.PI * 2,
          angularVelocity: Math.random() * 0.1 - 0.05, // Random rotation speed
          numVertices,
          vertexOffsets,
        });
        lastAsteroidSpawn = now;
      }

      // Update asteroid positions and rotations, remove if off-screen
      asteroids.current = asteroids.current.filter((asteroid) => {
        asteroid.x -= asteroid.speed;
        asteroid.angle += asteroid.angularVelocity;
        return asteroid.x + asteroid.size > 0;
      });

      // Update missile positions and remove off-screen missiles
      missiles.current = missiles.current.filter((missile) => {
        missile.x += missile.speed;
        return missile.x < canvas.width;
      });

      // Draw asteroids with rotation and irregular polygon shapes
      asteroids.current.forEach((asteroid) => {
        context.save();
        // Translate to the asteroid's position and rotate based on its angle
        context.translate(asteroid.x, asteroid.y);
        context.rotate(asteroid.angle);
        
        // Begin drawing the polygon asteroid shape
        context.beginPath();
        const { numVertices, vertexOffsets, size } = asteroid;
        for (let i = 0; i < numVertices; i++) {
          const theta = (i * 2 * Math.PI) / numVertices;
          const offset = vertexOffsets[i];
          const x = offset * size * Math.cos(theta);
          const y = offset * size * Math.sin(theta);
          if (i === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
        context.closePath();
        context.fillStyle = 'white';
        context.fill();
        
        context.restore();
      });

      // Collision detection: missiles vs asteroids
      missiles.current.forEach((missile, mIndex) => {
        asteroids.current.forEach((asteroid, aIndex) => {
          const dx = missile.x - asteroid.x;
          const dy = missile.y - asteroid.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < asteroid.size) {
            missiles.current.splice(mIndex, 1);
            asteroids.current.splice(aIndex, 1);
            score.current++;
          }
        });
      });

      // Collision detection: spaceship vs asteroids
      const spaceshipCollisionRadius = 25;
      let spaceshipHit = false;
      asteroids.current.forEach((asteroid) => {
        const dx = spaceship.current.x - asteroid.x;
        const dy = spaceship.current.y - asteroid.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < asteroid.size + spaceshipCollisionRadius) {
          spaceshipHit = true;
        }
      });

      if (spaceshipHit) {
        score.current = 0;
        asteroids.current = [];
        context.clearRect(0, 0, canvas.width, canvas.height);
        setTimeout(() => {
          animationFrameId = requestAnimationFrame(gameLoop);
        }, 1000);
        return;
      }

      // Draw score in the top-right corner
      context.fillStyle = 'white';
      context.font = '20px Arial';
      context.textAlign = 'right';
      context.fillText(score.current, canvas.width - 10, 25);

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    gameLoop();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isMobile]);

  if (isMobile) {
    return <div className="mobile-empty"></div>;
  }

  return <canvas className="canvas" ref={canvasRef} />;
};

export default SpaceGame;
