'use client';

import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export function ScheiternsgruendeChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    // Destroy previous chart instance
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new ChartJS(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Business Case fehlt',
          'Datenqualität',
          'Technologie-First',
          'Fehlender Buy-In',
          'Unrealistische Erwartungen',
          'Vendor Lock-In',
          'Kein Change Management'
        ],
        datasets: [
          {
            label: 'Scheiterns-Beitrag (%)',
            data: [42, 60, 67, 70, 55, 30, 70],
            backgroundColor: [
              'rgba(157, 78, 221, 0.7)',
              'rgba(199, 125, 255, 0.7)',
              'rgba(157, 78, 221, 0.5)',
              'rgba(199, 125, 255, 0.5)',
              'rgba(157, 78, 221, 0.4)',
              'rgba(199, 125, 255, 0.4)',
              'rgba(157, 78, 221, 0.3)',
            ],
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Die 7 Hauptgründe für Scheitern (gewichtet)',
            color: '#ffffff',
            font: { size: 18, weight: 'bold' },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 1,
            callbacks: {
              label: (context) => `${context.parsed.x}% der Projekte scheitern hieran`,
            },
          },
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 80,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#b0b0b0',
              callback: (value) => value + '%',
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              color: '#b0b0b0',
              font: { size: 11 },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-background-card border border-border rounded-xl p-6 mb-8">
      <div style={{ height: '450px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Quelle: Synthese aus MIT GenAI Divide 2025, Gartner Predicts 2024-2026, Forrester 2026, McKinsey
      </p>
    </div>
  );
}

export function TimeToFailureChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const data = [
      { monat: 1, phase: 'Euphorie', risiko: 20 },
      { monat: 2, phase: 'Euphorie', risiko: 25 },
      { monat: 3, phase: 'Daten-Schock', risiko: 40 },
      { monat: 4, phase: 'Daten-Schock', risiko: 55 },
      { monat: 5, phase: 'Scope Creep', risiko: 70 },
      { monat: 6, phase: 'Scope Creep (kritisch!)', risiko: 75 },
      { monat: 7, phase: 'Adoption-Krise', risiko: 85 },
      { monat: 8, phase: 'Adoption-Krise', risiko: 90 },
      { monat: 9, phase: 'Adoption-Krise', risiko: 92 },
      { monat: 10, phase: 'Stille Beerdigung', risiko: 95 },
      { monat: 11, phase: 'Stille Beerdigung', risiko: 96 },
      { monat: 12, phase: 'Stille Beerdigung', risiko: 95 },
      { monat: 13, phase: 'Post-Mortem', risiko: 90 },
    ];

    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: data.map(d => `Monat ${d.monat}`),
        datasets: [
          {
            label: 'Scheiterns-Risiko (%)',
            data: data.map(d => d.risiko),
            borderColor: 'rgba(157, 78, 221, 1)',
            backgroundColor: 'rgba(157, 78, 221, 0.2)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 5,
            pointBackgroundColor: 'rgba(199, 125, 255, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointHoverRadius: 7,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: 'Time-to-Failure: Wann scheitern KI-Projekte?',
            color: '#ffffff',
            font: { size: 18, weight: 'bold' },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 1,
            callbacks: {
              afterLabel: (context) => {
                const phase = data[context.dataIndex].phase;
                return `Phase: ${phase}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#b0b0b0',
              callback: (value) => value + '%',
            },
          },
          x: {
            grid: {
              color: 'rgba(255, 255, 255, 0.05)',
            },
            ticks: {
              color: '#b0b0b0',
              font: { size: 11 },
            },
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-background-card border border-border rounded-xl p-6 mb-8">
      <div style={{ height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 p-4 bg-accent-primary/10 border border-accent-primary/30 rounded-lg">
        <p className="text-sm text-white font-semibold mb-2">💡 Kritischer Moment:</p>
        <p className="text-sm text-text-secondary">
          <strong>Monat 4-6</strong> ist die letzte Chance für eine Kurskorrektur. Danach überwiegt der Sunk-Cost-Effekt die rationale Entscheidung.
        </p>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Quelle: Forrester AI Scaling Report 2026, Gartner Predicts 2024-2026
      </p>
    </div>
  );
}
