import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search as SearchIcon, MapPin, CheckCircle, XCircle, Loader } from 'lucide-react';
import { searchMedicines, cities, pharmacies } from '../../data/dummyData';
import { Medicine } from '../../data/dummyData';

export default function SearchMedicine() {
  const [medicineName, setMedicineName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [results, setResults] = useState<Medicine[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    if (!medicineName.trim()) return;

    setIsLoading(true);
    setHasSearched(false);

    setTimeout(() => {
      const searchResults = searchMedicines(medicineName, selectedCity || undefined);
      setResults(searchResults);
      setHasSearched(true);
      setIsLoading(false);
    }, 800);
  };

  const getPharmacyForMedicine = (pharmacyId: string) => {
    return pharmacies.find(p => p.id === pharmacyId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Search for Medicines</h1>
          <p className="text-gray-600">Find availability across pharmacies near you</p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Medicine Name
              </label>
              <div className="relative">
                <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={medicineName}
                  onChange={(e) => setMedicineName(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  placeholder="Enter medicine name (e.g., Paracetamol)"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                City (Optional)
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none appearance-none bg-white"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button
            onClick={handleSearch}
            disabled={!medicineName.trim() || isLoading}
            className="w-full mt-4 bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
        </motion.div>

        {isLoading && (
          <div className="flex flex-col items-center justify-center py-16">
            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
              <Loader className="h-12 w-12 text-teal-600" />
            </motion.div>
            <p className="text-gray-600 mt-4">Loading results...</p>
          </div>
        )}

        {!isLoading && hasSearched && results.length === 0 && (
          <div className="text-center py-16">
            <XCircle className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No Results Found</h3>
            <p className="text-gray-600">
              Try searching for a different medicine or remove the city filter
            </p>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
          >
            <p className="text-gray-600 mb-4">
              Found {results.length} result{results.length !== 1 ? 's' : ''}
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((medicine, index) => {
                const pharmacy = getPharmacyForMedicine(medicine.pharmacyId);
                return (
                  <motion.div
                    key={`${medicine.id}-${index}`}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {medicine.name}
                        </h3>
                        <div className="flex items-center">
                          {medicine.available ? (
                            <>
                              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                              <span className="text-green-600 font-medium">Available</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="h-5 w-5 text-red-500 mr-2" />
                              <span className="text-red-600 font-medium">Out of Stock</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-teal-600">
                          ${medicine.price.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">per unit</p>
                      </div>
                    </div>

                    {pharmacy && (
                      <div className="border-t pt-4">
                        <p className="font-semibold text-gray-900 mb-2">{pharmacy.name}</p>
                        <p className="text-sm text-gray-600 mb-1 flex items-start">
                          <MapPin className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                          {pharmacy.address}
                        </p>
                        <p className="text-sm text-gray-600">{pharmacy.city}</p>
                      </div>
                    )}

                    <button className="w-full mt-4 bg-teal-50 text-teal-600 py-2 rounded-lg font-medium hover:bg-teal-100 transition-colors">
                      View Details
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
