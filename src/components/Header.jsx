import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const { itemCount } = useContext(CartContext);

  return (
    <header className="bg-slate-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-blue-400 hover:text-blue-300">
          🛒 MSDE EC2
        </Link>
        <nav className="flex gap-6 items-center">
          <Link to="/" className="hover:text-blue-400 transition">
            Accueil
          </Link>
          <Link to="/cart" className="flex items-center gap-2 hover:text-blue-400 transition relative">
            <span>🛒 Panier</span>
            {itemCount > 0 && (
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full absolute -top-2 -right-3">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/analytics" className="flex items-center gap-2 hover:text-blue-400 transition">
            <span>📊 Stats</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
