import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
const ProductDetailBalance = () => {
  const { productId } = useParams();
  const products = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    name: `Product ${index + 1}`,
    image: `https://via.placeholder.com/200?text=Product+${index + 1}`,
    details: [
      { id: 1, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+1`, price: `$${(index + 1) * 10}` },
      { id: 2, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+2`, price: `$${(index + 1) * 12}` },
      { id: 3, image: `https://via.placeholder.com/200?text=Product+${index + 1}+Image+3`, price: `$${(index + 1) * 15}` }
    ]
  }));
  const product = products.find((product) => product.id === parseInt(productId));
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <motion.main 
      className="p-4 bg-gradient-to-r from-blue-200 via-green-200 to-teal-300 min-h-screen"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1 }}
    >
      <h1 className="text-2xl font-bold text-center">{product.name}</h1>
      <input
        type="search"
        placeholder="Search here..."
        className="bg-gray-200 p-2 pl-10 w-full rounded-md mt-4"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {product.details.map((detail) => (
          <motion.div 
            key={detail.id} 
            className="flex flex-col items-center bg-[#009688] p-2 rounded-lg shadow-md text-white"
            initial={{ scale: 0.8 }} 
            animate={{ scale: 1 }} 
            transition={{ duration: 0.5 }}
          >
            <Link to={`/product/${product.id}/detail/${detail.id}`}>
              <img
                src={detail.image}
                alt={`${product.name} ${detail.id}`}
                className="w-20 h-20 object-cover mb-2 rounded-md"
              />
            </Link>
            <h3 className="font-semibold">{product.name}</h3>
            <p>{detail.price}</p>
          </motion.div>
        ))}
      </div>
    </motion.main>
  );
};
export default ProductDetailBalance;