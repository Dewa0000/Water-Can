import { useCart } from '../Context/CartContext';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const products = [
  {
    id: 1,
    name: '20 Litre Water Can',
    price: 40,
    description: 'Ideal for large families or offices. Durable and easy to handle.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByFRgHrDWZa9jTaX0mL32eI-tViukrW392rQk_coZjIlYI04nB2apwL3nn93gkIUAbzceNU0Abyo5vp4XDmKyIEdHkwfy04DFCigyzxYvmIr0GTtp5yw4BvP83HyPpbGXFCq3Vja7Z7m-FenCsa6G_XrcleqtAgqOSSIc9KJTNkClqbLFRjXqm-KGyjwS_B7DhCrKmLx2GrKvha-xLyrn332XkHlzTkpQkjtsobOkmgsXuGq8R4ET0oU_nLC_P9QUC1iEm5_Us76w',
  },
  {
    id: 2,
    name: '10 Litre Water Can',
    price: 30,
    description: 'Perfect for medium-sized households. Lightweight and convenient.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBeLfEwirZC9uD5vcNGFmGeGyw_fbfBO4BIdeQOzkBN7QH6kwvsGJ3YEaUGTcFPmvLISjzsbh0jAgsFuqqmzDbWkCUFdY_pXBBN3bjRG2OEB2e6xwb8yJyDxScwavO-OOQkwfQyjmQosBM7_Ljq0_pfS8YTXAq6bXYrF7BHmhuH7gdoLFLczaJXp7V7cGs4abF14nardBnSy-FG7Xn_OtnY5Tj3SWKHu6dqtVp0laBC-5GM7_jCzhF7h4FhJ2E3LL8K7pFOUdwf2Mw',
  },
  {
    id: 3,
    name: '5 Litre Water Can',
    price: 20,
    description: 'Great for small families or personal use. Compact and portable.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvKoBo3LC-rSt1uRF4pAY9phdGYX2EuEcMT8tBS7o-ap89WFQC9rC3YnlsKidg_oKOGjH5zp0Ooi_xJjyb32jsvCcsDHtuYVKpmp_U0VqgypZckhNJWw0FHiKw_ckz7TpJJcbdV3GACRJKUuAgjFounWLVFvG2exavLnztMUWJa1F32UfT9MzL1rY_soyPnxIAnornJqyU8S1UP7fMyhyeT5bVoja_rJv49KAvcclrT0-N1qL7xkDmEbaATiP3-HdlBqUEj71V1m0',
  },
  {
    id: 4,
    name: 'Water Can with Dispenser',
    price: 70,
    description: 'Includes a convenient dispenser for easy access to water.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBpdlM4Rb6gynZYM7uvcwN70r0sVp7NM-sKe40QvsjSSyeJfqQI3j6zo3Fijid2hFjOZO813SDuwIjO0CZwkKxVDCQCtpstGDlHAwUxFRj_oh6O4o_TuOW258FDhzlZgJcsu5swiAJSmJGoqNEt-z17Pv5HgSp1MOySV7hsHwyI2lfRL4iwq1r3ulMqdUwpHgXc0bGb5t1jRtipVUnvfwO-aD0HPRZjfjY3rxlnROgCrHzYT7mNcRsAdNTFQvP6MHVYRmdsYASVx5I',
  },
  {
    id: 5,
    name: 'Stainless Steel Water Can',
    price: 90,
    description: 'Made from high-quality stainless steel for enhanced durability.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCeaUXbA-NFdBY3d9mdqHdNwtVlr2CfMVP5u23V5Tji35VRKs7rOQrPHOMWiOudPfYRRbctFXdM0u2qao5HL633xrr7EPV4LrnRQxtp41Z1fJDJtwUka494uwdnD5cLWcG6Z_es42QXwNjzT6R0PBHNhhu7S3B6_95vNAJwKW3YPfdx0_cUNVFywmSbm4M_5oPThPcRT_j4VYEH1Dw6Cz50cHROUNH_P-D_kCoktQPBswA8kyDHZVpREnRF8RBwYFNR7zKeY-10KFw',
  },
  {
    id: 6,
    name: 'Premium Plastic Water Can',
    price: 35,
    description: 'Durable BPA-free plastic with ergonomic design for daily use.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxibSf4lQjTnrhn3ww9NP6AnLVE4Meg6R84W1kgBP0-axP0g3fINr_mADoTqy91Plpg9gKikBMoTyiDkwzIeF1ru2GMr0lQv_fAE3ex22DeCtB3ls_ARAtpyp1-znREQ_XQUsoiT1wDmoRtPtTPHZwILIuWMDSP41R_i00LMnJQ2d6MmZVjT7Q_fTRrkSnnlndjg_sM-RJiQogy3LqIibdhP06GDpuKKWJEo1FvE3UFCz6I_T72rdkXzhqNzKkG780lkWMEl8P0w',
  },
];

function ProductsPage() {
  const { cart, setCart } = useCart();

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

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
                  key={product.id}
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