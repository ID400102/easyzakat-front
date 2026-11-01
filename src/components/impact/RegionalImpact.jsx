
const regions = [
  { name: "Dakar & Banlieue", keys: ["dakar", "dakar & banlieue"] },
  { name: "Thiès", keys: ["thiès", "thies"] },
  { name: "Saint-Louis", keys: ["saint-louis", "saint louis"] },
  { name: "Ziguinchor", keys: ["ziguinchor"] },
  { name: "Autres régions", keys: ["autres régions", "autres regions", "autres"] },
];

const normalize = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function RegionalImpact({
  stats,
  loading = false,
}) {
  const distribution =
    stats?.regionalDistribution ||
    stats?.distributionByRegion ||
    stats?.regions ||
    stats?.regionalImpact ||
    [];

  const getPercentage = (region) => {
    if (!Array.isArray(distribution)) return 0;

    const item = distribution.find((entry) => {
      const name = normalize(
        entry.region || entry.name || entry.label || entry._id || ""
      );

      return region.keys.some((key) => normalize(key) === name);
    });

    if (!item) return 0;

    if (item.percentage != null) {
      return Math.min(100, Math.max(0, Number(item.percentage) || 0));
    }

    const total = distribution.reduce(
      (sum, entry) =>
        sum + Number(entry.amount ?? entry.totalAmount ?? 0),
      0
    );

    const amount = Number(item.amount ?? item.totalAmount ?? 0);

    return total > 0 ? (amount / total) * 100 : 0;
  };

  return (
    <div className="rounded-2xl bg-[#0F3D2E] p-5 shadow-sm text-[#80BEA6]">
      <h2 className="font-bold text-[#80BEA6]">
        Impact Régional
      </h2>

      <div className="mt-6 space-y-4">
        {loading ? (
          <p className="text-sm text-[#80BEA6]">
            Chargement des données...
          </p>
        ) : (
          regions.map((region) => {
            const percentage = getPercentage(region);

            return (
              <div
                key={region.name}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-[#80BEA6]">
                  {region.name}
                </span>

                <span className="rounded-full bg-[#B9F2D1] px-3 py-1 text-xs font-bold text-[#0F3D2E]">
                  {percentage.toFixed(percentage % 1 ? 1 : 0)}%
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
