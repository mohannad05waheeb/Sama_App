import { Link } from 'react-router-dom';
const LinesSection = () => {
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
  return (
    <main>
      <h1 className="flex justify-center text-[#009688] font-bold mt-2 text-2xl">Lines Section</h1>
      <div className="relative w-full mt-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <i className="fas fa-search"></i>
        </span>
        <input
          type="search"
          placeholder="Search here..."
          className="bg-gray-200 p-2 pl-10 w-full rounded-md"
        />
      </div>   
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-6">
        {products.map((product) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            <div
              className="flex flex-col items-center bg-[#009688] p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out text-white mx-2"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 sm:w-40 sm:h-40 object-cover mb-2 rounded-md"
              />
              <h3 className="text-center font-semibold text-sm sm:text-base">{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};  
export default LinesSection;