import campaigns from "./Campaigns";
import CampaignCard from "./CampaignCard";

function CampaignList() {
  return (
    <section className="mt-8 md:mt-10 lg:mt-14">

      <div className="grid px-5 gap-3 md:grid-cols-3 lg:gap-5">

        {campaigns.map((campaign) => (
          <CampaignCard
            key={campaign.id}
            campaign={campaign}
          />
        ))}

      </div>

    </section>
  );
}

export default CampaignList;