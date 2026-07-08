import { Star } from "lucide-react";

// 1. Import your product images
import cloth1 from "../assets/cloth1.jpg";
import cloth2 from "../assets/cloth2.jpg";
import cloth3 from "../assets/cloth3.jpg";
import cloth4 from "../assets/cloth4.jpg";
import cloth9 from "../assets/cloth9.jpg";

// 2. Product data
const products = [
  {
    name: "Zero Gravity Oblong Muscle Hoodie",
    price: 150,
    rating: 4,
    reviews: 120,
    image: cloth1,
    colors: ["#6b7f7c", "#b5544a", "#d9a05b"],
  },
  {
    name: "Kanvas Bersih Ultimate Teelolet",
    price: 80,
    rating: 4,
    reviews: 320,
    image: cloth2,
    colors: ["#e5e1d8", "#3a3a3a"],
  },
  {
    name: "Nebula Explorer Aurora Bucket",
    price: 65,
    rating: 4,
    reviews: 481,
    image: cloth3,
    colors: ["#3a3a3a", "#c9c2b4", "#9c9c9c"],
  },
  {
    name: "Cotton Candy Dreams Hoodie",
    price: 250,
    rating: 4,
    reviews: 328,
    image: cloth4,
    colors: ["#9cc6d9", "#8fbf8f", "#c9a6d9", "#d98f8f"],
  },
];

function Features() {
  return (
    <section className="">
      <h3 className="font-display pl-5 mt-16 font-semibold text-5xl">
        Featured Products
      </h3>

      {/* Filter tabs */}
      <ul className="font-body pl-5 flex gap-4 mt-14 mb-7 font-medium overflow-x-auto whitespace-nowrap">
        <li className="bg-black border-1 px-4 py-1 rounded-2xl text-white cursor-pointer">
          All
        </li>
        <li
          className=" 
        border-1 px-4 py-1 rounded-2xl text-black cursor-pointer"
        >
          Shoe
        </li>
        <li className="border-1 px-4 py-1 rounded-2xl text-black cursor-pointer">
          Hoddie
        </li>
        <li className="border-1 px-4 py-1 rounded-2xl text-black cursor-pointer">
          T-Shirt
        </li>
        <li className="border-1 px-4 py-1 rounded-2xl text-black cursor-pointer">
          Coach Jacket
        </li>
        <li className="border-1 px-4 py-1 rounded-2xl text-black cursor-pointer">
          Pants
        </li>
      </ul>

      {/* 3. Product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 px-3 md:px-5 cursor-pointer">
        {products.map((product) => (
          <div key={product.name}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover rounded-2xl mb-3"
            />
            <div className="flex items-center gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  className={
                    i < product.rating
                      ? "fill-black text-black"
                      : "text-neutral-300"
                  }
                />
              ))}
              <span className="text-xs text-neutral-500 ml-1">
                ({product.reviews})
              </span>
            </div>
            <p className="font-medium text-sm">{product.name}</p>
            <p className="font-semibold text-sm mt-1">${product.price}</p>
            <div className="flex gap-1.5 mt-2">
              {product.colors.map((color, i) => (
                <span
                  key={i}
                  className="w-3.5 h-3.5 rounded-full border border-neutral-200"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* View all button */}
      <div className="flex justify-center mt-15 mb-15 pr-5 cursor-pointer">
        <button className="bg-black text-white text-sm font-medium rounded-2xl px-8 py-2.5 cursor-pointer">
          View all Products
        </button>
      </div>
      {/*  */}

      <div
        className="relative min-h-[500px] flex items-start text-white pt-24 pl-0"
        style={{
          backgroundImage: `url(${cloth9})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="pl-6 md:pl-10 pr-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl mt-10 leading-tight">
            Style and Coolness <br className="hidden md:block" />
            in One Hand
          </h2>
          <p className="mt-5 mb-5 text-sm max-w-xs md:max-w-none">
            Discover Hoodies That Are a Dazzling Fashion Statement, Giving You
            Irreplaceable Style.
          </p>
          <button className="cursor-pointer text-black bg-white py-2 px-4 rounded-4xl font-bold">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Features;
