function RecentDonations({
  donations = [],
  onViewAll,
}) {
  return (
    <section
      className="
        mt-5
        overflow-hidden
        rounded-[11px]
        bg-white
        px-4
        py-5

        sm:px-5
        sm:py-6
      "
    >
      <div className="flex items-center justify-between">
        <h2
          className="
            text-[16px]
            font-semibold
            text-[#004D43]

            sm:text-[18px]
          "
        >
          Dons Récents
        </h2>

        <button
          type="button"
          onClick={onViewAll}
          className="
            text-[9px]
            font-medium
            text-[#004D43]

            sm:text-[10px]
          "
        >
          Voir tout
        </button>
      </div>

      <div className="mt-6 overflow-x-auto">
        <table
          className="
            w-full
            min-w-[430px]
            border-collapse
          "
        >
          <thead>
            <tr
              className="
                border-b
                border-[#D9DEDC]
                text-left
              "
            >
              <th
                className="
                  pb-3
                  pr-3
                  text-[9px]
                  font-medium
                  text-[#626967]
                "
              >
                Date
              </th>

              <th
                className="
                  pb-3
                  pr-3
                  text-[9px]
                  font-medium
                  text-[#626967]
                "
              >
                Type
              </th>

              <th
                className="
                  pb-3
                  pr-3
                  text-[9px]
                  font-medium
                  text-[#626967]
                "
              >
                Campagne
              </th>

              <th
                className="
                  pb-3
                  text-right
                  text-[9px]
                  font-medium
                  text-[#626967]
                "
              >
                Montant
              </th>
            </tr>
          </thead>

          <tbody>
            {donations.map(function (donation) {
              return (
                <tr
                  key={donation.id}
                  className="
                    border-b
                    border-[#D9DEDC]
                    last:border-b-0
                  "
                >
                  <td
                    className="
                      py-4
                      pr-3
                      text-[9px]
                      text-[#313837]
                    "
                  >
                    {donation.date}
                  </td>

                  <td
                    className="
                      py-4
                      pr-3
                      text-[9px]
                      text-[#313837]
                    "
                  >
                    {donation.type}
                  </td>

                  <td
                    className="
                      py-4
                      pr-3
                      text-[9px]
                      text-[#313837]
                    "
                  >
                    {donation.campaign}
                  </td>

                  <td
                    className="
                      py-4
                      text-right
                      text-[10px]
                      font-semibold
                      text-[#005B4F]
                    "
                  >
                    {formatAmount(donation.amount)}
                    <span className="block">
                      FCFA
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function formatAmount(amount) {
  return new Intl.NumberFormat("fr-FR").format(amount || 0);
}

export default RecentDonations;