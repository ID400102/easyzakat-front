import  DistributionTableRow  from './DistributionTableRow';
import  DistributionCard  from './DistributionCard';

function DistributionsTable({ distributions }) {
  if (distributions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 text-sm shadow-xs">
        Aucune distribution ne correspond à vos critères.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      {/* Vue Mobile */}
      <div className="block md:hidden p-4 space-y-3">
        {distributions.map((dist) => (
          <DistributionCard key={dist.id} dist={dist} />
        ))}
      </div>

      {/* Vue Tablette & Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-[#0F4C3A] text-white text-sm font-semibold">
              <th className="py-3.5 px-4 sm:px-6">Bénéficiaire</th>
              <th className="py-3.5 px-4 sm:px-6">Origine</th>
              <th className="py-3.5 px-4 sm:px-6">Organisation</th>
              <th className="py-3.5 px-4 sm:px-6">Montant</th>
              <th className="py-3.5 px-4 sm:px-6">Mode</th>
              <th className="py-3.5 px-4 sm:px-6">Preuve</th>
              <th className="py-3.5 px-4 sm:px-6">Date</th>
              <th className="py-3.5 px-4 sm:px-6 text-right">Statut</th>
            </tr>
          </thead>
          <tbody>
            {distributions.map((dist) => (
              <DistributionTableRow key={dist.id} dist={dist} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DistributionsTable;