
import CampaignProgress from "./CampaignProgress";
import CampaignStatusBadge from "./CampaignStatusBadge";
import CampaignActions from "./CampaignActions";
import { formatCampaignDate } from "../../../Data/campaignUtils";


function CampaignTable({ campaigns, onEdit }) {
  if (campaigns.length === 0) {
    return (
      <div className="rounded-xl border border-[#E2DCCF] bg-white p-8 text-center text-sm text-slate-500">
        Aucune campagne ne correspond à votre recherche.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[#E2DCCF] bg-white">
      <table className="w-full min-w-[1000px] text-sm">
        <thead className="bg-[#075b45] text-white">
          <tr>
            <th className="px-3 py-3 text-left font-medium">Campagne</th>
            <th className="px-3 py-3 text-left font-medium">Organisation</th>
            <th className="px-3 py-3 text-left font-medium">Progression</th>
            <th className="px-3 py-3 text-left font-medium">Fin</th>
            <th className="px-3 py-3 text-left font-medium">Lieu</th>
            <th className="px-3 py-3 text-left font-medium">Statut</th>
            <th className="w-12 px-2 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((campaign) => {
            const location = [
              campaign.region,
              campaign.commune &&
                campaign.commune !== campaign.region
                ? campaign.commune
                : "",
            ]
              .filter(Boolean)
              .join(" / ");

            return (
              <tr
                key={campaign.id}
                className="border-t border-[#E2DCCF] hover:bg-[#075b451a]"
              >
                <td className="max-w-64 px-3 py-2">
                  <p className="font-medium text-slate-900">
                    {campaign.name}
                  </p>
                  <p className="max-w-56 truncate text-xs text-slate-500">
                    {campaign.category}
                  </p>
                </td>

                <td className="max-w-52 px-3 py-2">
                  <span className="block truncate">
                    {campaign.organization}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <CampaignProgress
                    collected={campaign.collected}
                    goal={campaign.goal}
                  />
                </td>

                <td className="whitespace-nowrap px-3 py-2">
                  {formatCampaignDate(campaign.endDate)}
                </td>

                <td className="max-w-44 px-3 py-2">
                  <span className="block truncate">
                    {location || "—"}
                  </span>
                </td>

                <td className="px-3 py-2">
                  <CampaignStatusBadge status={campaign.status} />
                </td>

                <td className="px-2 py-2 text-center">
                  <CampaignActions
                    campaignName={campaign.name}
                    onEdit={() => onEdit(campaign)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CampaignTable;
