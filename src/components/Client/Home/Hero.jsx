function Hero() {

  return (
    <section className="rounded-3xl bg-[#075c43] px-6 py-6 text-white sm:px-10 ">
      <div className="max-w-3xl lg:flex flex-col gap-y-2">
        <p className="mb-1 text-sm font-semibold text-emerald-400 md:text-xl lg:text-3xl">
          Total collecté ce mois(FCFA)</p>
        <p className="mb-3 text-2xl font-semibold text-emerald-300 md:text-3xl lg:text-4xl">124.500.000 CFA</p>
        <p className="mb-3 text-sm font-semibold text-emerald-200 md:text-xl lg:text-2xl">+12% vs mois dernier</p>
      </div>
    </section>
  );
}

export default Hero;