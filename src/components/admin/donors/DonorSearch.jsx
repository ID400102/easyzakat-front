
import { Search, X } from "lucide-react";

function DonorSearch({ value, onChange }) {
  return (
    <div className="mb-4 w-full max-w-md">
      <label htmlFor="donor-search" className="sr-only">
        Rechercher un donateur
      </label>

      <div className="flex h-11 items-center gap-3 rounded-md border border-[#E2DCCF] bg-white px-3 shadow-sm transition focus-within:border-[#168568] focus-within:ring-2 focus-within:ring-[#168568]/15">
        <Search
          size={18}
          className="shrink-0 text-slate-500"
          aria-hidden="true"
        />

        <input
          id="donor-search"
          type="search"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Rechercher un donateur..."
          className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-500"
        />

        {value && (
          <button
            type="button"
            onClick={() => onChange("")}
            aria-label="Effacer la recherche"
            className="rounded p-1 text-slate-500 hover:bg-slate-100"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export default DonorSearch;
