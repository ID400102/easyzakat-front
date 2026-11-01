
import { Info } from "lucide-react";

const categories = [
  {
    label: "Familles nécessiteuses",
    keys: ["familles necessiteuses", "famille", "familles", "family"],
    color: "bg-[#151C27]",
  },
  {
    label: "Santé & Soins médicaux",
    keys: ["sante", "sante & soins medicaux", "health", "medical"],
    color: "bg-[#CCA72F]",
  },
  {
    label: "Éducation & Bourses",
    keys: ["education", "bourses", "education & scholarships"],
    color: "bg-[#2B6954]",
  },
  {
    label: "Projets d'Autonomisation",
    keys: ["autonomisation", "projets d'autonomisation", "empowerment"],
    color: "bg-[#151C27]",
  },
];

const normalize = (value = "") =>
  String(value)
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function CategoryDistribution({
  stats,
  loading = false,
}) {
  const distribution =
    stats?.categoryDistribution ||
    stats?.distributionByCategory ||
    stats?.categories ||
    stats?.distribution ||
    [];

  const getPercentage = (category) => {
    if (!Array.isArray(distribution)) return 0;

    const item = distribution.find((entry) => {
      const name = normalize(
        entry.category || entry.name || entry.label || entry._id || ""
      );

      return category.keys.some((key) => normalize(key) === name);
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
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#0F3D2E]">
          Distribution par catégorie
        </h2>

        <Info size={18} className="text-gray-400" />
      </div>

      <div className="mt-6 space-y-5">
        {loading ? (
          <p className="text-sm text-gray-500">
            Chargement des données...
          </p>
        ) : (
          categories.map((category) => {
            const percentage = getPercentage(category);

            return (
              <div key={category.label}>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {category.label}
                  </span>

                  <span className="font-bold text-[#0F3D2E]">
                    {percentage.toFixed(percentage % 1 ? 1 : 0)}%
                  </span>
                </div>

                <div className="mt-2 h-2 rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full ${category.color}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            )
          })
        )}
      </div>
    </div>
  );
}
