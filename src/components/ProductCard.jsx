import { Edit2, Trash2, Tag, DollarSign, Package } from "lucide-react";
import React from "react";


const ProductCard =({ product, onEdit, onDelete, darkMode }) => {


  return (


    <div className={`group rounded-2xl shadow-md hover:shadow-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      darkMode 
        ? 'bg-slate-800 border-slate-700 shadow-slate-900/50' 
        : 'bg-white border-gray-100'
    }`}>

      <div className={`relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br ${
        darkMode ? 'from-slate-700 to-slate-800' : 'from-gray-50 to-gray-100'
      }`}>

        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3 flex gap-2 opacity-100                   sm:opacity-0                  sm:group-hover:opacity-100    
  transition-all duration-300 transform
  translate-y-0                 
  sm:translate-y-2            
  sm:group-hover:translate-y-0  
">

          <button
            onClick={onEdit}
            className={`p-2.5 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-200 border border-white/20 ${
              darkMode
                ? 'bg-slate-900/95 hover:bg-blue-900/50'
                : 'bg-white/95 hover:bg-blue-50'
            }`}
            aria-label="Edit product"
          >
            <Edit2 className={`w-4 h-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </button>
          <button
            onClick={onDelete}
            className={`p-2.5 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-200 border border-white/20 ${
              darkMode
                ? 'bg-slate-900/95 hover:bg-red-900/50'
                : 'bg-white/95 hover:bg-red-50'
            }`}
            aria-label="Delete product"
          >
            <Trash2 className={`w-4 h-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`} />
          </button>
        </div>

        <div className="absolute bottom-3 left-3">
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold backdrop-blur-sm ${
            product.inStock 
              ? "bg-green-500/90 text-white" 
              : "bg-red-500/90 text-white"
          }`}>
            <Package className="w-3 h-3" />
            {product.inStock ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <h3 className={`text-lg sm:text-xl font-bold mb-3 line-clamp-2 min-h-[3.5rem] ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <DollarSign className={`w-4 h-4 ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            <span className={`text-2xl sm:text-3xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
              {product.price}
            </span>
          </div>

          <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${
            darkMode ? 'bg-blue-900/30' : 'bg-blue-50'
          }`}>
            <Tag className={`w-3.5 h-3.5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-xs font-semibold uppercase tracking-wide truncate max-w-[80px] ${
              darkMode ? 'text-blue-300' : 'text-blue-700'
            }`}>
              {product.category}
            </span>
          </div>


          
        </div>

      </div>



    </div>
  );


};

export default ProductCard