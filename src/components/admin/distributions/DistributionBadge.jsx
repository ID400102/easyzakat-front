function DistributionBadge({ status }) {
  let badgeStyles = 'bg-gray-100 text-gray-700 border border-gray-200';

  if (status === 'VALIDATED') {
    badgeStyles = 'bg-[#DCFCE7] text-[#15803D] border border-[#BBF7D0]';
  } else if (status === 'JUSTIFIED') {
    badgeStyles = 'bg-[#E0F2FE] text-[#0369A1] border border-[#BAE6FD]';
  } else if (status === 'EFFECTUATED') {
    badgeStyles = 'bg-[#FEF3C7] text-[#B45309] border border-[#FDE68A]';
  } else if (status === 'PLANNED') {
    badgeStyles = 'bg-[#F3F4F6] text-[#4B5563] border border-[#E5E7EB]';
  }

  const labelMap = {
    VALIDATED: 'Validée',
    JUSTIFIED: 'Justifiée',
    EFFECTUATED: 'Effectuée',
    PLANNED: 'Planifiée',
  };

  return (
    <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium transition-colors ${badgeStyles}`}>
      {labelMap[status] || status}
    </span>
  );
}

export default DistributionBadge;