'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated background
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.005;

      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw animated shapes
      ctx.strokeStyle = 'rgba(255, 107, 53, 0.1)';
      ctx.lineWidth = 2;

      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        const x = canvas.width / 2 + Math.cos(time + i) * 200;
        const y = canvas.height / 2 + Math.sin(time + i) * 200;
        const radius = 100 + Math.sin(time * 0.5 + i) * 50;

        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block px-4 py-2 rounded-full border border-orange-500 border-opacity-50 mb-6">
            <span className="text-orange-500 text-sm font-medium">
              Production Vidéo Professionnelle
            </span>
          </div>
        </div>

        <h1
          className="text-6xl md:text-7xl font-bold text-white mb-6 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          Joël Cameroun
        </h1>

        <p
          className="text-xl md:text-2xl text-gray-300 mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          Vidéaste & Créateur de Contenu Cinématique
        </p>

        <div
          className="flex gap-4 justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 hover:scale-105"
          >
            Voir Projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-orange-500 text-orange-500 rounded-lg font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
          >
            Me Contacter
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
