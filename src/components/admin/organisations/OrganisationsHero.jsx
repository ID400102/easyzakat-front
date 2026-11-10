import { Download, Plus } from 'lucide-react';

export function OrganisationsHero({ onExport, onOpenAddModal }) {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 md:mb-8">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#0F4C3A] font-serif tracking-tight">
          Organisations
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1 sm:mt-2 max-w-2xl leading-relaxed">
          Vérifiez l'identité, l'existence et la conformité des partenaires. Chaque validation est historisée dans le journal d'audit.
        </p>
      </div>
      
      <div className="flex items-center gap-3 self-start md:self-auto shrink-0 w-full md:w-auto">
        <button
          onClick={onExport}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 hover:border-gray-400 transition-all text-sm shadow-sm"
        >
          <Download className="w-4 h-4 text-gray-600" />
          <span>Exporter</span>
        </button>
        <button
          onClick={onOpenAddModal}
          className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 bg-[#0F4C3A] hover:bg-[#0B3B2D] text-white rounded-lg font-medium transition-all text-sm shadow-sm"
        >
          <Plus className="w-4 h-4" />
          <span>Ajouter</span>
        </button>
      </div>
    </div>
  );
}