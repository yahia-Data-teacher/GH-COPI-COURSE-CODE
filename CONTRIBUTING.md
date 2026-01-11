# Guide de Développement - MSDE EC2

## 🎯 Architecture Générale

```
App.jsx (Routeur + CartProvider)
├── Header (Navigation + Panier)
├── Routes
│   ├── HomePage (Catalogue)
│   ├── ProductDetailPage (Détail)
│   └── CartPage (Panier)
└── Footer (Infos)
```

## 📝 Ajouter un Nouveau Produit

1. Ouvrir `src/data/products.js`
2. Ajouter l'objet produit dans le tableau `products`:

```javascript
{
  id: 13,
  name: "Nouveau Produit",
  price: 999,
  image: "https://images.unsplash.com/...",
  category: "Electronics",
  description: "Description du produit",
  rating: 4.5,
  reviews: 100
}
```

## 📂 Ajouter une Nouvelle Catégorie

1. Modifier `src/data/products.js`
2. Ajouter la catégorie au tableau `categories`
3. Assigner la catégorie à des produits

## 🎨 Modifier les Styles

- Utiliser les classes Tailwind CSS
- Les styles sont définis directement dans les composants
- Consulter [Tailwind CSS Docs](https://tailwindcss.com/docs)

### Couleurs principales:
- `bg-blue-600` - Primaire
- `bg-slate-900` - Secondaire
- `text-gray-800` - Texte principal

## 🔄 Workflow Git

1. Créer une branche feature: `git checkout -b feature/nom`
2. Faire des commits: `git add . && git commit -m "Description"`
3. Pousser: `git push origin feature/nom`
4. Créer une Pull Request

## 🧪 Tests Manuel

### Page d'accueil:
- [ ] Les produits s'affichent
- [ ] Les filtres fonctionnent
- [ ] Le tri fonctionne
- [ ] Les images s'affichent

### Détail produit:
- [ ] Les informations s'affichent
- [ ] Ajouter au panier fonctionne
- [ ] Retour à l'accueil fonctionne

### Panier:
- [ ] Les produits s'affichent
- [ ] Modifier quantité fonctionne
- [ ] Supprimer produit fonctionne
- [ ] Calcul du total correct

## 🐛 Déboguer

### En navigateur:
- Ouvrir DevTools (F12)
- Console pour les erreurs
- Network pour les requêtes

### React DevTools:
- Installer l'extension Chrome
- Inspecter les composants
- Voir l'état et les props

## 📚 Ressources Utiles

- [React Docs](https://react.dev)
- [React Router](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite Guide](https://vitejs.dev)

## 🚀 Build Production

```bash
npm run build        # Créer la build
npm run preview      # Prévisualiser la build
```

## 🤔 Dépannage

### "npm: command not found"
- Installer Node.js depuis https://nodejs.org

### Le serveur ne démarre pas
- Tuer le processus: `pkill -f vite`
- Supprimer node_modules: `rm -rf node_modules`
- Réinstaller: `npm install`

### Les styles ne s'appliquent pas
- Vérifier que les classes Tailwind sont correctes
- Redémarrer le serveur de dev
- Vider le cache du navigateur (Ctrl+Shift+Delete)
