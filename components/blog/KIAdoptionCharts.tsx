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

export function WiderstaendeChart() {
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
        labels: ['Geschäftsführung', 'Mittleres Management', 'Fachkräfte (Wissensarbeit)', 'Operative Mitarbeitende'],
        datasets: [
          {
            label: 'Angst vor Jobverlust (%)',
            data: [32, 44, 38, 41],
            backgroundColor: 'rgba(157, 78, 221, 0.6)',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 2,
          },
          {
            label: 'Überforderung (%)',
            data: [21, 39, 46, 52],
            backgroundColor: 'rgba(199, 125, 255, 0.6)',
            borderColor: 'rgba(199, 125, 255, 1)',
            borderWidth: 2,
          },
          {
            label: 'Vertrauensverlust (%)',
            data: [28, 36, 41, 47],
            backgroundColor: 'rgba(157, 78, 221, 0.3)',
            borderColor: 'rgba(157, 78, 221, 0.5)',
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#ffffff',
              font: { size: 14 },
            },
          },
          title: {
            display: true,
            text: 'Widerstände nach Hierarchieebene',
            color: '#ffffff',
            font: { size: 18, weight: 'bold' },
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 1,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 60,
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
              display: false,
            },
            ticks: {
              color: '#b0b0b0',
              font: { size: 12 },
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
      <p className="text-text-muted text-sm mt-4 text-center">
        Quelle: Visualisierung auf Basis BCG (2024), HBR (2025), Deloitte (2024)
      </p>
    </div>
  );
}

export function AdoptionCurveChart() {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<ChartJS | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext('2d');
    if (!ctx) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new ChartJS(ctx, {
      type: 'line',
      data: {
        labels: ['Innovators', 'Early Adopters', 'Early Majority', 'Late Majority', 'Laggards'],
        datasets: [
          {
            label: 'Kumulierte Adoption (%)',
            data: [2.5, 16, 50, 84, 100],
            borderColor: 'rgba(157, 78, 221, 1)',
            backgroundColor: 'rgba(157, 78, 221, 0.2)',
            borderWidth: 3,
            fill: true,
            tension: 0.4,
            pointRadius: 6,
            pointBackgroundColor: 'rgba(199, 125, 255, 1)',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointHoverRadius: 8,
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
            text: 'Adoption-Kurve: Von Innovatoren bis Nachzügler',
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
              label: (context) => `${context.parsed.y}% der Organisation`,
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
      <div style={{ height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Klassisches Diffusionsmodell (Rogers, 1962) - adaptiert für KI-Adoption
      </p>
    </div>
  );
}

export function ErfolgsfaktorenChart() {
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
      { x: 3, y: 9, label: 'Transparente Kommunikation' },
      { x: 4, y: 8, label: 'Use-Case Co-Creation' },
      { x: 5, y: 8, label: 'KI-Botschafter' },
      { x: 6, y: 9, label: 'Hands-on Schulung' },
      { x: 4, y: 8, label: 'Quick Wins messen' },
      { x: 3, y: 7, label: 'Feedback-Schleifen' },
      { x: 8, y: 10, label: 'Governance & Datenqualität' },
    ];

    chartInstance.current = new ChartJS(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Erfolgsfaktoren',
            data: data.map((d) => ({ x: d.x, y: d.y })),
            backgroundColor: 'rgba(157, 78, 221, 0.6)',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 2,
            pointRadius: 10,
            pointHoverRadius: 12,
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
            text: 'Erfolgsfaktoren: Impact vs. Aufwand',
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
              title: (context) => data[context[0].dataIndex].label,
              label: (context) => [
                `Impact: ${context.parsed.y}/10`,
                `Aufwand: ${context.parsed.x}/10`,
              ],
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'Impact (Wirkung)',
              color: '#ffffff',
              font: { size: 14, weight: 'bold' },
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#b0b0b0',
            },
          },
          x: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'Aufwand (Komplexität)',
              color: '#ffffff',
              font: { size: 14, weight: 'bold' },
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#b0b0b0',
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
      <div style={{ height: '500px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-text-muted">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-accent-primary/60 rounded-full mr-2"></div>
          <span>Oben rechts: Hoher Impact, hoher Aufwand (kritisch für Skalierung)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-accent-primary/60 rounded-full mr-2"></div>
          <span>Oben links: Hoher Impact, niedriger Aufwand (Quick Wins!)</span>
        </div>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Quelle: Synthese aus HBR, Deloitte, IBM, Bain, Fraunhofer IAO
      </p>
    </div>
  );
}
