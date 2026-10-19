
import CampaignProgress from "./CampaignProgress";
import { Link } from "react-router-dom";

function CampaignCard({campaign, onContribute}) {
  return (
    <Link
      to="/type"
      className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">

      <div className="relative">
        <img
          src={campaign.image}
          alt={campaign.title}
          className="h-40 w-full object-cover sm:h-48"
        />

        <span className="absolute left-2 top-2 rounded-full bg-white px-2 py-1 text-[8px] font-medium text-[#003f35]">
          {campaign.category}
        </span>
      </div>

      <div className="p-3 sm:p-4">

        <h3 className="text-xs font-semibold text-[#003f35] sm:text-sm">
          {campaign.title}
        </h3>

        <p className="mt-2 min-h-8 text-[9px] leading-4 text-gray-500 sm:text-xs">
          {campaign.description}
        </p>

        <div className="mt-3 flex items-center justify-between text-[8px] text-gray-500">
          <span>Collecté : {campaign.collected}</span>
          <span>Objectif : {campaign.goal}</span>
        </div>

        <CampaignProgress percentage={campaign.percentage} />

        <button
          type="button"
          onClick={onContribute}
          className="mt-4 w-full rounded-md border border-gray-300 py-2 text-[9px] font-medium text-[#003f35] transition hover:bg-[#eaf5f1]"
        >
          Contribuer
        </button>

      </div>
    </Link>
  );
}

export default CampaignCard;