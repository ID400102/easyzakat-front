import { Calendar, User, ArrowRight, CreditCard } from 'lucide-react';
import  PaymentBadge  from '../../admin/payments/PaymentBadge';

function PaymentCard({ tx }) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-xs space-y-3">
      <div className="flex items-center justify-between text-xs text-gray-500 border-b border-gray-100 pb-2">
        <span className="font-mono font-bold text-[#0F4C3A]">{tx.reference}</span>
        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {tx.date}</span>
      </div>

      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="font-semibold text-gray-900 text-sm flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-gray-400" /> {tx.donor}
          </span>
          <div className="text-xs text-gray-600 mt-1 flex items-center gap-1">
            <ArrowRight className="w-3 h-3 text-gray-400" /> {tx.destination}
          </div>
        </div>
        <PaymentBadge type={tx.type} />
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-xs items-center">
        <div>
          <span className="text-[10px] text-gray-400 block">Montant</span>
          <strong className="font-mono text-gray-900">{tx.amount}</strong>
        </div>
        <div>
          <span className="text-[10px] text-gray-400 block">Frais</span>
          <span className="font-mono text-gray-600">{tx.fee}</span>
        </div>
        <div className="text-right">
          <span className="inline-block px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-medium">
            {tx.paymentMethod}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PaymentCard;