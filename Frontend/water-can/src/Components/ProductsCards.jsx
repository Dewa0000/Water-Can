import { useCart } from "../Context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-md p-4 rounded-xl text-center">
      <img src={product.image} alt={product.name} className="w-24 mx-auto mb-2" />
      <h3 className="font-bold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
