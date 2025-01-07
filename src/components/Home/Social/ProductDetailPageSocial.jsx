import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
const ProductDetailPageSocial = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [favourites, setFavourites] = useState(() => {
    const storedFavourites = localStorage.getItem('favourites');
    return storedFavourites ? JSON.parse(storedFavourites) : [];
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputValue, setInputValue] = useState('');  
  const products = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: `https://via.placeholder.com/200?text=Product+${index + 1}`,
    details: [
      { id: 1, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+1`, price: `$${(index + 1) * 10}` },
      { id: 2, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+2`, price: `$${(index + 1) * 12}` },
      { id: 3, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+3`, price: `$${(index + 1) * 15}` },
    ],
  }));
  const product = products.find((product) => product.id === parseInt(productId, 10));
  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);
  const toggleFavourite = (detail) => {
    const isFavourite = favourites.some((fav) => fav.id === detail.id);
    if (isFavourite) {  
      const updatedFavourites = favourites.filter((fav) => fav.id !== detail.id);
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    } else {    
      const newFavourite = { ...detail, name: product.name };
      const updatedFavourites = [...favourites, newFavourite];
      setFavourites(updatedFavourites);
      localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
    }
  };
  const closeModal = () => {
    setSelectedProduct(null);  
  };  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }; 
  const isInputEmpty = inputValue.trim() === '';
  return (
    <motion.main
      className="p-4 bg-gradient-to-r from-blue-200 via-green-200 to-teal-300 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl font-bold text-center">{product.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {product.details.map((detail) => (
          <motion.div
            key={detail.id}
            className="flex flex-col items-center bg-[#009688] p-2 rounded-lg shadow-md text-white cursor-pointer"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProduct(detail)}
          >
            <img
              src={detail.image}
              alt={`${product.name} ${detail.id}`}
              className="w-20 h-20 object-cover mb-2 rounded-md"
            />
            <h3 className="font-semibold">{`${product.name} - Detail ${detail.id}`}</h3>
            <p>{detail.price}</p>
          </motion.div>
        ))}
      </div> 
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeModal}>
              ✖
            </button>
            <h2 className="text-xl font-bold mb-2">{`${product.name} - Detail ${selectedProduct.id}`}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-40 h-40 object-cover mb-4 mx-auto"
            />
            <p className="text-gray-700 mb-4">USD: {selectedProduct.price}</p>
            <h2 className='font-bold text-[#009688]'>
              Description: 
            </h2> 
            <h1 className='font-bold text-red-600 max-w-60'>
              Recharging 1 To 15 minutes to completed, please wait  
            </h1>
            <h3 className='mt-4'>
              Please enter the ID correctly:
            </h3>
            <input
              type="number"
              className="outline-none mt-2 p-2 border border-[#009688] rounded w-full"
              value={inputValue}
              onChange={handleInputChange}  
            />
            <button
              className={`mt-2 p-3 rounded-full ${favourites.some((fav) => fav.id === selectedProduct.id)
                ? 'bg-red-500 text-white'
                : 'bg-white text-red-500 border border-red-500'}`}
              onClick={() => {
                toggleFavourite(selectedProduct);
              }}
            >
              ♥
            </button>
            <button
              className="ml-4 mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              disabled={isInputEmpty}  
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </motion.main>
  );
};
export default ProductDetailPageSocial;