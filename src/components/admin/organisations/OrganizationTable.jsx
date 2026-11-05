import { OrganizationTableRow } from './OrganizationTableRow';
import { OrganizationCard } from './OrganizationCard';

export function OrganizationTable({ organizations, onEdit, onDelete }) {
  if (organizations.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 text-sm">
        Aucune organisation ne correspond à vos critères de recherche.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-00 shadow-sm overflow-hidden">
      {/* Vue Mobile (Cartes) */}
      <div className="block md:hidden p-4 space-y-3">
        {organizations.map((org) => (
          <OrganizationCard key={org.id} org={org} onEdit={onEdit} onDelete={onDelete} />
        ))}
      </div>

      {/* Vue Desktop & Tablette (Tableau) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 text-white bg-[#0F4C3A]  text-sm font-semibold">
              <th className="py-4 px-4 sm:px-6">Organisation</th>
              <th className="py-4 px-4 sm:px-6">Type</th>
              <th className="py-4 px-4 sm:px-6">Responsable</th>
              <th className="py-4 px-4 sm:px-6">Région</th>
              <th className="py-4 px-4 sm:px-6">Contact</th>
              <th className="py-4 px-4 sm:px-6">Vérification</th>
              <th className="py-4 px-4 sm:px-6 text-right"></th>
            </tr>
          </thead>
          <tbody>
            {organizations.map((org) => (
              <OrganizationTableRow key={org.id} org={org} onEdit={onEdit} onDelete={onDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}