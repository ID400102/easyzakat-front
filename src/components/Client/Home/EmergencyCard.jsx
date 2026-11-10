import { Link } from "react-router-dom";

function EmergencyCard({ campaign }) {
  return (
    <Link
      to={`/campaigns/${campaign.id}`}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >

      <div className="flex min-h-[105px] sm:min-h-[135px]">

        <img
          src={campaign.image}
          alt={campaign.title}
          className="w-[95px] object-cover sm:w-[150px]"
        />

        <div className="flex flex-1 flex-col justify-between p-3 sm:p-4">

          <div>

            <h3 className="text-xs font-bold text-gray-900 sm:text-sm">
              {campaign.title}
            </h3>

            <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-gray-500 sm:text-xs">
              {campaign.description}
            </p>

          </div>

          <div className="mt-2">

            <div className="mb-1 flex justify-between text-[9px] font-medium text-gray-600 sm:text-[10px]">

              <span>
                {campaign.progress}% collecté
              </span>

              <span>
                {campaign.remaining}
              </span>

            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-[#dce2f3]">

              <div
                className="h-full rounded-full bg-[#005b49]"
                style={{
                  width: `${campaign.progress}%`
                }}
              />

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default EmergencyCard;