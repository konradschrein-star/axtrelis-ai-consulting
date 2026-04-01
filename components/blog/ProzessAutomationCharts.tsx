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

export function ProzessROIChart() {
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
          'Wissensmanagement',
          'Predictive Maintenance',
          'Angebotskalkulation',
          'Dokumentenanalyse',
          'E-Mail-Triage'
        ],
        datasets: [
          {
            label: 'Jahreseinsparung (€)',
            data: [562500, 470000, 303212, 108000, 83512],
            backgroundColor: 'rgba(157, 78, 221, 0.7)',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 2,
          },
          {
            label: 'Implementierungskosten (€)',
            data: [20000, 80000, 15000, 30000, 10000],
            backgroundColor: 'rgba(199, 125, 255, 0.5)',
            borderColor: 'rgba(199, 125, 255, 1)',
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
            text: 'ROI-Vergleich: Jahreseinsparung vs. Implementierungskosten',
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
              label: (context) => {
                const value = context.parsed.y;
                return `${context.dataset.label}: ${value.toLocaleString('de-DE')} €`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            ticks: {
              color: '#b0b0b0',
              callback: (value) => {
                if (typeof value === 'number') {
                  return value >= 1000 ? (value / 1000).toFixed(0) + 'k €' : value + ' €';
                }
                return value;
              },
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
      <div style={{ height: '450px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
        <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-3">
          <div className="font-semibold text-white mb-1">🏆 Höchster ROI</div>
          <div className="text-text-secondary">Wissensmanagement<br/>28:1 ROI-Verhältnis</div>
        </div>
        <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-3">
          <div className="font-semibold text-white mb-1">⚡ Schnellster Break-Even</div>
          <div className="text-text-secondary">Wissensmanagement<br/>1 Monat</div>
        </div>
        <div className="bg-accent-primary/10 border border-accent-primary/30 rounded-lg p-3">
          <div className="font-semibold text-white mb-1">💰 Höchste Einsparung</div>
          <div className="text-text-secondary">Wissensmanagement<br/>562.500 €/Jahr</div>
        </div>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Quelle: Maximal Digital KI-Studie 2025, Plotdesk Produktivitätsanalyse 2025, Aithoria Use Cases
      </p>
    </div>
  );
}

export function ImplementierungMatrixChart() {
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
      { x: 3, y: 7, label: 'E-Mail-Triage', kategorie: 'Quick Win' },
      { x: 5, y: 9, label: 'Wissensmanagement', kategorie: 'Quick Win' },
      { x: 6, y: 9, label: 'Angebotskalkulation', kategorie: 'Mittel' },
      { x: 8, y: 8, label: 'Dokumentenanalyse', kategorie: 'Mittel' },
      { x: 10, y: 10, label: 'Predictive Maintenance', kategorie: 'Komplex' },
    ];

    chartInstance.current = new ChartJS(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Quick Win',
            data: data.filter(d => d.kategorie === 'Quick Win').map(d => ({ x: d.x, y: d.y })),
            backgroundColor: 'rgba(34, 197, 94, 0.7)',
            borderColor: 'rgba(34, 197, 94, 1)',
            borderWidth: 2,
            pointRadius: 12,
            pointHoverRadius: 15,
          },
          {
            label: 'Mittel',
            data: data.filter(d => d.kategorie === 'Mittel').map(d => ({ x: d.x, y: d.y })),
            backgroundColor: 'rgba(157, 78, 221, 0.7)',
            borderColor: 'rgba(157, 78, 221, 1)',
            borderWidth: 2,
            pointRadius: 12,
            pointHoverRadius: 15,
          },
          {
            label: 'Komplex',
            data: data.filter(d => d.kategorie === 'Komplex').map(d => ({ x: d.x, y: d.y })),
            backgroundColor: 'rgba(249, 115, 22, 0.7)',
            borderColor: 'rgba(249, 115, 22, 1)',
            borderWidth: 2,
            pointRadius: 12,
            pointHoverRadius: 15,
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
            text: 'Implementierungs-Matrix: ROI-Potenzial vs. Aufwand',
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
              title: (context) => {
                const index = context[0].dataIndex;
                const kategorie = context[0].dataset.label;
                const prozess = data.find(d => d.kategorie === kategorie);
                const allProzesse = data.filter(d => d.kategorie === kategorie);
                return allProzesse[index]?.label || '';
              },
              label: (context) => [
                `ROI-Potenzial: ${context.parsed.y}/10`,
                `Implementierungsaufwand: ${context.parsed.x}/10`,
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
              text: 'ROI-Potenzial (höher = besser)',
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
              text: 'Implementierungsaufwand (höher = komplexer)',
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
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-2 text-xs text-text-muted">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span><strong>Quick Win:</strong> Oben links - Hoher ROI, niedriger Aufwand (sofort starten!)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-accent-primary rounded-full mr-2"></div>
          <span><strong>Mittel:</strong> Balance zwischen ROI und Aufwand (Pilot empfohlen)</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
          <span><strong>Komplex:</strong> Oben rechts - Höchster ROI, aber aufwändig (langfristig planen)</span>
        </div>
      </div>
      <p className="text-text-muted text-sm mt-4 text-center">
        Empfehlung: Start mit E-Mail-Triage oder Wissensmanagement für schnellen Erfolg
      </p>
    </div>
  );
}
