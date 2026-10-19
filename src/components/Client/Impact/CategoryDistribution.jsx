import { Info } from "lucide-react";

const categories = [
  ["Familles nécessiteuses", 45, "bg-[#151C27]"],
  ["Santé & Soins médicaux", 25, "bg-[#CCA72F]"],
  ["Éducation & Bourses", 20, "bg-[#2B6954]"],
  ["Projets d'Autonomisation", 10, "bg-[#151C27]"],
];

export default function CategoryDistribution() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">

      <div className="flex items-center justify-between">
        <h2 className="font-bold text-[#0F3D2E]">
          Distribution par catégorie
        </h2>

        <Info size={18} className="text-gray-400" />
      </div>

      <div className="mt-6 space-y-5">
        {categories.map(([label, percentage, color]) => (
          <div key={label}>

            <div className="flex justify-between text-sm">
              <span className="text-gray-600">
                {label}
              </span>

              <span className="font-bold text-[#0F3D2E]">
                {percentage}%
              </span>
            </div>

            <div className="mt-2 h-2 rounded-full bg-gray-100">
              <div
                className={`h-full rounded-full ${color}`}
                style={{ width: `${percentage}%` }}
              />
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}