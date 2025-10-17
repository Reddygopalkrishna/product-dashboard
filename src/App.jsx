import { useState } from "react";
import Header from "./components/Header";

import ProductCard from "./components/ProductCard";

import ProductFormModal from "./components/ProductFormModal";

import {Search, Filter, SortAsc, Plus, Package } from "lucide-react";

const App=()=> {

  const [products, setProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] =useState(false);
  const [editProduct, setEditProduct]= useState(null);

  const [darkMode, setDarkMode] =useState(false);
  const [filter, setFilter] =useState("All");
  const [sortOrder, setSortOrder] = useState("");

  const [searchQuery, setSearchQuery] = useState("");

  const handleAddProduct =(product)=>{

    if (editProduct) {
      setProducts(products.map((p)=>(p.id === editProduct.id ? { ...product, id: p.id } : p)));
      setEditProduct(null);
    } else {
      setProducts([...products, {...product, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const filteredProducts = products.filter((p) => {

    const matchesCategory = filter === "All" || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        <Header onAdd={() => setIsModalOpen(true)} darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="mb-6 sm:mb-8 space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 sm:py-4 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-400 shadow-sm"
              />

            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">

                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white appearance-none cursor-pointer shadow-sm"
                >
                  <option value="All">All Categories</option>
                  {[...new Set(products.map((p) => p.category))].map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div className="flex-1 relative">
                <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white appearance-none cursor-pointer shadow-sm"
                >
                  <option value="">Sort by Price</option>
                  <option value="asc">Low → High</option>
                  <option value="desc">High → Low</option>
                </select>
              </div>
            </div>
          </div>



          {sortedProducts.length === 0 ? (

            <div className="text-center py-16 sm:py-20">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {products.length === 0 ? "No products yet" : "No products found"}
              </h3>
          
              {products.length === 0 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                >
                  <Plus className="w-5 h-5" />
                  Add Your First Product
                </button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {sortedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onEdit={() => handleEdit(product)}
                  onDelete={() => handleDelete(product.id)}
                />
              ))}
            </div>
          )}
        </main>

        {isModalOpen && (
          <ProductFormModal
            onClose={() => {
              setIsModalOpen(false);
              setEditProduct(null);
            }}
            onSave={handleAddProduct}
            editProduct={editProduct}
          />
        )}


      </div>

    </div>
  );
};

export default App;