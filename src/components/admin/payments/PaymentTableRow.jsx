import  PaymentBadge  from '../../admin/payments/PaymentBadge';

function PaymentTableRow({ tx }) {
  return (
    <tr className="hover:bg-gray-50/80 transition-colors border-b border-gray-100 last:border-b-0 text-sm">
      <td className="py-4 px-4 sm:px-6 font-mono text-xs font-semibold text-gray-900">
        {tx.reference}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-600 text-xs whitespace-nowrap">
        {tx.date}
      </td>
      <td className="py-4 px-4 sm:px-6 font-medium text-gray-900">
        {tx.donor}
      </td>
      <td className="py-4 px-4 sm:px-6">
        <PaymentBadge type={tx.type} />
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700">
        {tx.destination}
      </td>
      <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 font-mono">
        {tx.amount}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-500 font-mono text-xs">
        {tx.fee}
      </td>
      <td className="py-4 px-4 sm:px-6 text-right">
        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
          {tx.paymentMethod}
        </span>
      </td>
    </tr>
  );
}

export default PaymentTableRow;