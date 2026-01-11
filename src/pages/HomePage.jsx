import React, { useEffect } from 'react';
import ProductList from '../components/ProductList';
import { trackVisit } from '../config/analytics';

const HomePage = () => {
  useEffect(() => {
    // Enregistrer la visite de la page d'accueil
    trackVisit();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Bienvenue chez MSDE EC2</h1>
          <p className="text-xl text-blue-100">
            Découvrez les derniers produits technologiques au meilleur prix
          </p>
        </div>
      </div>

      {/* Products Section */}
      <ProductList />
    </div>
  );
};

export default HomePage;
