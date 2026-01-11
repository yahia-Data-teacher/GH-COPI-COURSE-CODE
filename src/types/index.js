/**
 * TYPES & INTERFACES - MSDE EC2
 * Documentation des structures de données
 */

/**
 * @typedef {Object} Product
 * @property {number} id - ID unique du produit
 * @property {string} name - Nom du produit
 * @property {number} price - Prix en dollars
 * @property {string} image - URL de l'image
 * @property {string} category - Catégorie du produit
 * @property {string} description - Description détaillée
 * @property {number} rating - Note moyenne (0-5)
 * @property {number} reviews - Nombre d'avis
 * 
 * @example
 * {
 *   id: 1,
 *   name: "iPhone 15 Pro",
 *   price: 999,
 *   image: "https://...",
 *   category: "Electronics",
 *   description: "Smartphone...",
 *   rating: 4.8,
 *   reviews: 342
 * }
 */

/**
 * @typedef {Object} CartItem
 * @property {number} id - ID du produit
 * @property {string} name - Nom du produit
 * @property {number} price - Prix unitaire
 * @property {string} image - Image du produit
 * @property {string} category - Catégorie
 * @property {number} quantity - Quantité dans le panier
 * 
 * @example
 * {
 *   id: 1,
 *   name: "iPhone 15 Pro",
 *   price: 999,
 *   image: "https://...",
 *   category: "Electronics",
 *   quantity: 2
 * }
 */

/**
 * @typedef {Object} CartContextType
 * @property {CartItem[]} cart - Tableau des articles du panier
 * @property {Function} addToCart - Ajouter un produit
 * @property {Function} removeFromCart - Supprimer un produit
 * @property {Function} updateQuantity - Modifier la quantité
 * @property {Function} clearCart - Vider le panier
 * @property {Function} getTotalPrice - Obtenir le total
 * @property {number} itemCount - Nombre total d'articles
 */

/**
 * CONSTANTES SYSTÈME
 */

// Taux de taxe (10%)
const TAX_RATE = 0.1;

// Seuil livraison gratuite ($100)
const FREE_SHIPPING_THRESHOLD = 100;

// Frais de livraison
const SHIPPING_COST = 10;

// Nombre de produits par page
const ITEMS_PER_PAGE = 12;

/**
 * URLS DES PAGES
 */

const ROUTES = {
  HOME: '/',
  PRODUCT: '/product/:id',
  CART: '/cart',
  NOT_FOUND: '*'
};

/**
 * CATÉGORIES DISPONIBLES
 */

const CATEGORIES = [
  'Tous',
  'Electronics',
  'Computers',
  'Audio',
  'Tablets',
  'Wearables',
  'Cameras',
  'Drones',
  'Gaming',
  'Accessories'
];

/**
 * OPTIONS DE TRI
 */

const SORT_OPTIONS = {
  NAME: 'name',
  PRICE_LOW: 'price-low',
  PRICE_HIGH: 'price-high',
  RATING: 'rating'
};

export {
  TAX_RATE,
  FREE_SHIPPING_THRESHOLD,
  SHIPPING_COST,
  ITEMS_PER_PAGE,
  ROUTES,
  CATEGORIES,
  SORT_OPTIONS
};

/**
 * NOTES DE DÉVELOPPEMENT
 * 
 * 1. Les types JSDoc sont utilisés pour la documentation
 * 2. Les objets Product sont définis dans src/data/products.js
 * 3. CartItem = Product + quantity
 * 4. CartContext gère l'état global du panier
 * 5. Tous les calculs sont faits côté client
 * 6. Les images viennent d'Unsplash (domaine public)
 */
