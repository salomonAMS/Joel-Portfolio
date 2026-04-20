export default function ContactForm() {
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

        <div className="mt-12 p-8 bg-gray-800 rounded-lg border border-gray-700 mb-12">
          <p className="text-gray-300 text-center mb-6">
            Le formulaire de contact n&apos;est pas configuré en ce moment. Veuillez utiliser les moyens de contact ci-dessous :
          </p>
        </div>

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
