function AuditTableRow({ log }) {
  return (
    <tr className="hover:bg-gray-50/80 transition-colors border-b border-gray-100 last:border-b-0 text-xs sm:text-sm">
      <td className="py-4 px-4 sm:px-6 text-gray-600 font-mono text-xs whitespace-nowrap">
        {log.date}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-800 font-medium">
        {log.user}
      </td>
      <td className="py-4 px-4 sm:px-6 text-[#0F4C3A] font-semibold">
        {log.action}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-700">
        {log.target}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-500 font-mono text-xs max-w-[200px] truncate">
        {log.oldValue}
      </td>
      <td className="py-4 px-4 sm:px-6 text-gray-800 font-mono text-xs max-w-[200px] truncate">
        {log.newValue}
      </td>
    </tr>
  );
}

export default AuditTableRow;