import React, { useState, useEffect } from "react";

const ProductFormModal = ({ onClose, onSave, editProduct, darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    inStock: true,
    image: "",
  });

  const [uploadedImage, setUploadedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

useEffect(() => {
    if (editProduct) {
    const isBase64Image = typeof editProduct.image === "string"
      && editProduct.image.startsWith("data:image");
    setFormData({
      name: editProduct.name || "",
      category: editProduct.category || "",
      price: editProduct.price || "",
      inStock: editProduct.inStock ?? true,
      image: isBase64Image ? "" : editProduct.image

    });

    if (editProduct.image instanceof File) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result);
      reader.readAsDataURL(editProduct.image);
    } else {
      setImagePreview(isBase64Image ? editProduct.image : editProduct.image || "");
    }
  }
}, [editProduct]);
;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUploadedImage(file);
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: "" });
      };
      reader.readAsDataURL(file);
    }
  };

const handleURLChange = (e) => {
  const url = e.target.value;
  setFormData({ ...formData, image: url });
  setUploadedImage(null);

  const isValidImageURL = /^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/i.test(url);
  //  setImagePreview(url)
  if (isValidImageURL) {
    setImagePreview(url);
   
  } else {
    setImagePreview("");
  }
};


  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...formData, image: imagePreview || formData.image }); //uploadedImage /imagePreview

    setFormData({
      name: "",
      category: "",
      price: "",
      inStock: true,
      image: "",
    });
    setUploadedImage(null);
    setImagePreview("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div
          className={`rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto border ${
            darkMode
              ? "bg-slate-800 border-slate-700"
              : "bg-white border-gray-200"
          }`}
        >
          <div
            className={`sticky top-0 border-b px-6 py-4 rounded-t-2xl ${
              darkMode
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-200"
            }`}
          >
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              {editProduct ? "Edit Product" : "Add New Product"}
            </h2>
            <p
              className={`text-sm mt-1 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {editProduct
                ? "Update product details"
                : "Fill in the product information"}
            </p>
          </div>

          <div className="p-6 space-y-5">
          
            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Product Name
              </label>
              <input
                type="text"
                placeholder="Enter product name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                  darkMode
                    ? "bg-slate-900 border-slate-600 text-white focus:ring-blue-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                }`}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Category
              </label>
              <input
                type="text"
                placeholder="e.g., Electronics, Clothing"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                  darkMode
                    ? "bg-slate-900 border-slate-600 text-white focus:ring-blue-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                }`}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="0.00"
                value={formData.price}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: parseFloat(e.target.value),
                  })
                }
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 ${
                  darkMode
                    ? "bg-slate-900 border-slate-600 text-white focus:ring-blue-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                }`}
                required
              />
            </div>

            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Image URL
              </label>
              <input
                type="url"
                pattern="https?://.*"
                title="Please enter a valid image URL starting with http or https"

                placeholder="https://example.com/image.jpg"
                value={formData.image}
                onChange={handleURLChange}
                disabled={uploadedImage !== null}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-slate-900 border-slate-600 text-white focus:ring-blue-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                }`}
                required
              />
            </div>

         
            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Or Upload Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={formData.image !== ""}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:border-transparent transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
                  darkMode
                    ? "bg-slate-900 border-slate-600 text-white focus:ring-blue-400"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-blue-500"
                }`}
              />
            </div>

    
            {imagePreview && (
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className={`w-full h-48 object-cover rounded-xl border-2 ${
                    darkMode ? "border-slate-600" : "border-gray-200"
                  }`}
                />
                <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                  Preview
                </div>
              </div>
            )}

            {/* In Stock Toggle */}
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={formData.inStock}
                  onChange={(e) =>
                    setFormData({ ...formData, inStock: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div
                  className={`w-11 h-6 rounded-full transition-all duration-200 ${
                    formData.inStock
                      ? "bg-green-500"
                      : darkMode
                      ? "bg-slate-600"
                      : "bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${
                    formData.inStock ? "translate-x-5" : ""
                  }`}
                ></div>
              </div>
              <span
                className={`text-sm font-semibold ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Product in stock
              </span>
            </label>

            {/* Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className={`flex-1 px-5 py-3 font-semibold rounded-xl transition-all duration-200 ${
                  darkMode
                    ? "bg-slate-700 hover:bg-slate-600 text-gray-300"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-5 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {editProduct ? "Update" : "Add Product"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ProductFormModal;