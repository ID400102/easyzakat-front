import { Phone, MapPin, User, Building, Trash2 } from 'lucide-react';
import { OrganizationBadge } from '../organisations/OrganizationBadge';

export function OrganizationCard({ org, onDelete }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-3">
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-gray-900 text-base">{org.name}</h3>
        <OrganizationBadge status={org.status} />
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-1">
        <div className="flex items-center gap-1.5">
          <Building className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="truncate">{org.type}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <User className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="truncate">{org.manager}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>{org.region}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Phone className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="font-mono">{org.contact}</span>
        </div>
      </div>

      <div className="pt-2 border-t border-gray-100 flex justify-end">
        <button
          onClick={() => onDelete(org.id)}
          className="text-xs text-red-600 hover:text-red-800 flex items-center gap-1 font-medium"
        >
          <Trash2 className="w-3.5 h-3.5" /> Supprimer
        </button>
      </div>
    </div>
  );
}