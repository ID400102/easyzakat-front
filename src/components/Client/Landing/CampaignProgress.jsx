
function CampaignProgress({
  percentage = 75,
}) {
  const safePercentage = Math.min(
    100,
    Math.max(0, percentage)
  );

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-[8px] text-gray-500">
        <span>Collecte</span>
        <span>{safePercentage}%</span>
      </div>

      <div
        className="mt-1 h-1.5 overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuenow={safePercentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div
          className="h-full rounded-full bg-[#00634f] transition-all duration-500"
          style={{ width: `${safePercentage}%` }}
        />
      </div>
    </div>
  );
}

export default CampaignProgress;