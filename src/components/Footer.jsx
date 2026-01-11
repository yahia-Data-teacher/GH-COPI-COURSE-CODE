import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">À propos</h3>
            <p className="text-gray-400">
              MSDE EC2 est votre destination pour les derniers produits technologiques.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-400">FAQ</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
              <li><a href="#" className="hover:text-blue-400">Livraison</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Légal</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-blue-400">Conditions</a></li>
              <li><a href="#" className="hover:text-blue-400">Confidentialité</a></li>
              <li><a href="#" className="hover:text-blue-400">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} MSDE EC2. Tous droits réservés. POC - Données fictives.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
