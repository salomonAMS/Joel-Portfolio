# Joël Cameroun - Portfolio Professionnel

Portfolio moderne et performant pour vidéaste professionnel, construit avec Next.js 15, React 19 et des optimisations de production.

## 🎬 Fonctionnalités

- **Hero Section Animée** - Arrière-plan canvas animé avec effets visuels
- **Portfolio Dynamique** - Galerie de projets avec animations au survol
- **Formulaire de Contact** - Intégration complète avec Resend pour l'envoi d'emails
- **SEO Optimisé** - Meta tags, Open Graph, sitemap, robots.txt
- **Performance** - Images optimisées, lazy loading, minification
- **Responsive** - Design mobile-first, compatible tous les appareils
- **Animations** - Transitions fluides et animations cinématiques
- **Dark Mode** - Design élégant en noir et orange

## 🚀 Stack Technologique

- **Framework**: Next.js 15
- **UI Library**: React 19
- **Email**: Resend
- **Styling**: CSS personnalisé + Tailwind CSS ready
- **TypeScript**: Typage complet
- **Deployment**: Vercel (optimisé)

## 📋 Prérequis

- Node.js 18+ (recommandé 20+)
- npm ou pnpm
- Clé API Resend (gratuite à https://resend.com)

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

### 3. Configurer les variables d'environnement

Créer un fichier `.env.local` à la racine du projet :

```bash
cp .env.local.example .env.local
```

Puis remplir avec vos valeurs:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=joel@exemple.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📁 Structure du Projet

```
.
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # API route pour les emails
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
- **Contact Email**: Mettre à jour `CONTACT_EMAIL` dans `.env.local`

### Réseaux Sociaux

Mettre à jour les URLs dans `app/components/ContactForm.tsx` et `app/components/Footer.tsx`

## 📧 Configuration Email avec Resend

### Créer un compte Resend

1. Aller sur https://resend.com
2. Créer un compte gratuit
3. Vérifier votre domaine
4. Copier votre API key

### Configurer l'envoi d'emails

L'API route `/api/contact` gère:
- Validation des données côté serveur
- Envoi de deux emails (admin + confirmation utilisateur)
- Protection contre les abus
- Gestion des erreurs

## 🔐 Sécurité

- ✅ Validation des formulaires côté serveur
- ✅ Sanitization du contenu HTML
- ✅ Headers de sécurité configurés
- ✅ CORS configuré correctement
- ✅ Protection contre les injections XSS

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
3. Configurer les variables d'environnement:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
   - `NEXT_PUBLIC_SITE_URL=https://votre-domaine.com`
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
- Resend pour la solution email simple et fiable

---

**Version**: 1.0.0 - Production Ready
