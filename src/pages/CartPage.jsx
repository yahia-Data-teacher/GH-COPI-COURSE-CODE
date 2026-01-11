import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold mb-2">Votre panier est vide</h1>
          <p className="text-gray-600 mb-6">Ajoutez des produits pour commencer vos achats</p>
          <Link
            to="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Continuer vos achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Panier d'achat</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Produits */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 p-6 border-b border-gray-200 last:border-b-0 hover:bg-gray-50 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.category}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-blue-600">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                      <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-700 font-bold text-xl"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Résumé */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-bold mb-6">Résumé</h2>

              <div className="space-y-4 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between">
                  <span>Sous-total:</span>
                  <span className="font-semibold">${getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison:</span>
                  <span className="text-green-600 font-semibold">Gratuite*</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes:</span>
                  <span className="font-semibold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6 text-xl font-bold">
                <span>Total:</span>
                <span className="text-blue-600">
                  ${(parseFloat(getTotalPrice()) * 1.1).toFixed(2)}
                </span>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors mb-3">
                Procéder au paiement
              </button>

              <button
                onClick={clearCart}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 rounded-lg transition-colors mb-4"
              >
                Vider le panier
              </button>

              <Link
                to="/"
                className="block text-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Continuer les achats
              </Link>

              <p className="text-xs text-gray-500 mt-4">
                *Livraison gratuite pour les commandes supérieures à $100
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
