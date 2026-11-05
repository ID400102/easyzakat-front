import AuditTableRow  from './AuditTableRow';
import  AuditCard  from './AuditCard';

function AuditTable({ logs }) {
  if (logs.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 text-sm shadow-xs">
        Aucun journal d'audit ne correspond à votre recherche.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      {/* Vue Mobile */}
      <div className="block md:hidden p-4 space-y-3">
        {logs.map((log) => (
          <AuditCard key={log.id} log={log} />
        ))}
      </div>

      {/* Vue Tablette & Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-[#0F4C3A] text-white text-xs sm:text-sm font-semibold">
              <th className="py-3.5 px-4 sm:px-6">Date</th>
              <th className="py-3.5 px-4 sm:px-6">Utilisateur</th>
              <th className="py-3.5 px-4 sm:px-6">Action</th>
              <th className="py-3.5 px-4 sm:px-6">Objet</th>
              <th className="py-3.5 px-4 sm:px-6">Ancienne valeur</th>
              <th className="py-3.5 px-4 sm:px-6">Nouvelle valeur</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log) => (
              <AuditTableRow key={log.id} log={log} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AuditTable;