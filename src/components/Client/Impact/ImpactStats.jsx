import { TrendingUp } from "lucide-react";

function formatFCFA(amount) {
  const value = Number(amount);

  if (!Number.isFinite(value)) {
    return "—";
  }

  return `${new Intl.NumberFormat("fr-FR", {
    maximumFractionDigits: 0,
  }).format(value)} FCFA`;
}

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

export default function ImpactStats({
  stats = null,
  loading = false,
}) {
  const totalCollected = Number(stats?.totalCollected ?? 0);

  const totalDistributed = Number(
    stats?.totalDistributed ?? 0
  );

  // Solde calculé à partir des données du backend
  const availableBalance =
    totalCollected - totalDistributed;

  const distributionPercentage = Number(
    stats?.distributionPercentage ??
      (totalCollected > 0
        ? (totalDistributed / totalCollected) * 100
        : 0)
  );

  const displayAmount = (value) => {
    if (loading) return "Chargement...";
    if (!stats) return "—";

    return formatFCFA(value);
  };

  const displayPercentage = () => {
    if (loading) return "Calcul en cours...";
    if (!stats) return "Statistiques indisponibles";

    return `${new Intl.NumberFormat("fr-FR", {
      maximumFractionDigits: 1,
    }).format(distributionPercentage)}% du montant collecté`;
  };

  // La largeur visuelle reste comprise entre 0 et 100 %
  const progressWidth = Math.min(
    100,
    Math.max(0, distributionPercentage)
  );

  return (
    <section className="grid gap-4 md:grid-cols-3">

      {/* Total collecté */}
      <StatCard
        title="TOTAL COLLECTÉ"
        amount={displayAmount(totalCollected)}
        highlight={true}
      >
        <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-green-800">
          <TrendingUp size={17} />

          <span>
            {loading
              ? "Chargement des données..."
              : stats
                ? "Données du backend"
                : "Données indisponibles"}
          </span>
        </div>
      </StatCard>

      {/* Total redistribué */}
      <StatCard
        title="Redistribué"
        amount={displayAmount(totalDistributed)}
      >
        <div className="mt-4">
          <div className="h-2 rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-[#0F3D2E] transition-all duration-500"
              style={{
                width: `${progressWidth}%`,
              }}
            />
          </div>

          <p className="mt-2 text-xs text-gray-500">
            {displayPercentage()}
          </p>
        </div>
      </StatCard>

      {/* Solde disponible */}
      <StatCard
        title="Solde Disponible"
        amount={displayAmount(availableBalance)}
      >
        <p className="mt-2 text-xs text-gray-500">
          Calculé : montant collecté − montant redistribué
        </p>
      </StatCard>

    </section>
  );
}