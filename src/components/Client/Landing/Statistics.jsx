
const statistics = [
  {
    value: "12.5M",
    unit: "FCFA",
    label: "TOTAL COLLECTÉ",
  },
  {
    value: "320",
    unit: "",
    label: "BÉNÉFICIAIRES",
  },
  {
    value: "145",
    unit: "",
    label: "BÉNÉFICIAIRES",
  },
  {
    value: "8",
    unit: "",
    label: "PARTENAIRES",
  },
];

function Statistics() {
  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">

        {statistics.map((statistic) => (
          <div
            key={statistic.label + statistic.value}
            className="flex min-h-20 flex-col items-center justify-center rounded-lg bg-white px-2 py-3 text-center shadow-sm sm:min-h-28 sm:px-4"
          >

            <p className="text-[15px] font-bold leading-tight text-[#003527] sm:text-2xl">
              {statistic.value}
            </p>

            {statistic.unit && (
              <p className="text-[9px] font-bold text-[#003527] sm:text-xs">
                {statistic.unit}
              </p>
            )}

            <p className="mt-1 text-[6px] font-medium tracking-wide text-gray-400 sm:text-[9px]">
              {statistic.label}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Statistics;