
import { formatFCFA, getCampaignProgress } from "../../../Data/campaignUtils";

function CampaignProgress({ collected, goal }) {
  const percentage = getCampaignProgress({ collected, goal });

  return (
    <div className="min-w-40">
      <div
        className="h-2 overflow-hidden rounded-full bg-[#CEDDD8]"
        role="progressbar"
        aria-label="Progression de la campagne"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percentage}
      >
        <div
          className="h-full rounded-full bg-[#155E4F] transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-1 whitespace-nowrap text-xs text-slate-600">
        {formatFCFA(collected)} / {formatFCFA(goal)} · {percentage}%
      </p>
    </div>
  );
}

export default CampaignProgress;
