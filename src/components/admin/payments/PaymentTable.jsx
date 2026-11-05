import  PaymentTableRow  from './PaymentTableRow';
import  PaymentCard  from './PaymentCard';

function PaymentTable({ transactions }) {
  if (transactions.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500 text-sm shadow-xs">
        Aucune transaction ne correspond à vos critères.
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden">
      {/* Vue Mobile */}
      <div className="block md:hidden p-4 space-y-3">
        {transactions.map((tx) => (
          <PaymentCard key={tx.id} tx={tx} />
        ))}
      </div>

      {/* Vue Tablette & Desktop */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50/50 text-[#0F4C3A] text-sm font-semibold">
              <th className="py-3.5 px-4 sm:px-6">Référence</th>
              <th className="py-3.5 px-4 sm:px-6">Date</th>
              <th className="py-3.5 px-4 sm:px-6">Donateur</th>
              <th className="py-3.5 px-4 sm:px-6">Type</th>
              <th className="py-3.5 px-4 sm:px-6">Destination</th>
              <th className="py-3.5 px-4 sm:px-6">Montant</th>
              <th className="py-3.5 px-4 sm:px-6">Frais</th>
              <th className="py-3.5 px-4 sm:px-6 text-right">Moyen</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <PaymentTableRow key={tx.id} tx={tx} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentTable;