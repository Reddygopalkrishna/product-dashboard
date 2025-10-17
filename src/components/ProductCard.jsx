import { Edit2, Trash2, Tag, DollarSign, Package } from "lucide-react";
import React from "react";


const ProductCard =({ product, onEdit, onDelete }) =>{

  return (

    <div className="group bg-white dark:bg-slate-800 rounded-2xl shadow-md hover:shadow-2xl dark:shadow-slate-900/50 border border-gray-100 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-800">

        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={onEdit}
            className="p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-all duration-200 border border-white/20"
            aria-label="Edit product"
          >
            <Edit2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </button>

          <button
            onClick={onDelete}
            className="p-2.5 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-xl shadow-lg hover:bg-red-50 dark:hover:bg-red-900/50 transition-all duration-200 border border-white/20"
            aria-label="Delete product"
          >
            <Trash2 className="w-4 h-4 text-red-600 dark:text-red-400" />
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
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <DollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">
              {product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <Tag className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide truncate max-w-[80px]">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;