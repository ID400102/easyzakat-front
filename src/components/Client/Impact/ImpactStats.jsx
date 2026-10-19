import { TrendingUp } from "lucide-react";

function StatCard({ title, amount, children, highlight }) {
  return (
    <div
      className={
        highlight
          ? "rounded-2xl border-2 border-[#0F3D2E] bg-[#F3FBF6] p-5 shadow-sm"
          : "rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
      }
    >
      <p className="text-xs font-bold text-[#0F3D2E]">
        {title}
      </p>

      <p className="mt-3 text-2xl font-extrabold text-[#0F3D2E]">
        {amount}
      </p>

      {children}
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="grid gap-4 md:grid-cols-3">

      <StatCard
        title="TOTAL COLLECTÉ (2026)"
        amount="450.780.000 FCFA"
        highlight={true}
      >
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-800">
          <TrendingUp size={17} />
          <span>+12% par rapport à 2025</span>
        </div>
      </StatCard>

      <StatCard
        title="Redistribué"
        amount="412.500.000"
      >
        <div className="mt-4">
          <div className="h-2 rounded-full bg-gray-100">
            <div className="h-full w-[91%] rounded-full bg-[#0F3D2E]" />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            91% du fonds global
          </p>
        </div>
      </StatCard>

      <StatCard
        title="Solde Disponible"
        amount="38.280.000"
      >
        <p className="mt-2 text-xs text-gray-500">
          Réservé aux urgences
        </p>
      </StatCard>

    </section>
  );
}

