import { MoreHorizontal } from "lucide-react";

function CampaignActions({ onEdit, campaignName }) {
  return (
    <button
      type="button"
      onClick={onEdit}
      aria-label={`Modifier la campagne ${campaignName}`}
      title="Modifier la campagne"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 hover:bg-[#EEEAE1] hover:text-[#155E4F] focus:outline-none focus:ring-2 focus:ring-[#168568]"
    >
      <MoreHorizontal size={20} />
    </button>
  );
}

export default CampaignActions;
