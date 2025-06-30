import { useCart } from '../Context/CartContext';
import FetchProducts from '../Hooks/useFetchProducts';



function ProductsPage() {

  const {products} = FetchProducts();
  const { addToCart } = useCart();


  return (
    <div
      className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">

        {/* Main Content */}
        <div className="px-6 md:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* Heading */}
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <div className="flex min-w-72 flex-col gap-3">
                <h1 className="text-[#121516] text-[32px] font-bold leading-tight tracking-[-0.015em]">
                  Our Products
                </h1>
                <p className="text-[#6a7881] text-sm font-normal leading-normal">
                  Discover AquaSwift’s range of water cans, designed for convenience, durability, and quality to meet all your hydration needs.
                </p>
              </div>
            </div>

            {/* Products Grid */}
            <section className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {products.map((product) => (
                <article
                  key={product._id}
                  className="flex flex-col gap-3 rounded-lg border border-[#dde1e3] bg-white p-4"
                >
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
                    style={{ backgroundImage: `url(${product.image})` }}
                    aria-label={`${product.name} image`}
                  />
                  <div className="flex flex-col gap-1">
                    <p className="text-[#121516] text-base font-bold leading-tight">
                      {product.name}
                    </p>
                    <p className="text-[#6a7881] text-sm font-normal leading-normal">
                      {product.description}
                    </p>
                    <p className="text-[#121516] text-base font-semibold leading-normal">
                      ₹{product.price}
                    </p>
                    <button
                      onClick={() => addToCart(product)}
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c5dceb] text-[#121516] text-sm font-bold leading-normal tracking-[0.015em] mt-2 hover:bg-blue-600 hover:text-white transition"
                      aria-label={`Add ${product.name} to cart`}
                    >
                      <span className="truncate">Add to Cart</span>
                    </button>
                  </div>
                </article>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;