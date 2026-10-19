
import { formatFCFA } from "../../../Data/donorUtils";

function DonorTable({ donors }) {
  return (
    <div className="hidden overflow-hidden rounded-2xl border border-[#E2DCCF] md:block">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[#075b45] text-white">
          <tr>
            <th scope="col" className="px-3 py-3 text-left font-medium">
              Donateurs
            </th>

            <th scope="col" className="px-3 py-3 text-left font-medium">
              Nombre de dons
            </th>

            <th scope="col" className="px-3 py-3 text-right font-medium">
              Total donné
            </th>
          </tr>
        </thead>

        <tbody className="bg-white">
          {donors.map((donor) => (
            <tr
              key={donor.id}
              className="border-t border-[#E2DCCF] transition-colors hover:bg-[#075b451a]"
            >
              <td className="px-3 py-[9px] font-medium text-slate-900">
                {donor.name}
              </td>

              <td className="px-3 py-[9px]">
                <div className="flex items-center gap-2">
                  <span className="tabular-nums text-slate-900">
                    {donor.donationCount}
                  </span>

                  {donor.recurring && (
                    <span className="text-xs text-[#A87532]">
                      récurrent
                    </span>
                  )}
                </div>
              </td>

              <td className="px-3 py-[9px] text-right font-medium tabular-nums text-slate-900">
                {formatFCFA(donor.totalAmount)}
              </td>
            </tr>
          ))}

          {donors.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="px-4 py-8 text-center text-slate-500"
              >
                Aucun donateur trouvé.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DonorTable;
