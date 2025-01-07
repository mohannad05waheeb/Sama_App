import { useNavigate } from "react-router-dom";
const products = [
  {
    id: 1,
    title: "قسم الخطوط",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1807-1722162635.webp",
    link: "/lines",
  },
  {
    id: 2,
    title: "قسم الرصيد والباقة",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1807-1716452917.webp",
    link: "/balance",
  },
  {
    id: 3,
    title: "قسم الألعاب",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1710724381.webp",
    link: "/geming",
  },
  {
    id: 4,
    title: "قسم التطبيقات",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1710723875.webp",
    link: "/apps",
  },
  {
    id: 5,
    title: "قسم السوشيال ميديا",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1807-1725702951.webp",
    link: "/social",
  },
  {
    id: 6,
    title: "قسم البطاقات",
    subtitle: "FLASH VISION",
    image: "https://api.flashvision.co/images/category/1710724653.webp",
    link: "/cards",
  },
];
const Products = () => {
  const navigate = useNavigate();
  return (
    <main className="flex flex-wrap justify-center gap-4 mt-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-40 bg-[#009688] text-white p-2 rounded-lg text-center hover:scale-110 duration-300"
          onClick={() => navigate(product.link)}  
          style={{ cursor: "pointer" }}
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-40 object-cover rounded-md mb-2"
          />
          <h3 className="text-lg font-bold">{product.title}</h3>
          <p className="text-sm">{product.subtitle}</p>
        </div>
      ))}
    </main>
  );
};
export default Products;