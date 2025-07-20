"use client";

import { useEffect, useState } from "react";

const PerformanceMonitor: React.FC = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [fpsHistory, setFpsHistory] = useState<number[]>([]);

  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== "development") return;

    let frameCount = 0;
    let lastTime = performance.now();
    let animationFrameId: number;
    const memoryIntervalId = setInterval(() => {
      if (!isMonitoring) return;
      
      if ('memory' in performance) {
        const memory = (performance as Performance & { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1024 / 1024);
        const totalMB = Math.round(memory.totalJSHeapSize / 1024 / 1024);
        
        console.log(`💾 Memory: ${usedMB}MB / ${totalMB}MB`);
        
        if (usedMB > 100) {
          console.warn(`⚠️ High memory usage: ${usedMB}MB`);
        }
      }
    }, 10000); // Reduced frequency to 10s
    
    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        
        // Only start monitoring if FPS drops below 30
        if (fps < 30 && !isMonitoring) {
          setIsMonitoring(true);
          console.warn(`⚠️ Performance monitoring activated - Low FPS detected: ${fps}`);
        }
        
        // Only log if monitoring is active
        if (isMonitoring) {
          console.log(`🎯 FPS: ${fps}`);
          
          // Update FPS history
          setFpsHistory(prev => {
            const newHistory = [...prev, fps].slice(-10); // Keep last 10 readings
            return newHistory;
          });
          
          // Stop monitoring if FPS is consistently good
          const avgFPS = fpsHistory.length > 0 ? fpsHistory.reduce((a, b) => a + b, 0) / fpsHistory.length : fps;
          if (avgFPS > 50 && fpsHistory.length >= 5) {
            setIsMonitoring(false);
            console.log(`✅ Performance restored - FPS: ${fps}, stopping monitoring`);
          }
        }
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationFrameId = requestAnimationFrame(measureFPS);
    };

    // Monitor long tasks - only when monitoring is active
    const observer = new PerformanceObserver((list) => {
      if (!isMonitoring) return;
      
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn(`⚠️ Long task detected: ${Math.round(entry.duration)}ms`);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
    } catch {
      // Long task observer not supported
    }

    // Start FPS monitoring
    measureFPS();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      clearInterval(memoryIntervalId);
      observer.disconnect();
    };
  }, [isMonitoring, fpsHistory]);

  return null;
};

export default PerformanceMonitor; 
