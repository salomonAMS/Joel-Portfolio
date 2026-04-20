'use client';

import { useRef, useState } from 'react';

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  isError: boolean;
  message: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    isError: false,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setFormState({
      isSubmitting: true,
      isSuccess: false,
      isError: false,
      message: '',
    });

    try {
      const formData = new FormData(formRef.current);
      const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        subject: formData.get('subject') as string,
        message: formData.get('message') as string,
      };

      // Validate on client side
      if (!data.name || !data.email || !data.subject || !data.message) {
        throw new Error('Tous les champs sont obligatoires');
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        throw new Error('Veuillez entrer une adresse email valide');
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Erreur lors de l\'envoi');
      }

      setFormState({
        isSubmitting: false,
        isSuccess: true,
        isError: false,
        message: result.message || 'Message envoyé avec succès!',
      });

      formRef.current.reset();

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isSuccess: false, message: '' }));
      }, 5000);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Une erreur est survenue';

      setFormState({
        isSubmitting: false,
        isSuccess: false,
        isError: true,
        message: errorMessage,
      });

      // Clear error message after 5 seconds
      setTimeout(() => {
        setFormState((prev) => ({ ...prev, isError: false, message: '' }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-b from-black to-gray-900 py-20 px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Avez-vous un projet en tête? Parlons-en ensemble.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-white font-semibold mb-2">
                Nom Complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                placeholder="Votre nom"
                disabled={formState.isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white font-semibold mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
                placeholder="votre@email.com"
                disabled={formState.isSubmitting}
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-white font-semibold mb-2">
              Sujet *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300"
              placeholder="Sujet de votre message"
              disabled={formState.isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white font-semibold mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all duration-300 resize-none"
              placeholder="Décrivez votre projet ou demande..."
              disabled={formState.isSubmitting}
            />
          </div>

          {(formState.isSuccess || formState.isError) && (
            <div
              className={`p-4 rounded-lg text-center transition-all duration-300 ${
                formState.isSuccess
                  ? 'bg-green-900 bg-opacity-20 border border-green-500 text-green-400'
                  : 'bg-red-900 bg-opacity-20 border border-red-500 text-red-400'
              }`}
            >
              {formState.message}
            </div>
          )}

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full px-8 py-4 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 active:scale-95"
          >
            {formState.isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
          </button>
        </form>

        <div className="mt-16 pt-12 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-orange-500 text-3xl mb-4">📧</div>
              <h3 className="text-white font-bold mb-2">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:joel@exemple.com" className="hover:text-orange-500">
                  joel@exemple.com
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-3xl mb-4">📱</div>
              <h3 className="text-white font-bold mb-2">Téléphone</h3>
              <p className="text-gray-400">
                <a href="tel:+237123456789" className="hover:text-orange-500">
                  +237 123 456 789
                </a>
              </p>
            </div>
            <div className="text-center">
              <div className="text-orange-500 text-3xl mb-4">🌐</div>
              <h3 className="text-white font-bold mb-2">Réseaux Sociaux</h3>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
