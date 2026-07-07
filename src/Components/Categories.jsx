import cloth1 from "../assets/cloth1.jpg";
import cloth2 from "../assets/cloth2.jpg";
import cloth3 from "../assets/cloth3.jpg";

const categories = [
  { label: "Shop the Basic T-Shirt", image: cloth1 },
  { label: "Shop the Sleeveless hoodie", image: cloth2 },
  { label: "Shop the Hoodie", image: cloth3 },
];

function Categories() {
  return (
    <section className="px-5">
      <h1 className="font-display mt-16 font-semibold text-5xl mb-10">Categories</h1>

      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.label}
            className="relative rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img
              src={category.image}
              alt={category.label}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="bg-white text-black text-sm font-medium rounded-full px-5 py-2.5 whitespace-nowrap">
                {category.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
