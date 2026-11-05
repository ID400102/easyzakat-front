import { Calendar, User, Tag} from 'lucide-react';

function AuditCard({ log }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-2.5">
      <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-2">
        <span className="flex items-center gap-1 font-mono">
          <Calendar className="w-3.5 h-3.5" /> {log.date}
        </span>
        <span className="flex items-center gap-1 text-gray-700 font-medium truncate max-w-[180px]">
          <User className="w-3.5 h-3.5 shrink-0" /> {log.user}
        </span>
      </div>

      <div>
        <div className="text-sm font-bold text-[#0F4C3A]">{log.action}</div>
        <div className="text-xs text-gray-600 mt-0.5 flex items-center gap-1">
          <Tag className="w-3 h-3 text-gray-400" /> {log.target}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-100 text-xs font-mono">
        <div className="bg-red-50/50 p-2 rounded border border-red-100 overflow-hidden">
          <span className="text-[10px] uppercase font-bold text-red-700 block mb-0.5">Ancienne valeur</span>
          <span className="text-gray-600 truncate block">{log.oldValue}</span>
        </div>
        <div className="bg-green-50/50 p-2 rounded border border-green-100 overflow-hidden">
          <span className="text-[10px] uppercase font-bold text-green-700 block mb-0.5">Nouvelle valeur</span>
          <span className="text-gray-800 truncate block">{log.newValue}</span>
        </div>
      </div>
    </div>
  );
}

export default AuditCard;