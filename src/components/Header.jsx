import React, { useState } from "react";
import { Plus, Moon, Sun, Edit2, Trash2, Tag, DollarSign, Package, Search, Filter, SortAsc } from "lucide-react";

const Header = ({ onAdd, darkMode, setDarkMode }) => {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur-lg border-b shadow-sm ${
      darkMode 
        ? 'bg-slate-900/80 border-slate-800' 
        : 'bg-white/80 border-gray-200'
    }`}>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16 sm:h-20">

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">

              <Package className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl sm:text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent ${
                darkMode 
                  ? 'from-blue-400 to-purple-400' 
                  : 'from-blue-600 to-purple-600'
              }`}>
                Product Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onAdd}
              className={`flex items-center gap-2 font-medium px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 ${
                darkMode
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                  : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white'
              }`}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Add Product</span>
              <span className="sm:hidden">Add</span>
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 sm:p-3 rounded-xl transition-all duration-200 border ${
                darkMode
                  ? 'bg-slate-800 hover:bg-slate-700 border-slate-700'
                  : 'bg-gray-100 hover:bg-gray-200 border-gray-200'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>


          </div>
        </div>

      </div>

    </header>
    
  );
};

export default Header
