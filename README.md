# Joël Cameroun - Portfolio Professionnel

Portfolio moderne et performant pour vidéaste professionnel, construit avec Next.js 15, React 19 et des optimisations de production.

## 🎬 Fonctionnalités

- **Hero Section Animée** - Arrière-plan canvas animé avec effets visuels
- **Portfolio Dynamique** - Galerie de projets avec animations au survol
- **Section Contact** - Affichage des coordonnées de contact (email, téléphone, réseaux sociaux)
- **SEO Optimisé** - Meta tags, Open Graph, sitemap, robots.txt
- **Performance** - Images optimisées, lazy loading, minification
- **Responsive** - Design mobile-first, compatible tous les appareils
- **Animations** - Transitions fluides et animations cinématiques
- **Dark Mode** - Design élégant en noir et orange

## 🚀 Stack Technologique

- **Framework**: Next.js 16
- **UI Library**: React 19
- **Styling**: CSS personnalisé
- **TypeScript**: Typage complet
- **Deployment**: Vercel (optimisé)

## 📋 Prérequis

- Node.js 18+ (recommandé 20+)
- npm ou pnpm

## 🔧 Installation Locale

### 1. Cloner le projet

```bash
git clone https://github.com/salomonAMS/Joel-Portfolio.git
cd Joel-Portfolio
```

### 2. Installer les dépendances

```bash
npm install
# ou
pnpm install
```

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
.
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Section hero animée
│   │   ├── About.tsx             # Section à propos avec stats
│   │   ├── Portfolio.tsx         # Galerie de projets
│   │   ├── ContactForm.tsx       # Formulaire de contact
│   │   └── Footer.tsx            # Pied de page
│   ├── privacy/
│   │   └── page.tsx              # Politique de confidentialité
│   ├── terms/
│   │   └── page.tsx              # Conditions d'utilisation
│   ├── layout.tsx                # Layout racine avec métadonnées
│   ├── globals.css               # Styles globaux
│   ├── page.tsx                  # Page d'accueil
│   └── sitemap.ts                # Sitemap XML
├── public/
│   ├── robots.txt                # Fichier robots.txt
│   ├── manifest.json             # PWA manifest
│   └── projects/                 # Images des projets
├── next.config.js                # Configuration Next.js
├── tsconfig.json                 # Configuration TypeScript
├── package.json
└── README.md
```

## 🎨 Personnalisation

### Couleurs

Modifier les variables CSS dans `app/globals.css`:

```css
:root {
  --primary: #000000;
  --secondary: #1a1a1a;
  --accent: #ff6b35;  /* Couleur principale */
  --text: #ffffff;
  --text-muted: #b0b0b0;
  --border: #333333;
}
```

### Contenu

- **Textes**: Éditer directement dans les composants
- **Images Projets**: Remplacer les fichiers dans `public/projects/`
- **Données Portfolio**: Modifier l'array `projects` dans `app/components/Portfolio.tsx`
- **Infos Contact**: Mettre à jour les coordonnées dans `app/components/ContactForm.tsx`

### Réseaux Sociaux

Mettre à jour les URLs dans `app/components/ContactForm.tsx` et `app/components/Footer.tsx`

## 🔐 Sécurité

- ✅ Headers de sécurité configurés
- ✅ Aucune données sensibles exposées
- ✅ TypeScript strict mode pour la sécurité des types
- ✅ Contenu statique sans backend

## 📱 Optimisations Performance

- 🖼️ **Images**: Lazy loading automatique avec `next/image`
- 📦 **Bundle**: Minification CSS/JS
- 🗜️ **Compression**: Gzip/Brotli configurée
- ⚡ **Caching**: Cache headers optimisés
- 🎯 **Code Splitting**: Chunks automatiques

## 🔍 SEO

Le site inclut:
- Meta tags complètes
- Open Graph pour les réseaux sociaux
- Twitter Card integration
- Schema.org structured data (prêt)
- Sitemap XML
- Robots.txt
- Canonical URLs

## 🚀 Déploiement sur Vercel

### 1. Pousser le code sur GitHub

```bash
git add .
git commit -m "Deploy portfolio to production"
git push origin main
```

### 2. Sur Vercel

1. Aller sur https://vercel.com/new
2. Importer le projet GitHub
3. Aucune configuration requise (déploiement immédiat)
4. Cliquer "Deploy"

### 3. Configurer votre domaine

1. Dans Vercel Dashboard → Project Settings → Domains
2. Ajouter votre domaine personnalisé
3. Configurer les DNS records

## 📊 Monitoring et Analytics

Pour ajouter Google Analytics:

1. Créer un compte Google Analytics 4
2. Ajouter le `GA_MEASUREMENT_ID` dans `.env.local`
3. Le tracking est déjà configuré dans `app/layout.tsx`

## 🤝 Contribution

N'hésitez pas à améliorer le projet:

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou problème:
- 📧 Email: joel@exemple.com
- 🐛 Issues GitHub: [Créer une issue](https://github.com/salomonAMS/Joel-Portfolio/issues)

## 🙏 Remerciements

- Next.js pour l'excellent framework
- Vercel pour l'hébergement performant

---

**Version**: 1.1.0 - Production Ready (Static Version)
