'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface PerformanceContextType {
  highPerformance: boolean;
  prefersReducedMotion: boolean;
}

const PerformanceContext = createContext<PerformanceContextType>({
  highPerformance: true,
  prefersReducedMotion: false,
});

export function usePerformance() {
  return useContext(PerformanceContext);
}

export function PerformanceWrapper({ children }: { children: ReactNode }) {
  const [highPerformance, setHighPerformance] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(reducedMotionQuery.matches);

    // Check device capabilities
    const checkDeviceCapabilities = () => {
      let isLowPerformance = false;

      // Check 1: Reduced motion preference
      if (reducedMotionQuery.matches) {
        isLowPerformance = true;
      }

      // Check 2: Device Memory (if available)
      if ('deviceMemory' in navigator) {
        const memory = (navigator as any).deviceMemory;
        if (memory && memory < 4) {
          // Less than 4GB RAM
          isLowPerformance = true;
        }
      }

      // Check 3: Effective Connection Type (if available)
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection?.effectiveType === 'slow-2g' || connection?.effectiveType === '2g') {
          isLowPerformance = true;
        }
      }

      // Check 4: Hardware Concurrency (CPU cores)
      if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
        isLowPerformance = true;
      }

      setHighPerformance(!isLowPerformance);
    };

    checkDeviceCapabilities();

    // Listen for changes
    reducedMotionQuery.addEventListener('change', checkDeviceCapabilities);
    return () => reducedMotionQuery.removeEventListener('change', checkDeviceCapabilities);
  }, []);

  return (
    <PerformanceContext.Provider value={{ highPerformance, prefersReducedMotion }}>
      {children}
    </PerformanceContext.Provider>
  );
}
