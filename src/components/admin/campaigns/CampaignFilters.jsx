import { Search } from "lucide-react";

const FILTER_OPTIONS = [
  { value: "tous", label: "Tous les statuts" },
  { value: "brouillon", label: "Brouillon" },
  { value: "en_validation", label: "En validation" },
  { value: "active", label: "Active" },
  { value: "terminee", label: "Terminée" },
];

function CampaignFilters({
  search,
  onSearchChange,
  status,
  onStatusChange,
}) {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row">
      <div className="flex h-11 w-full items-center gap-3 rounded-md border border-[#E2DCCF] bg-white px-3 shadow-sm focus-within:border-[#168568] sm:max-w-md">
        <Search size={18} className="shrink-0 text-slate-500" />

        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Rechercher..."
          aria-label="Rechercher une campagne"
          className="min-w-0 flex-1 bg-transparent text-sm outline-none"
        />
      </div>

      <select
        value={status}
        onChange={(event) => onStatusChange(event.target.value)}
        aria-label="Filtrer par statut"
        className="h-11 w-full rounded-md border border-[#E2DCCF] bg-white px-3 text-sm text-slate-800 outline-none focus:border-[#168568] sm:w-52"
      >
        {FILTER_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CampaignFilters;
