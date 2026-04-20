'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Projets Réalisés', value: 50, suffix: '+' },
  { label: 'Clients Satisfaits', value: 30, suffix: '+' },
  { label: 'Années Expérience', value: 8, suffix: '' },
  { label: 'Récompenses', value: 15, suffix: '+' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const intervals: NodeJS.Timeout[] = [];

    stats.forEach((stat) => {
      const interval = setInterval(() => {
        setCounters((prev) => {
          const current = prev[stat.label] || 0;
          if (current < stat.value) {
            return { ...prev, [stat.label]: current + Math.ceil(stat.value / 50) };
          }
          return { ...prev, [stat.label]: stat.value };
        });
      }, 30);
      intervals.push(interval);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            À Propos
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className={`opacity-0 transition-all duration-700 ${isVisible ? 'opacity-100' : ''}`}>
            <h3 className="text-3xl font-bold text-white mb-6">
              Créateur de Contenu Cinématique
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Je suis Joël, un vidéaste professionnel passionné par la création de contenu
              visuel de haute qualité. Avec plus de 8 ans d&apos;expérience dans l&apos;industrie,
              j&apos;ai eu le privilège de travailler avec des marques prestigieuses et des
              créateurs influents.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Ma spécialité réside dans la production vidéo cinématique, le montage
              avancé et la création de contenu optimisé pour les réseaux sociaux.
              Chaque projet est une opportunité de raconter une histoire captivante
              et d&apos;créer une connexion émotionnelle avec votre audience.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Je crois que la qualité est primordiale. C&apos;est pourquoi j&apos;utilise les
              dernières technologies et techniques de production pour garantir
              que votre projet se distingue de la concurrence.
            </p>
          </div>

          <div className={`grid grid-cols-2 gap-6 opacity-0 transition-all duration-700 ${isVisible ? 'opacity-100' : ''}`}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-orange-500 transition-all duration-300 text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {counters[stat.label] || 0}
                  {stat.suffix}
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 opacity-0 transition-all duration-700 ${isVisible ? 'opacity-100' : ''}`}>
          {[
            {
              title: 'Production Vidéo',
              description:
                'Conception et réalisation de vidéos professionnelles du concept à la post-production.',
              icon: '🎬',
            },
            {
              title: 'Montage Cinématique',
              description:
                'Édition vidéo sophistiquée avec effets visuels et animations de haute qualité.',
              icon: '✂️',
            },
            {
              title: 'Contenu Social Media',
              description:
                'Création de contenu optimisé et viral pour Instagram, TikTok, YouTube et autres plateformes.',
              icon: '📱',
            },
          ].map((service, index) => (
            <div
              key={service.title}
              className="bg-gray-800 bg-opacity-30 border border-gray-700 rounded-lg p-8 hover:bg-opacity-50 hover:border-orange-500 transition-all duration-300"
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
