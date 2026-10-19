function ImpactReport() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-xl border-l-[3px] border-[#cca72f] bg-[#f7f1df] px-4 py-4 sm:px-5 sm:py-5 md:mt-10">

            <div className="flex items-start justify-between">

              <span className="rounded-full bg-[#8f7000] px-2.5 py-1 text-[8px] font-bold uppercase tracking-wide text-white sm:text-[9px]">
                Dernier impact
              </span>

            </div>


            <h2 className="mt-2 text-lg font-bold text-[#6e5700] sm:text-xl">
              Rapport Mars 2024
            </h2>


            <p className="mt-2 max-w-2xl text-[10px] leading-[1.6] text-[#75683e] sm:text-xs">
              Grâce à vos dons, 1.200 orphelins ont reçu des kits scolaires
              complets ce mois-ci.
            </p>


            <button
              type="button"
              className="mt-4 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#ddd6c2] bg-white px-4 text-[10px] font-bold text-[#806500] transition hover:bg-[#fffdf7] sm:w-auto sm:px-6"
            >
              Lire le rapport complet
            </button>

          </section> 
  );
}

export default ImpactReport;