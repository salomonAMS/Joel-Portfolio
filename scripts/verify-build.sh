#!/bin/bash

# Build Verification Script
# Vérifie que le projet se construit correctement avant le déploiement

echo "🔍 Vérification du build..."
echo ""

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node version
echo "📦 Vérification de Node.js..."
node_version=$(node -v)
echo "  Node.js version: $node_version"

# Check npm version
npm_version=$(npm -v)
echo "  npm version: $npm_version"
echo ""

# Check environment variables
echo "🔐 Vérification des variables d'environnement..."
if [ -f .env.local ]; then
    if grep -q "RESEND_API_KEY" .env.local; then
        echo -e "  ${GREEN}✓${NC} RESEND_API_KEY configurée"
    else
        echo -e "  ${RED}✗${NC} RESEND_API_KEY manquante"
    fi
    
    if grep -q "CONTACT_EMAIL" .env.local; then
        echo -e "  ${GREEN}✓${NC} CONTACT_EMAIL configurée"
    else
        echo -e "  ${RED}✗${NC} CONTACT_EMAIL manquante"
    fi
else
    echo -e "  ${YELLOW}⚠${NC} Fichier .env.local non trouvé"
fi
echo ""

# Run build
echo "🔨 Construction du projet..."
npm run build

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✓ Build réussi!${NC}"
    echo ""
    echo "📊 Statistiques du build:"
    echo "  - Next.js version: $(npm list next | head -2 | tail -1)"
    echo ""
    echo "✅ Le projet est prêt pour le déploiement!"
else
    echo ""
    echo -e "${RED}✗ Build échoué!${NC}"
    echo ""
    echo "Veuillez corriger les erreurs avant de déployer."
    exit 1
fi

echo ""
echo "💡 Prochaines étapes:"
echo "  1. Vérifier les logs ci-dessus"
echo "  2. Tester localement: npm run dev"
echo "  3. Pousser vers GitHub: git push origin main"
echo "  4. Déployer sur Vercel"
echo ""
