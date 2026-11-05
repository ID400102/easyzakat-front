import { Building, Tag, CreditCard, FileText, Calendar } from 'lucide-react';
import  DistributionBadge  from '../../admin/distributions/DistributionBadge';

function DistributionCard({ dist }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-bold text-gray-900 text-base">{dist.beneficiary}</h3>
          <span className="text-xs text-[#0F4C3A] font-semibold flex items-center gap-1 mt-0.5">
            <Tag className="w-3.5 h-3.5" /> {dist.origin}
          </span>
        </div>
        <DistributionBadge status={dist.status} />
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 pt-1 border-t border-gray-100">
        <div className="flex items-center gap-1.5">
          <Building className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span className="truncate">{dist.organization}</span>
        </div>
        <div className="flex items-center gap-1.5 font-mono font-bold text-gray-900">
          <CreditCard className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>{dist.amount}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>Preuve: <strong className="font-mono">{dist.proof}</strong></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          <span>{dist.date}</span>
        </div>
      </div>
    </div>
  );
}

export default DistributionCard;