/**
 * ANALYTICS - MSDE EC2
 * Gestion du tracking des visites et des articles consultés
 */

// Clés localStorage
const ANALYTICS_KEYS = {
  TOTAL_VISITS: 'msde_ec2_total_visits',
  PRODUCTS_VIEWED: 'msde_ec2_products_viewed',
  LAST_VISIT: 'msde_ec2_last_visit',
};

// Délai entre deux visites (en millisecondes) - 30 minutes
const VISIT_TIMEOUT = 30 * 60 * 1000;

/**
 * Enregistre une nouvelle visite si le délai d'expiration est passé
 */
export const trackVisit = () => {
  const now = Date.now();
  const lastVisit = localStorage.getItem(ANALYTICS_KEYS.LAST_VISIT);

  // Si c'est la première visite ou que le délai est passé
  if (!lastVisit || (now - parseInt(lastVisit)) > VISIT_TIMEOUT) {
    const totalVisits = parseInt(localStorage.getItem(ANALYTICS_KEYS.TOTAL_VISITS) || '0') + 1;
    localStorage.setItem(ANALYTICS_KEYS.TOTAL_VISITS, totalVisits.toString());
    localStorage.setItem(ANALYTICS_KEYS.LAST_VISIT, now.toString());
  }
};

/**
 * Enregistre la visite d'un produit
 * @param {number|string} productId - L'ID du produit
 * @param {string} productName - Le nom du produit
 */
export const trackProductView = (productId, productName) => {
  const productsViewed = JSON.parse(localStorage.getItem(ANALYTICS_KEYS.PRODUCTS_VIEWED) || '[]');
  
  // Vérifier si le produit est déjà dans la liste
  const existingProduct = productsViewed.find(p => p.id === productId);
  
  if (existingProduct) {
    // Incrémenter le compteur de vue
    existingProduct.views += 1;
    existingProduct.lastViewed = new Date().toISOString();
  } else {
    // Ajouter un nouveau produit
    productsViewed.push({
      id: productId,
      name: productName,
      views: 1,
      firstViewed: new Date().toISOString(),
      lastViewed: new Date().toISOString(),
    });
  }
  
  localStorage.setItem(ANALYTICS_KEYS.PRODUCTS_VIEWED, JSON.stringify(productsViewed));
};

/**
 * Récupère les statistiques globales
 */
export const getAnalytics = () => {
  const totalVisits = parseInt(localStorage.getItem(ANALYTICS_KEYS.TOTAL_VISITS) || '0');
  const productsViewed = JSON.parse(localStorage.getItem(ANALYTICS_KEYS.PRODUCTS_VIEWED) || '[]');
  const totalProductViews = productsViewed.reduce((sum, p) => sum + p.views, 0);
  const uniqueProductsViewed = productsViewed.length;

  return {
    totalVisits,
    totalProductViews,
    uniqueProductsViewed,
    productsViewed: productsViewed.sort((a, b) => b.views - a.views),
  };
};

/**
 * Réinitialise toutes les statistiques
 */
export const resetAnalytics = () => {
  localStorage.removeItem(ANALYTICS_KEYS.TOTAL_VISITS);
  localStorage.removeItem(ANALYTICS_KEYS.PRODUCTS_VIEWED);
  localStorage.removeItem(ANALYTICS_KEYS.LAST_VISIT);
};

export default {
  trackVisit,
  trackProductView,
  getAnalytics,
  resetAnalytics,
};
