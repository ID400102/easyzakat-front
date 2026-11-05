function PaymentBadge({ type }) {
  let badgeStyles = 'bg-gray-100 text-gray-700 border border-gray-200';

  if (type === 'Urgence sociale') {
    badgeStyles = 'bg-red-50 text-red-700 border border-red-100';
  } else if (type === 'Don Ramadan') {
    badgeStyles = 'bg-amber-50 text-amber-700 border border-amber-100';
  } else if (type === 'Sadaqa') {
    badgeStyles = 'bg-emerald-50 text-emerald-700 border border-emerald-100';
  } else if (type === 'Zakat') {
    badgeStyles = 'bg-teal-50 text-teal-700 border border-teal-100';
  }

  return (
    <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-md text-xs font-medium ${badgeStyles}`}>
      {type}
    </span>
  );
}

export default PaymentBadge;