# Guide de Déploiement en Production

Ce guide vous explique comment déployer le portfolio Joël Cameroun en production sur Vercel.

## 📋 Checklist Pré-Déploiement

Avant de déployer, assurez-vous que:

- [ ] Toutes les variables d'environnement sont configurées
- [ ] Resend API Key est valide et testée
- [ ] Contact email est correct
- [ ] Le domaine personnalisé est prêt
- [ ] Code a été testé localement
- [ ] Aucun secret n'est commité dans Git

## 🚀 Déploiement sur Vercel

### Option 1: Via GitHub (Recommandé)

#### Étape 1: Préparer GitHub

```bash
# Assurez-vous que tout est commité
git status
git add .
git commit -m "chore: prepare for production deployment"
git push origin main
```

#### Étape 2: Importer sur Vercel

1. Aller sur [https://vercel.com/new](https://vercel.com/new)
2. Cliquer sur "Import Project"
3. Sélectionner "GitHub" et authentifier
4. Trouver et sélectionner le repo `Joel-Portfolio`
5. Cliquer "Import"

#### Étape 3: Configurer l'environnement

Dans l'écran "Configure Project":

1. **Environment Variables**: Ajouter les variables nécessaires:
   ```
   RESEND_API_KEY=your_actual_api_key
   CONTACT_EMAIL=joel@votre-domaine.com
   NEXT_PUBLIC_SITE_URL=https://joel-cameroun.com
   ```

2. **Root Directory**: Laisser vide (automatique)

3. **Build Command**: Garder la valeur par défaut

4. Cliquer "Deploy"

#### Étape 4: Configurer le domaine

1. Une fois déployé, aller dans Project Settings
2. Onglet "Domains"
3. Cliquer "Add Domain"
4. Entrer votre domaine (ex: `joel-cameroun.com`)
5. Configurer les DNS records selon les instructions Vercel

### Option 2: Via CLI Vercel

```bash
# Installer Vercel CLI
npm install -g vercel

# Déployer
vercel

# Avec confirmation interactive
vercel --prod

# Définir les variables d'environnement
vercel env add RESEND_API_KEY
vercel env add CONTACT_EMAIL
vercel env add NEXT_PUBLIC_SITE_URL
```

## 🔑 Configuration des Variables d'Environnement

### Variables Requises

| Variable | Description | Exemple |
|----------|-------------|---------|
| `RESEND_API_KEY` | Clé API Resend | `re_xxx...` |
| `CONTACT_EMAIL` | Email pour recevoir les messages | `joel@joel-cameroun.com` |
| `NEXT_PUBLIC_SITE_URL` | URL du site en production | `https://joel-cameroun.com` |

### Variables Optionnelles

| Variable | Description | Exemple |
|----------|-------------|---------|
| `GA_MEASUREMENT_ID` | ID Google Analytics | `G-XXXXXXXXXX` |

## 📧 Configuration Resend en Production

### 1. Créer un compte Resend

- Aller sur [https://resend.com](https://resend.com)
- Créer un compte gratuit
- Vérifier votre email

### 2. Configurer votre domaine

1. Dans Resend Dashboard → Domains
2. Cliquer "Add Domain"
3. Entrer votre domaine (ex: `joel-cameroun.com`)
4. Copier les records DNS fournis
5. Ajouter les records dans votre registrar DNS
6. Attendre la vérification (quelques heures)

### 3. Obtenir la clé API

1. Dans Resend Dashboard → API Keys
2. Créer une nouvelle clé
3. Copier la clé
4. L'ajouter à Vercel Environment Variables

## 🌐 Configuration DNS

### Exemple avec Vercel Nameservers

1. Chez votre registrar DNS (OVH, Namecheap, GoDaddy, etc.):
   - Modifier les nameservers vers ceux de Vercel
   - Vercel affiche les nameservers à ajouter dans Project Settings

### Exemple avec Records personnalisés

Si vous gardez vos nameservers actuels:

```
Type: A
Name: @ (ou joel-cameroun.com)
Value: 76.76.19.165

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

*Les valeurs exactes sont affichées dans Vercel Dashboard*

## ✅ Vérification Post-Déploiement

### 1. Vérifier le site

- [ ] Accéder à https://votre-domaine.com
- [ ] Vérifier que le contenu s'affiche correctement
- [ ] Tester le formulaire de contact
- [ ] Vérifier les animations
- [ ] Tester sur mobile

### 2. Vérifier les emails

- [ ] Soumettre un message de test
- [ ] Vérifier l'email admin reçu
- [ ] Vérifier l'email de confirmation utilisateur
- [ ] Tester avec différentes adresses email

### 3. Vérifier les performances

```bash
# Utiliser les outils de Vercel
# Analytics → Performance
# Vérifier les Core Web Vitals
```

### 4. Vérifier le SEO

- [ ] Vérifier meta tags avec https://www.metatags.io
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Vérifier robots.txt (https://votre-domaine.com/robots.txt)
- [ ] Vérifier Open Graph (sur réseaux sociaux)

## 🔧 Maintenance en Production

### Logs

Accéder aux logs de Vercel:
1. Project Settings → Logs
2. Filtrer par date
3. Chercher les erreurs

### Monitoring

Configuration recommandée:
1. Activer Analytics (gratuit)
2. Configurer Alerts si nécessaire
3. Surveiller les Core Web Vitals

### Mises à jour

```bash
# Mettre à jour les dépendances
npm update

# Tester localement
npm run build

# Commiter et pousser
git add .
git commit -m "chore: update dependencies"
git push origin main
```

## 🚨 Troubleshooting

### Le site n'affiche pas le formulaire de contact

**Cause possible**: Clé API Resend invalide ou manquante

**Solution**:
1. Vérifier la clé API dans Vercel Environment Variables
2. Vérifier que la clé est active dans Resend Dashboard
3. Redéployer après changement de variable

```bash
vercel redeploy
```

### Les emails ne sont pas reçus

**Cause possible**: 
- Domaine Resend non vérifié
- Email admin incorrect
- Spam filter

**Solution**:
1. Vérifier dans Resend que le domaine est "Active"
2. Vérifier `CONTACT_EMAIL` dans Environment Variables
3. Ajouter l'email à vos contacts approuvés
4. Vérifier les spams

### Performance lente

**Solutions**:
1. Vérifier Core Web Vitals dans Analytics
2. Optimiser les images
3. Activer caching plus agressif
4. Utiliser CDN edge (gratuit avec Vercel)

### Erreur 500 sur formulaire

**Solutions**:
1. Vérifier les logs Vercel
2. Vérifier `RESEND_API_KEY`
3. Vérifier la limite API Resend (100/jour gratuit)
4. Vérifier les headers CORS

## 📊 Monitoring Recommandé

### Google Search Console
1. Ajouter la propriété
2. Soumettre le sitemap
3. Monitorer l'indexation
4. Vérifier les erreurs d'exploration

### Google Analytics
1. Créer une propriété GA4
2. Ajouter le `GA_MEASUREMENT_ID`
3. Monitorer le trafic

### Resend Dashboard
1. Surveiller les limites API
2. Vérifier les métriques d'envoi
3. Monitorer les bounces

## 🔐 Sécurité en Production

- ✅ Utiliser HTTPS (automatique avec Vercel)
- ✅ Headers de sécurité (configurés dans next.config.js)
- ✅ Validation serveur des formulaires (implémentée)
- ✅ Sanitization HTML (implémentée)
- ✅ CORS configuré correctement
- ✅ Rate limiting (à ajouter si nécessaire)

## 📞 Support Vercel

- Documentation: https://vercel.com/docs
- Support: https://vercel.com/help
- Community: https://github.com/vercel/next.js/discussions

---

**Dernière mise à jour**: 2024
**Version**: 1.0.0
