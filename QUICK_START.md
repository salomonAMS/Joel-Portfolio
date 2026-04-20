# 🚀 Quick Start - Déploiement en 5 minutes

Guide rapide pour déployer votre portfolio en production sur Vercel.

## Prérequis

- [x] Compte GitHub (vous l'avez)
- [ ] Compte Vercel (gratuit) - https://vercel.com/signup
- [ ] Compte Resend (gratuit) - https://resend.com/signup
- [ ] Domaine personnalisé (optionnel mais recommandé)

## ⚡ 5 Étapes pour Déployer

### 1️⃣ Configurer Resend (5 min)

1. Aller sur https://resend.com/signup
2. Créer un compte gratuit
3. Vérifier votre email
4. Aller dans **Domains** et ajouter votre domaine
5. Copier les records DNS fournis
6. Ajouter les records dans votre registrar DNS (GoDaddy, OVH, etc.)
7. Aller dans **API Keys** et créer une nouvelle clé
8. **Copier la clé** (vous en aurez besoin)

### 2️⃣ Configurer Vercel (3 min)

1. Aller sur https://vercel.com/new
2. Cliquer "Import Project"
3. Sélectionner "GitHub" et connecter votre compte
4. Trouver et sélectionner `Joel-Portfolio`
5. Cliquer "Import"

### 3️⃣ Ajouter les Variables d'Environnement (2 min)

Lors du formulaire "Configure Project", ajouter:

```
RESEND_API_KEY = [votre_clé_API_resend]
CONTACT_EMAIL = joel@votre-domaine.com
NEXT_PUBLIC_SITE_URL = https://joel-cameroun.com
```

Puis cliquer "Deploy"

### 4️⃣ Configurer le Domaine (2 min)

1. Une fois déployé, aller dans **Project Settings**
2. Onglet **Domains**
3. Cliquer "Add Domain"
4. Entrer votre domaine (ex: `joel-cameroun.com`)
5. Suivre les instructions DNS de Vercel

### 5️⃣ Vérifier le Déploiement (1 min)

1. Attendre que le déploiement se termine
2. Cliquer le lien du site déployé
3. Tester le formulaire de contact
4. Vérifier que vous recevez l'email

✅ **C'est fait!** Votre site est en ligne!

## 📧 Tester l'Email

```bash
# Localement d'abord:
npm run dev
# Aller sur http://localhost:3000
# Remplir et envoyer le formulaire
# Vérifier que vous recevez l'email
```

## 🔗 Liens Importants

| Service | URL | Status |
|---------|-----|--------|
| Site Déployé | https://joel-cameroun.com | 🔄 À configurer |
| Vercel Dashboard | https://vercel.com/dashboard | ✅ Bookmark |
| Resend Dashboard | https://resend.com/dashboard | ✅ Bookmark |
| GitHub Repo | https://github.com/salomonAMS/Joel-Portfolio | ✅ Clonné |

## 🐛 Troubleshooting Rapide

### Le déploiement échoue

**Solution**: Vérifier les logs Vercel
```
Project Settings → Deployments → [Latest] → Logs
```

### Les emails ne sont pas reçus

**Checklist**:
- [ ] `RESEND_API_KEY` est correcte dans Vercel
- [ ] Domaine est "Active" dans Resend
- [ ] `CONTACT_EMAIL` est correct
- [ ] Vérifier les spams

### Le site est lent

**Solutions**:
- Attendre 1-2 min après déploiement (cache)
- Vérifier Core Web Vitals dans Vercel Analytics
- Vercel optimize automatiquement

### Erreur 500 sur le formulaire

**Solutions**:
1. Vérifier les logs Vercel
2. Vérifier que `RESEND_API_KEY` est définie
3. Vérifier la limite API Resend (100/jour gratuit)

## 📱 Tester sur Mobile

Après déploiement, visiter depuis téléphone:
```
https://joel-cameroun.com (ou votre domaine)
```

Vérifier que:
- [ ] Page s'affiche correctement
- [ ] Formulaire est utilisable
- [ ] Animations fluides
- [ ] Boutons facilement cliquables

## ⚙️ Configuration Avancée (Optionnel)

### Google Analytics

1. Créer un compte Google Analytics 4
2. Créer une propriété
3. Copier `G-XXXXXXXXXX` (Measurement ID)
4. Ajouter à Vercel Environment Variables: `GA_MEASUREMENT_ID`

### Domaine Personnalisé

Si vous avez un domaine chez GoDaddy, OVH, etc.:

1. Vercel Dashboard → Project Settings → Domains
2. Ajouter votre domaine
3. Vercel affiche les nameservers
4. Mettre à jour chez votre registrar DNS
5. Attendre 24h pour la propagation DNS

## 📊 Post-Déploiement Checklist

Une fois en ligne:

- [ ] Tester le site sur https://joel-cameroun.com
- [ ] Tester le formulaire (envoyer test)
- [ ] Vérifier que les emails arrivent
- [ ] Tester sur mobile (responsive)
- [ ] Vérifier les liens sociaux
- [ ] Ajouter à Google Search Console
- [ ] Soumettre sitemap à Google
- [ ] Tester sur différents navigateurs

## 🎯 Prochaines Étapes

**Court terme (cette semaine)**:
- Vérifier que tout fonctionne
- Envoyer quelques emails de test
- Partager le lien

**Moyen terme (ce mois)**:
- Ajouter le site à Google Search Console
- Configurer Google Analytics
- Monitorer le trafic

**Long terme**:
- Ajouter plus de projets au portfolio
- Optimiser le contenu SEO
- Ajouter blog/articles (optionnel)

## 💬 Support

Si vous avez besoin d'aide:

1. **Docs Vercel**: https://vercel.com/docs
2. **Docs Resend**: https://resend.com/docs
3. **Docs Next.js**: https://nextjs.org/docs
4. **Discord Vercel**: https://discord.gg/vercel

## 🎉 Félicitations!

Votre portfolio professionnel est maintenant en ligne avec une infrastructure production-ready!

**Vous avez maintenant**:
- ✅ Site performant et optimisé
- ✅ Formulaire de contact fonctionnel
- ✅ SEO optimisé pour Google
- ✅ Déploiement automatique
- ✅ Infrastructure scalable

---

**Besoin d'une aide personnalisée?** Consultez le fichier `DEPLOYMENT.md` pour les détails complets.

**Version**: 1.0.0  
**Dernière mise à jour**: 20 Avril 2026  
**Status**: 🟢 Production Ready
