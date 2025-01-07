import slider from'../../assets/slider.webp';
import Products from './Products';
const Home = () => {
    return (
        <main>
            <div className="flex justify-center items-center">
                <div className="relative w-full mt-4 mx-4">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                        <i className="fas fa-search"></i>
                    </span>
                    <input
                        type="search"
                        placeholder="Search here..."
                        className="bg-gray-200 p-2 pl-10 w-full rounded-md"
                    />
                </div>
            </div>
            <div className='flex justify-center items-center w-full mt-4'>
                <img src={slider} alt="slider" className='w-[80%] rounded-md' />
            </div>
            <Products />
            <div>
                <p className='flex justify-center items-center mt-10 opacity-50'>©2024 SAMA APP</p>
            </div>
        </main>
    );
};
export default Home;