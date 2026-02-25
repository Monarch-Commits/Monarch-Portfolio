'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface FireflyData {
  id: number;
  color: string;
  size: number;
  pulseSpeed: number;
  orbitRadius: number;
  speedMultiplier: number;
}

type Mode = 'mouse' | 'wander' | 'target';

const Firefly = ({
  data,
  mouseX,
  mouseY,
  targetRect,
  mode,
  windowWidth,
  windowHeight,
}: {
  data: FireflyData;
  mouseX: number;
  mouseY: number;
  targetRect: DOMRect | null;
  mode: Mode;
  windowWidth: number;
  windowHeight: number;
}) => {
  const x = useMotionValue(windowWidth / 2);
  const y = useMotionValue(windowHeight / 2);

  const smoothX = useSpring(x, {
    damping: 25,
    stiffness: mode === 'wander' ? 30 : 80,
  });
  const smoothY = useSpring(y, {
    damping: 25,
    stiffness: mode === 'wander' ? 30 : 80,
  });

  const [opacity, setOpacity] = useState(0.8);

  useEffect(() => {
    let animationId: number;
    const offset = data.id * 1000;

    const animate = () => {
      const time = (Date.now() + offset) / 1000;
      const pulse = 0.5 + Math.abs(Math.sin(time * data.pulseSpeed)) * 0.5;
      setOpacity(pulse);

      if (mode === 'mouse') {
        const angle = time * 1.5 * data.speedMultiplier;
        x.set(mouseX + Math.cos(angle) * data.orbitRadius);
        y.set(mouseY + Math.sin(angle * 0.8) * (data.orbitRadius * 0.6));
      } else if (mode === 'target' && targetRect) {
        const targetX = targetRect.left + targetRect.width / 2;
        const targetY = targetRect.top + targetRect.height / 2;
        const angle = time * 0.8 * data.speedMultiplier;
        x.set(targetX + Math.cos(angle) * (targetRect.width * 0.5));
        y.set(targetY + Math.sin(angle * 1.2) * (targetRect.height * 0.5));
      } else {
        // Wander mode
        const wanderX =
          Math.sin(time * 0.3 + data.id) * (windowWidth * 0.3) +
          windowWidth / 2;
        const wanderY =
          Math.cos(time * 0.2 + data.id) * (windowHeight * 0.3) +
          windowHeight / 2;
        x.set(wanderX);
        y.set(wanderY);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationId);
  }, [mouseX, mouseY, mode, targetRect, data, x, y, windowWidth, windowHeight]);

  return (
    <motion.div
      className="pointer-events-none fixed will-change-transform"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: '-50%',
        translateY: '-50%',
        opacity: opacity,
        scale: 0.9 + opacity * 0.3,
        zIndex: 50,
      }}
    >
      <div
        style={{
          width: data.size,
          height: data.size,
          borderRadius: '50%',
          backgroundColor: data.color,
          boxShadow: `
            0 0 ${data.size * 2}px ${data.color},
            0 0 ${data.size * 5}px ${data.color}88,
            0 0 ${data.size * 10}px ${data.color}44
          `,
          border: '1px solid rgba(255, 255, 255, 0.4)',
        }}
      />
    </motion.div>
  );
};

export function FireflySwarm() {
  const [mounted, setMounted] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  const [fireflies, setFireflies] = useState<FireflyData[]>([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mode, setMode] = useState<Mode>('wander');
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setMounted(true);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      const colors = ['#EAB308', '#10B981', '#3B82F6', '#F43F5E', '#8B5CF6'];
      const f = Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        color: colors[i % colors.length],
        size: Math.random() * 4 + 4,
        pulseSpeed: 1.2 + Math.random() * 1.8,
        orbitRadius: 50 + Math.random() * 60,
        speedMultiplier: 0.8 + Math.random() * 0.7,
      }));
      setFireflies(f);
    }, 0);
  }, []);

  const findClosestImage = useCallback((x: number, y: number) => {
    const images = Array.from(document.querySelectorAll('img')).filter(
      (img) => {
        const r = img.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
      },
    );

    if (images.length === 0) {
      setMode('wander');
      return;
    }

    let closest = images[0].getBoundingClientRect();
    let minDistance = Infinity;

    images.forEach((img) => {
      const r = img.getBoundingClientRect();
      const imgX = r.left + r.width / 2;
      const imgY = r.top + r.height / 2;
      const d = Math.hypot(x - imgX, y - imgY);

      if (d < minDistance) {
        minDistance = d;
        closest = r;
      }
    });

    setTargetRect(closest);
    setMode('target');
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      setMode('mouse');

      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => {
        findClosestImage(e.clientX, e.clientY);
      }, 1500);
    };

    window.addEventListener('mousemove', handleMove);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [findClosestImage, mounted]);

  if (!mounted || fireflies.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden"
      style={{ zIndex: 40 }}
      aria-hidden="true"
    >
      {fireflies.map((fly) => (
        <Firefly
          key={fly.id}
          data={fly}
          mouseX={mouseX}
          mouseY={mouseY}
          targetRect={targetRect}
          mode={mode}
          windowWidth={windowWidth}
          windowHeight={windowHeight}
        />
      ))}
    </div>
  );
}
