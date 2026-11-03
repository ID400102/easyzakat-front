import { useState } from 'react';
import { MoreHorizontal, Eye, Edit, Trash2 } from 'lucide-react';
import { OrganizationBadge } from '../../admin/organisations/OrganizationBadge';

export function OrganizationTableRow({ org, onEdit, onDelete }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <tr className="hover:bg-[#075b451a]  border-b border-gray-100 last:border-b-0">
      <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900 text-sm">
        {org.name}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700 text-sm">
        {org.type}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700 text-sm">
        {org.manager}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700 text-sm">
        {org.region}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700 text-sm font-mono sm:text-sm">
        {org.contact}
      </td>
      <td className="py-4 px-4 sm:px-6">
        <OrganizationBadge status={org.status} />
      </td>
      <td className="py-4 px-4 sm:px-6 text-right relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-800 "
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>

        {showMenu && (
          <div className="absolute right-6 top-12 z-20 w-36 bg-white rounded-lg shadow-lg border border-gray-100 py-1 text-left">
            <button
              onClick={() => {
                setShowMenu(false);
                onEdit(org); // Ouvre la modale de modification avec l'org ciblée
              }}
              className="w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Edit className="w-3.5 h-3.5" /> Modifier
            </button>
            <button
              onClick={() => {
                setShowMenu(false);
                onDelete(org.id);
              }}
              className="w-full px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 flex items-center gap-2"
            >
              <Trash2 className="w-3.5 h-3.5" /> Supprimer
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}