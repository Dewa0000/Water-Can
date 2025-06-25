import ProductCard from "../Components/ProductsCards";

const products = [
  {
    id: 1,
    name: "20L Water Can",
    price: 40,
    image: "https://cdn-icons-png.flaticon.com/512/809/809957.png",
  },
  {
    id: 2,
    name: "Mineral Water Can",
    price: 60,
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081642.png",
  },
];

function Products() {
  return (
    <section className="px-6 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-800">
        Choose Your Water Can
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}

export default Products;
