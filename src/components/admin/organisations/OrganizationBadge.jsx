export function OrganizationBadge({ status }) {
  let badgeStyles = 'bg-gray-200 text-gray-700';

  if (status === 'VALIDATED') {
    badgeStyles = 'bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]';
  } else if (status === 'TO_VERIFY') {
    badgeStyles = 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]';
  } else if (status === 'DRAFT') {
    badgeStyles = 'bg-[#E5E7EB] text-[#4B5563] border border-[#D1D5DB]';
  }

  const labelMap = {
    VALIDATED: 'Validée',
    TO_VERIFY: 'À vérifier',
    DRAFT: 'Brouillon',
  };

  return (
    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${badgeStyles}`}>
      {labelMap[status] || status}
    </span>
  );
}