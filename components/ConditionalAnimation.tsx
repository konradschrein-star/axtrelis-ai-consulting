'use client';

import { usePerformance } from './PerformanceWrapper';
import { ReactNode } from 'react';

interface ConditionalAnimationProps {
  children: ReactNode;
  fallback?: ReactNode;
  className?: string;
  highPerformanceClassName?: string;
  lowPerformanceClassName?: string;
}

/**
 * Wrapper für Animationen und Performance-intensive Effekte
 *
 * Automatisch:
 * - Deaktiviert Animationen für prefers-reduced-motion
 * - Simplere Styles für schwache Geräte
 * - Entfernt Blur/Shadow-Effekte auf Low-Performance Devices
 */
export function ConditionalAnimation({
  children,
  fallback,
  className = '',
  highPerformanceClassName = '',
  lowPerformanceClassName = '',
}: ConditionalAnimationProps) {
  const { highPerformance } = usePerformance();

  const finalClassName = highPerformance
    ? `${className} ${highPerformanceClassName}`.trim()
    : `${className} ${lowPerformanceClassName}`.trim();

  if (!highPerformance && fallback) {
    return <div className={finalClassName}>{fallback}</div>;
  }

  return <div className={finalClassName}>{children}</div>;
}

/**
 * Hook für bedingte CSS-Klassen basierend auf Performance
 */
export function usePerformanceClass(
  highPerfClass: string,
  lowPerfClass: string = ''
): string {
  const { highPerformance } = usePerformance();
  return highPerformance ? highPerfClass : lowPerfClass;
}
