import cloth7 from "../assets/cloth7.jpg";

function Hero() {
  return (
    <section
      className="relative min-h-[500px] flex items-start justify-center text-center text-white pt-24 px-4"
      style={{
        backgroundImage: `url(${cloth7})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/15" />
      <div className="relative z-10 max-w-xs sm:max-w-md md:max-w-lg">
        <h1 className="font-display text-4xl text-bold sm:text-4xl md:text-5xl font-medium leading-tight">
          Warm Styles,
          <br />
          Cool Prices.
        </h1>
        <p className="font-body mt-2 text-sm font-medium">
          With The Best Quality And Meticulous Detail, We Present Hoodies That
          Are Not Only Trendy, But Also Comfortable To Wear Everyday{" "}
        </p>
        <button className="font-body cursor-pointer bg-white text-black font-normal py-2 px-5 rounded-2xl items-center justify-center mt-4 text-xs">
          Hoddie Collection
        </button>
      </div>
    </section>
  );
}
export default Hero;
