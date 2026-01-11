# 🛒 MSDE EC2 - POC E-commerce React

Une application web e-commerce moderne construite avec React, Vite, React Router et Tailwind CSS.

## 📋 Fonctionnalités

- ✅ Catalogue de produits avec filtrage par catégorie
- ✅ Tri des produits (nom, prix, note)
- ✅ Fiche détail produit
- ✅ Panier d'achat avec gestion des quantités
- ✅ Gestion d'état avec Context API
- ✅ Design responsive avec Tailwind CSS
- ✅ Navigation fluide avec React Router
- ✅ Données fictives pour le POC

## 🚀 Installation

### Prérequis
- Node.js 16+ 
- npm 8+

### Étapes d'installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

3. **Ouvrir l'application**
   ```
   http://localhost:5173
   ```

## 📦 Structure du Projet

```
src/
├── components/          # Composants réutilisables
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ProductList.jsx
├── pages/              # Pages principales
│   ├── HomePage.jsx
│   ├── ProductDetailPage.jsx
│   ├── CartPage.jsx
│   └── NotFoundPage.jsx
├── context/            # Gestion d'état
│   └── CartContext.jsx
├── data/               # Données fictives
│   └── products.js
└── App.jsx             # Composant racine
```

## 🔧 Technologies Utilisées

- **React 19** - Bibliothèque UI
- **Vite** - Build tool rapide
- **React Router v7** - Navigation
- **Tailwind CSS** - Styling
- **Context API** - Gestion d'état

## 📱 Pages Disponibles

- `/` - Accueil avec catalogue complet
- `/product/:id` - Détail d'un produit
- `/cart` - Panier d'achat
- `*` - Page 404

## 🎨 Fonctionnalités du Panier

- Ajouter/supprimer des produits
- Modifier les quantités
- Calcul automatique du total avec taxes
- Indicateur du nombre d'articles

## 📊 Données Fictives

L'application utilise 12 produits fictifs dans 8 catégories:
- Electronics
- Computers
- Audio
- Tablets
- Wearables
- Cameras
- Drones
- Gaming
- Accessories

## 🚀 Build pour Production

```bash
npm run build
npm run preview
```

## 📝 Notes

- Les données sont en mémoire (localStorage possible en future)
- Les images proviennent d'Unsplash (placeholder gratuit)
- Le paiement n'est pas implémenté (POC)
- Pas de backend (données statiques)



je veux creer une application web pour un site de e-commerce avec du react c est un POC donc tu peux utiliser des donner et image fake