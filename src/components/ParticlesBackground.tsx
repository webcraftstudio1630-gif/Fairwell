import React, { useEffect, useRef } from 'react';

interface ParticlesProps {
  density?: number;
  speed?: number;
  color?: string;
  glow?: boolean;
}

export const ParticlesBackground: React.FC<ParticlesProps> = ({
  density = 35,
  speed = 0.3,
  glow = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create particles suitable for light theme
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      hue: number;
    }> = [];

    const particleCount = Math.floor((width * height) / (100000 / density));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed - 0.15, // slight upward drift
        alpha: Math.random() * 0.5 + 0.2, // softer alpha for light background
        hue: Math.random() > 0.5 ? 260 : 20 // purple to warm amber/pink hues
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background gradient orbs for light theme
      if (glow) {
        const gradient1 = ctx.createRadialGradient(
          width * 0.2, height * 0.3, 0,
          width * 0.2, height * 0.3, width * 0.4
        );
        gradient1.addColorStop(0, 'rgba(139, 92, 246, 0.05)');
        gradient1.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient1;
        ctx.fillRect(0, 0, width, height);

        const gradient2 = ctx.createRadialGradient(
          width * 0.8, height * 0.7, 0,
          width * 0.8, height * 0.7, width * 0.4
        );
        gradient2.addColorStop(0, 'rgba(236, 72, 153, 0.04)');
        gradient2.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient2;
        ctx.fillRect(0, 0, width, height);
      }

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 70%, 60%, ${p.alpha})`;
        if (glow) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${p.hue}, 70%, 60%, 0.5)`;
        }
        ctx.fill();
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, speed, glow]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};
