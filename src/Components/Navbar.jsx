// In your Navbar section
import { ShoppingCart, Search, Heart } from "lucide-react";
function Navbar() {
  return (
    <header>
      <nav className="bg-white shadow-sm  flex items-center justify-between p-4">
        <ul className="flex item-center gap-6 cursor-pointer">
          <li className="font-bold text-xl font-display">Boddie.</li>
          <li>
            <select className="font-medium font-body">
              <option value="Categories">Categories</option>
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
              <option value="Kids">Kids</option>
              <option value="Spot">Spot</option>
              <option value="Sale">Sale</option>
            </select>
          </li>
          <li className="font-medium font-body">Woman</li>
          <li className="font-medium font-body">Man</li>
          <li className="font-medium font-body">Kids</li>
          <li className="font-medium font-body">Spot</li>
          <li className="font-medium font-body">Sale</li>
        </ul>
        <div className="flex gap-4 items-center cursor-pointer">
          <Search className="w-5 h-5" />
          <Heart className="w-6 h-6" />
          <ShoppingCart className="w-6 h-6" strokeWidth={2} />
          <button className="rounded-2xl bg-black text-white py-[8px] px-5 cursor-pointer font-body">
            Login/Register
          </button>
        </div>
      </nav>
      <div className="bg-black text-white flex justify-center p-2">
        <p className="font-body">
          Instant Delivery is now available in jarkata area. Free shipping for
          standard delivery.
        </p>
      </div>
    </header>
  );
}
export default Navbar;
