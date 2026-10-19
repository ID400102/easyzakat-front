const regions = [
  ["Dakar & Banlieue", 55],
  ["Thiès", 15],
  ["Saint-Louis", 12],
  ["Ziguinchor", 10],
  ["Autres régions", 8],
];

export default function RegionalImpact() {
  return (
    <div className="rounded-2xl bg-[#0F3D2E] p-5 shadow-sm text-[#80BEA6]">

      <h2 className="font-bold text-[#80BEA6]">
        Impact Régional
      </h2>
 

      <div className="mt-6 space-y-4">
        {regions.map(([name, percentage]) => (
          <div
            key={name}
            className="flex items-center justify-between"
          >
            <span className="text-sm text-{80BEA6}">
              {name}
            </span>

            <span className="rounded-full bg-[#B9F2D1] px-3 py-1 text-xs font-bold text-[#0F3D2E]">
              {percentage}%
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}