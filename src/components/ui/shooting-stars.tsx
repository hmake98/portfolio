"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef, useCallback } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
  isVisible?: boolean;
}

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: 45 };
    case 1:
      return { x: window.innerWidth, y: offset, angle: 135 };
    case 2:
      return { x: offset, y: window.innerHeight, angle: 225 };
    case 3:
      return { x: 0, y: offset, angle: 315 };
    default:
      return { x: 0, y: 0, angle: 45 };
  }
};

const ShootingStarsComponent: React.FC<ShootingStarsProps> = ({
  minSpeed = 8,
  maxSpeed = 20,
  minDelay = 15000, // Much longer delays
  maxDelay = 45000,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 8,
  starHeight = 1,
  className,
  isVisible = true,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const animationRef = useRef<number>();
  const lastRenderTime = useRef<number>(0);

  const createStar = useCallback(() => {
    if (!isVisible) return;
    
    const { x, y, angle } = getRandomStartPoint();
    const newStar: ShootingStar = {
      id: Date.now(),
      x,
      y,
      angle,
      scale: 1,
      speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
      distance: 0,
    };
    setStar(newStar);

    const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
    setTimeout(createStar, randomDelay);
  }, [minSpeed, maxSpeed, minDelay, maxDelay, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    
    createStar();
  }, [createStar, isVisible]);

  useEffect(() => {
    if (!isVisible || !star) return;

    const moveStar = (currentTime: number) => {
      // Throttle to 30 FPS
      if (currentTime - lastRenderTime.current < 33) {
        animationRef.current = requestAnimationFrame(moveStar);
        return;
      }
      lastRenderTime.current = currentTime;

      setStar((prevStar) => {
        if (!prevStar) return null;
        const newX =
          prevStar.x +
          prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
        const newY =
          prevStar.y +
          prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
        const newDistance = prevStar.distance + prevStar.speed;
        const newScale = 1 + newDistance / 100;
        if (
          newX < -20 ||
          newX > window.innerWidth + 20 ||
          newY < -20 ||
          newY > window.innerHeight + 20
        ) {
          return null;
        }
        return {
          ...prevStar,
          x: newX,
          y: newY,
          distance: newDistance,
          scale: newScale,
        };
      });

      animationRef.current = requestAnimationFrame(moveStar);
    };

    animationRef.current = requestAnimationFrame(moveStar);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [star, isVisible]);

  if (!isVisible) return null;

  return (
    <svg
      ref={svgRef}
      className={cn("w-full h-full absolute inset-0", className)}
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ShootingStars = React.memo(ShootingStarsComponent); 
