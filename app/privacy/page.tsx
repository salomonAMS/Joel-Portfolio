import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Joël Cameroun',
  description: 'Politique de confidentialité de Joël Cameroun - Vidéaste Professionnel',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Politique de Confidentialité</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Introduction</h2>
            <p className="text-gray-300 mb-4">
              Joël Cameroun (&quot;nous&quot;, &quot;notre&quot;) est engagé à protéger votre vie privée.
              Cette politique de confidentialité explique comment nous recueillons, utilisons et
              protégeons vos informations personnelles.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              2. Informations que nous recueillons
            </h2>
            <p className="text-gray-300 mb-4">Nous recueillons les informations suivantes:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Informations de contact (nom, email, téléphone)</li>
              <li>Contenu de vos messages</li>
              <li>Données de navigation (adresse IP, navigateur)</li>
              <li>Cookies et technologies similaires</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              3. Utilisation des informations
            </h2>
            <p className="text-gray-300 mb-4">Nous utilisons vos informations pour:</p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
              <li>Répondre à vos demandes de contact</li>
              <li>Améliorer notre site web</li>
              <li>Respecter les obligations légales</li>
              <li>Prévenir la fraude et les abus</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Sécurité des données</h2>
            <p className="text-gray-300 mb-4">
              Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos
              informations personnelles contre l&apos;accès non autorisé, la modification ou la
              divulgation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Vos droits</h2>
            <p className="text-gray-300 mb-4">
              Vous avez le droit d&apos;accéder, de corriger ou de supprimer vos informations
              personnelles. Contactez-nous à{' '}
              <a
                href="mailto:joel@exemple.com"
                className="text-orange-500 hover:underline"
              >
                joel@exemple.com
              </a>
              {' '}pour exercer ces droits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Contact</h2>
            <p className="text-gray-300">
              Si vous avez des questions concernant cette politique de confidentialité, veuillez
              nous contacter à{' '}
              <a
                href="mailto:joel@exemple.com"
                className="text-orange-500 hover:underline"
              >
                joel@exemple.com
              </a>
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-700 text-sm text-gray-500">
            <p>Dernière mise à jour: {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            Retour à l&apos;accueil
          </a>
        </div>
      </div>
    </main>
  );
}
