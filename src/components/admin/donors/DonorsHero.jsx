
function DonorHero({ title, description }) {
  return (
    <header className="mb-6">
      <h1 className="font-serif text-3xl font-semibold leading-tight text-[#006B5D] md:text-4xl">
        {title}
      </h1>

      <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">
        {description}
      </p>
    </header>
  );
}

export default DonorHero;
