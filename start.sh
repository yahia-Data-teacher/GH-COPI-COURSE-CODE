#!/bin/bash

# Script de démarrage - MSDE EC2 E-commerce POC

echo "🛒 MSDE EC2 - POC E-commerce React"
echo "=================================="
echo ""

# Vérifier si Node.js est installé
if ! command -v node &> /dev/null; then
    echo "❌ Node.js n'est pas installé!"
    echo "Veuillez installer Node.js 16+ depuis https://nodejs.org"
    exit 1
fi

# Vérifier si npm est installé
if ! command -v npm &> /dev/null; then
    echo "❌ npm n'est pas installé!"
    exit 1
fi

echo "✅ Node.js et npm détectés"
echo ""

# Installer les dépendances si node_modules n'existe pas
if [ ! -d "node_modules" ]; then
    echo "📦 Installation des dépendances..."
    npm install
    echo ""
fi

# Démarrer le serveur de développement
echo "🚀 Démarrage du serveur de développement..."
echo ""
echo "L'application devrait s'ouvrir automatiquement:"
echo "→ http://localhost:5173"
echo ""

npm run dev
