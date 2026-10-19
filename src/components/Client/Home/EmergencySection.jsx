import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import campaigns from "./Campaigns";
import EmergencyCard from "./EmergencyCard";

function EmergencySection() {
  return (
    <section className="mt-8 md:mt-10 lg:mt-14">

      <div className="mb-4 flex items-center justify-between">

        <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
          Urgences
        </h2>

        <Link
          to="/cause"
          className="flex items-center gap-1 text-xs font-medium text-[#806a00] underline sm:text-sm"
        >
          Tout voir
          <ChevronRight size={15} />
        </Link>

      </div>

      <div className="grid gap-3 md:grid-cols-2 lg:gap-5">

        {campaigns.map((campaign) => (
          <EmergencyCard
            key={campaign.id}
            campaign={campaign}
          />
        ))}

      </div>

    </section>
  );
}

export default EmergencySection;