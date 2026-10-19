
import { Download, Plus } from "lucide-react";

function CampaignsHero({ onExport, onAdd }) {
  return (
    <header className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="font-serif text-3xl font-semibold leading-tight text-[#006B5D] md:text-4xl">
          Campagnes
        </h1>

        <p className="mt-1 text-sm leading-6 text-slate-600 md:text-base">
          Validez, suivez et clôturez les campagnes de solidarité proposées par les organisations.
        </p>
      </div>

      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          onClick={onExport}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md border border-[#E2DCCF] bg-white px-3 text-sm font-medium hover:bg-[#F7F4ED] sm:flex-none sm:px-4"
        >
          <Download size={17} />
          Exporter
        </button>

        <button
          type="button"
          onClick={onAdd}
          className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-[#155E4F] px-3 text-sm font-semibold text-white hover:bg-[#104B3F] sm:flex-none sm:px-4"
        >
          <Plus size={17} />
          Ajouter
        </button>
      </div>
    </header>
  );
}

export default CampaignsHero;
