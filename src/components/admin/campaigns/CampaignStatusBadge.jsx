const STATUS_STYLES = {
  brouillon: "bg-slate-100 text-slate-700",
  en_validation: "bg-amber-100 text-amber-800",
  active: "bg-emerald-100 text-emerald-800",
  terminee: "bg-blue-100 text-blue-800",
};

const STATUS_LABELS = {
  brouillon: "Brouillon",
  en_validation: "En validation",
  active: "Active",
  terminee: "Terminée",
};

function CampaignStatusBadge({ status }) {
  return (
    <span
      className={`inline-flex whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${
        STATUS_STYLES[status] || STATUS_STYLES.brouillon
      }`}
    >
      {STATUS_LABELS[status] || status}
    </span>
  );
}

export default CampaignStatusBadge;
