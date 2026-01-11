import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { products } from '../data/products';
import { trackProductView } from '../config/analytics';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    // Enregistrer la consultation du produit
    if (product) {
      trackProductView(product.id, product.name);
    }
  }, [product, id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produit non trouvé</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} ajouté au panier!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Retour aux produits
        </Link>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image */}
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>

            {/* Détails */}
            <div>
              <p className="text-sm text-gray-500 mb-2">{product.category}</p>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">⭐</span>
                <span className="text-lg text-gray-700">
                  {product.rating} / 5 ({product.reviews} avis)
                </span>
              </div>

              <p className="text-gray-600 text-lg mb-6">
                {product.description}
              </p>

              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  ${product.price}
                </div>
                <div className="text-green-600 text-sm mb-4">
                  ✓ Stock disponible
                </div>
              </div>

              <div className="flex gap-4 mb-6">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  🛒 Ajouter au panier
                </button>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-bold mb-2">Avantages</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>✓ Livraison gratuite pour les commandes &gt; $100</li>
                  <li>✓ Retour gratuit sous 30 jours</li>
                  <li>✓ Garantie 1 an</li>
                  <li>✓ Service client 24/7</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
