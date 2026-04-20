import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Conditions d\'Utilisation | Joël Cameroun',
  description: 'Conditions d\'utilisation de Joël Cameroun - Vidéaste Professionnel',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Conditions d&apos;Utilisation</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">1. Acceptation des conditions</h2>
            <p className="text-gray-300 mb-4">
              En accédant et en utilisant ce site web, vous acceptez d&apos;être lié par ces
              conditions d&apos;utilisation. Si vous n&apos;acceptez pas ces conditions, veuillez ne pas
              utiliser ce site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">2. Licence d&apos;utilisation</h2>
            <p className="text-gray-300 mb-4">
              Sauf indication contraire, Joël Cameroun est propriétaire des droits de propriété
              intellectuelle pour tout le matériel sur ce site. Tous les droits de propriété
              intellectuelle sont réservés.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">
              3. Limitation de responsabilité
            </h2>
            <p className="text-gray-300 mb-4">
              En aucun cas, Joël Cameroun ou ses fournisseurs ne seront responsables des dommages
              (y compris, sans limitation, les dommages pour perte de données ou profit, ou en
              raison d&apos;une interruption d&apos;activité) découlant de l&apos;utilisation ou de
              l&apos;impossibilité d&apos;utiliser les matériaux sur ce site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">4. Précision du contenu</h2>
            <p className="text-gray-300 mb-4">
              Le matériel sur ce site est fourni à titre informatif uniquement. Joël Cameroun
              ne garantit pas l&apos;exactitude, l&apos;exhaustivité ou la pertinence de ce
              matériel. Joël Cameroun peut apporter des modifications aux matériaux contenus sur
              ce site à tout moment sans préavis.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">5. Liens vers d&apos;autres sites</h2>
            <p className="text-gray-300 mb-4">
              Ce site peut contenir des liens vers d&apos;autres sites. Ces liens ne sont fournis
              que pour votre commodité et nous ne sommes pas responsables du contenu des sites
              externes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">6. Modifications des conditions</h2>
            <p className="text-gray-300 mb-4">
              Joël Cameroun peut réviser ces conditions d&apos;utilisation à tout moment sans préavis.
              En utilisant ce site, vous acceptez d&apos;être lié par la version actuelle de ces
              conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-500 mb-4">7. Loi applicable</h2>
            <p className="text-gray-300 mb-4">
              Ces conditions et conditions sont régies par et interprétées conformément aux lois
              du Cameroun, et vous consentez irrévocablement à la juridiction exclusive des
              tribunaux dans cet endroit.
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
