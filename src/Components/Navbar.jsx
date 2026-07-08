import { useState } from "react";
import { ShoppingCart, Search, Heart, Menu, X } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header>
      <nav className="bg-white shadow-sm flex items-center justify-between p-4 relative">
        <ul
          className={`items-center gap-4 cursor-pointer ${
            searchOpen ? "hidden md:flex" : "flex"
          }`}
        >
          <li className="font-bold text-xl font-display mr-3">Boddie.</li>
          <li>
            <select className="font-semibold font-body text-xl mr-[14px] ml-[-14px]">
              <option value="Categories">Categories</option>
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
              <option value="Kids">Kids</option>
              <option value="Spot">Spot</option>
              <option value="Sale">Sale</option>
            </select>
          </li>
          <li className="font-medium font-body hidden md:block">Woman</li>
          <li className="font-medium font-body hidden md:block">Man</li>
          <li className="font-medium font-body hidden md:block">Kids</li>
          <li className="font-medium font-body hidden md:block">Spot</li>
          <li className="font-medium font-body hidden md:block">Sale</li>
        </ul>

        <div className="flex gap-3 items-center px-4 flex-1 justify-end md:flex-initial">
          {searchOpen ? (
            <div className="flex items-center gap-2 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                autoFocus
                className="border-b border-black outline-none text-sm font-body px-1 py-1 w-full md:w-48"
              />
              <X
                className="w-5 h-5 cursor-pointer shrink-0"
                onClick={() => setSearchOpen(false)}
              />
            </div>
          ) : (
            <Search
              className="w-5 h-5 cursor-pointer"
              onClick={() => setSearchOpen(true)}
            />
          )}

          {/* Desktop-only icons/button */}
          <Heart className="w-6 h-6 hidden md:hidden" />
          <ShoppingCart
            className="w-6 h-6 hidden md:block cursor-pointer"
            strokeWidth={2}
          />
          <button className="hidden md:inline-block rounded-2xl bg-black text-white py-[8px] px-5 cursor-pointer font-body">
            Login/Register
          </button>

          {/* Hamburger - mobile only, hidden while search is open */}
          {!searchOpen && (
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          )}
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden z-20">
            <div className="flex items-center gap-3">
              <ShoppingCart className="w-6 h-6" strokeWidth={2} />
              <span className="font-body">Cart</span>
            </div>
            <button className="rounded-2xl bg-black text-white py-2 px-6 font-body">
              Login/Register
            </button>
          </div>
        )}
      </nav>

      <div className="bg-black text-white flex justify-center p-2 text-center">
        <p className="font-body text-sm">
          Instant Delivery is now available in jarkata area. Free shipping for
          standard delivery.
        </p>
      </div>
    </header>
  );
}
export default Navbar;
