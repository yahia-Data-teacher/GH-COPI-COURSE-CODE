/**
 * HOOK - useAnalytics
 * Hook personnalisé pour accéder aux données d'analytics
 */

import { useEffect, useState } from 'react';
import { trackVisit, trackProductView, getAnalytics } from '../config/analytics';

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Enregistrer une visite
    trackVisit();
    
    // Charger les statistiques
    setAnalytics(getAnalytics());
    setLoading(false);
  }, []);

  const recordProductView = (productId, productName) => {
    trackProductView(productId, productName);
    setAnalytics(getAnalytics());
  };

  return {
    analytics,
    loading,
    recordProductView,
  };
};

export default useAnalytics;
