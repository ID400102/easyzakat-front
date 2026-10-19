
import { formatFCFA } from "../../../Data/donorUtils";

function DonorMobileList({ donors }) {
  if (donors.length === 0) {
    return (
      <p className="rounded-xl border border-[#E2DCCF] bg-white p-6 text-center text-sm text-slate-500">
        Aucun donateur trouvé.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 md:hidden">
      {donors.map((donor) => (
        <article
          key={donor.id}
          className="rounded-xl border border-[#E2DCCF] bg-white p-4"
        >
          <div className="flex items-start justify-between gap-3">
            <h2 className="min-w-0 break-words font-medium text-slate-900">
              {donor.name}
            </h2>

            {donor.recurring && (
              <span className="shrink-0 rounded-full bg-[#F8F0E2] px-2 py-1 text-xs text-[#94652B]">
                Récurrent
              </span>
            )}
          </div>

          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-xs text-slate-500">
                Nombre de dons
              </p>
              <p className="mt-1 text-sm font-medium text-slate-800">
                {donor.donationCount}
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-500">
                Total donné
              </p>
              <p className="mt-1 break-words text-sm font-semibold text-[#006B5D]">
                {formatFCFA(donor.totalAmount)}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default DonorMobileList;
