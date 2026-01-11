import React from 'react';
import { useAnalytics } from '../hooks/useAnalytics';
import { resetAnalytics } from '../config/analytics';

const AnalyticsPage = () => {
  const { analytics } = useAnalytics();

  const handleResetAnalytics = () => {
    if (window.confirm('Êtes-vous sûr de vouloir réinitialiser toutes les statistiques ?')) {
      resetAnalytics();
      window.location.reload();
    }
  };

  if (!analytics) {
    return <div className="p-8 text-center">Chargement...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">📊 Statistiques MSDE EC2</h1>

        {/* Statistiques principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Total Visiteurs */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium mb-2">Visiteurs Totaux</div>
            <div className="text-4xl font-bold text-blue-600">{analytics.totalVisits}</div>
            <p className="text-gray-600 text-xs mt-2">Visites (délai: 30 min)</p>
          </div>

          {/* Articles uniques vus */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium mb-2">Articles Vus</div>
            <div className="text-4xl font-bold text-green-600">{analytics.uniqueProductsViewed}</div>
            <p className="text-gray-600 text-xs mt-2">Articles uniques consultés</p>
          </div>

          {/* Total des vues */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm font-medium mb-2">Total Consultations</div>
            <div className="text-4xl font-bold text-purple-600">{analytics.totalProductViews}</div>
            <p className="text-gray-600 text-xs mt-2">Consultations d'articles</p>
          </div>
        </div>

        {/* Articles les plus vus */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">🔝 Articles les Plus Consultés</h2>
          
          {analytics.productsViewed.length === 0 ? (
            <p className="text-gray-600 text-center py-8">Aucun article consulté pour le moment</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Article</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Consultations</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Première visite</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Dernière visite</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.productsViewed.map((product, index) => (
                    <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-gray-900">
                        {index + 1}. {product.name}
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-bold">
                          {product.views}
                        </span>
                      </td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">
                        {new Date(product.firstViewed).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="text-center py-3 px-4 text-sm text-gray-600">
                        {new Date(product.lastViewed).toLocaleDateString('fr-FR')} 
                        <br/>
                        <span className="text-xs">
                          {new Date(product.lastViewed).toLocaleTimeString('fr-FR')}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Bouton Réinitialiser */}
        <div className="text-center">
          <button
            onClick={handleResetAnalytics}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            🗑️ Réinitialiser les Statistiques
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
