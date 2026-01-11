// Configuration et constantes de l'application

export const SITE_NAME = 'MSDE EC2';
export const SITE_DESCRIPTION = 'Votre destination pour les derniers produits technologiques';

// Frais et taxes
export const TAX_RATE = 0.1; // 10%
export const FREE_SHIPPING_THRESHOLD = 100;
export const SHIPPING_COST = 10;

// Pagination
export const ITEMS_PER_PAGE = 12;

// URLs
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Messages
export const MESSAGES = {
  ADD_TO_CART_SUCCESS: 'Produit ajouté au panier avec succès!',
  REMOVE_FROM_CART_SUCCESS: 'Produit supprimé du panier',
  CART_CLEARED: 'Panier vidé',
  ERROR: 'Une erreur est survenue',
};

// Délais
export const DEBOUNCE_DELAY = 300;
export const TOAST_DURATION = 3000;
