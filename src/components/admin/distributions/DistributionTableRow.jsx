import  DistributionBadge  from '../../admin/distributions/DistributionBadge';

function DistributionTableRow({ dist }) {
  return (
    <tr className="hover:bg-gray-50/80 transition-colors border-b border-gray-100 last:border-b-0 text-sm">
      <td className="py-4 px-4 sm:px-6 font-semibold text-gray-900">
        {dist.beneficiary}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700">
        {dist.origin}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700">
        {dist.organization}
      </td>
      <td className="py-4 px-4 sm:px-6 font-bold text-gray-900 font-mono">
        {dist.amount}
      </td>
      <td className="py-4 px-4 sm:px-6">
        <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
          {dist.mode}
        </span>
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-600 font-mono text-xs">
        {dist.proof}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-600 text-xs whitespace-nowrap">
        {dist.date}
      </td>
      <td className="py-4 px-4 sm:px-6 text-right">
        <DistributionBadge status={dist.status} />
      </td>
    </tr>
  );
}

export default DistributionTableRow;