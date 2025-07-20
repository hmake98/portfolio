"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
  isVisible?: boolean;
}

const StarsBackgroundComponent: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00008, // Reduced density
  allStarsTwinkle = false, // Disabled by default
  twinkleProbability = 0.3, // Reduced probability
  minTwinkleSpeed = 0.8,
  maxTwinkleSpeed = 1.5,
  className,
  isVisible = true,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const lastRenderTime = useRef<number>(0);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.03 + 0.3, // Smaller stars
          opacity: Math.random() * 0.3 + 0.3, // Lower opacity
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );

  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (currentTime: number) => {
      // Throttle rendering to 30 FPS
      if (currentTime - lastRenderTime.current < 33) {
        animationRef.current = requestAnimationFrame(render);
        return;
      }
      lastRenderTime.current = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Only render visible stars
      const visibleStars = stars.filter(star => 
        star.x >= -10 && star.x <= canvas.width + 10 && 
        star.y >= -10 && star.y <= canvas.height + 10
      );

      visibleStars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();

        // Simplified twinkling
        if (star.twinkleSpeed !== null) {
          const time = currentTime * 0.001;
          star.opacity = 0.3 + Math.abs(Math.sin(time / star.twinkleSpeed) * 0.2);
        }
      });

      animationRef.current = requestAnimationFrame(render);
    };

    animationRef.current = requestAnimationFrame(render);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [stars, isVisible]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full absolute inset-0", className)}
    />
  );
};

export const StarsBackground = React.memo(StarsBackgroundComponent);

StarsBackground.displayName = "StarsBackground"; 
