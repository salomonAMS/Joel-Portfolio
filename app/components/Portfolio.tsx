'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'Campagne Marketing Digital',
    category: 'Commercial',
    description: 'Production vidéo complète pour campagne marketing d\'une marque de luxe',
    image: '/projects/project1.jpg',
    tags: ['Cinéma', 'Montage', 'Motion Graphics'],
  },
  {
    id: 2,
    title: 'Documentaire Professionnel',
    category: 'Documentaire',
    description: 'Documentaire explorant la culture locale et les traditions',
    image: '/projects/project2.jpg',
    tags: ['Documentaire', 'Production', 'Son'],
  },
  {
    id: 3,
    title: 'Contenu Social Media',
    category: 'Social Media',
    description: 'Création de contenu viral pour influenceurs et marques',
    image: '/projects/project3.jpg',
    tags: ['Social Media', 'Montage Rapide', 'Tendances'],
  },
  {
    id: 4,
    title: 'Clip Musical',
    category: 'Musique',
    description: 'Production d\'un clip musical avec effets visuels sophistiqués',
    image: '/projects/project4.jpg',
    tags: ['Musique', 'Cinéma', 'VFX'],
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <section
      ref={ref}
      id="portfolio"
      className="min-h-screen bg-black py-20 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden rounded-lg opacity-0 transition-all duration-700 ${
                isVisible ? 'opacity-100' : ''
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
              }}
            >
              <div className="relative h-80 md:h-96 overflow-hidden bg-gray-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 bg-gray-900 border-b-2 border-orange-500 border-opacity-0 group-hover:border-opacity-100 transition-all duration-300">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-orange-500 bg-opacity-20 text-orange-400 text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
