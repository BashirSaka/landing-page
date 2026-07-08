import cloth4 from "../assets/cloth4.jpg";

function Footer() {
  return (
    <footer
      className="mt-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${cloth4})` }}
    >
      {/* Explore section - sits directly on the image */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white gap-3 pt-20 pb-24 px-6">
        <h2 className="font-display font-bold text-2xl md:text-3xl">
          Explore Our Hoodie World
        </h2>
        <p className="text-md font-semibold text-white/70">
          Style with the Best Hoodie in Your Hands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-2 text-sm">
          <button className="bg-white text-black rounded-full px-4 py-2 font-medium cursor-pointer">
            Our Instagram
          </button>
          <span className="cursor-pointer text-white/90 border-1 p-2 px-4 rounded-4xl">
            boodie@creative.com
          </span>
        </div>
      </div>

      {/* Footer links panel - floats on top of the image, rounded top corners */}
      <div className="relative z-10 bg-white rounded-t-[2.5rem] mx-[20px] px-5 pt-14 pb-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <p className="text-xl font-semibold lowercase mb-4">boodie.</p>
            <p className="text-sm text-neutral-500 max-w-xs mb-4">
              Loyal fan of the style featuring stylish hoodies, elegant plain
              white t-shirts, trendy bucket hats, bold sleeveless hoodies and
              sweet pastel hoodies.
            </p>
            <div className="flex items-center gap-3 text-sm text-neutral-700">
              <span className="cursor-pointer text-white bg-black py-1 px-2 rounded-sm">
                IG
              </span>
              <span className="cursor-pointer text-white bg-black py-1 px-2 rounded-sm">
                X
              </span>
              <span className="cursor-pointer text-white bg-black py-1 px-2 rounded-sm">
                FB
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Shop</h4>
            <ul className="text-sm text-neutral-500 space-y-2">
              <li className="cursor-pointer">Women</li>
              <li className="cursor-pointer">Man</li>
              <li className="cursor-pointer">Kids</li>
              <li className="cursor-pointer">Sale</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="text-sm text-neutral-500 space-y-2">
              <li className="cursor-pointer">Career at Boodie</li>
              <li className="cursor-pointer">About Boodie</li>
              <li className="cursor-pointer">Sustainability</li>
              <li className="cursor-pointer">Investor Relations</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Help</h4>
            <ul className="text-sm text-neutral-500 space-y-2">
              <li className="cursor-pointer">Customer Service</li>
              <li className="cursor-pointer">My Boodie</li>
              <li className="cursor-pointer">Store Location</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="overflow-hidden select-none">
          <p className="font-display text-[3.5rem] sm:text-[5rem] md:text-[10rem] font-semibold leading-none text-neutral-100 tracking-tight -mb-4 md:-mb-10 text-center">
            BOODIE
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
