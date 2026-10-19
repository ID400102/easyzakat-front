
import { useMemo, useState } from "react";

import DonorPageHeader from "../../components/admin/donors/DonorsHero";
import DonorSearch from "../../components/admin/donors/DonorSearch";
import DonorTable from "../../components/admin/donors/DonorsTable";
import DonorMobileList from "../../components/admin/donors/DonorMobileList";

import DONORS_DATA from "../../Data/donorsData";
import { searchDonors } from "../../Data/donorUtils";

const PAGE_TITLE = "Donateurs";

const PAGE_DESCRIPTION =
  "Donateurs ayant effectué au moins un don réussi, classés par montant cumulé.";

function Donateurs({ donors = DONORS_DATA }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDonors = useMemo(
    () => searchDonors(donors, searchTerm),
    [donors, searchTerm]
  );

  return (
    <main className="min-h-screen px-4 py-5 sm:px-6 md:px-7 md:py-7 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        <DonorPageHeader
          title={PAGE_TITLE}
          description={PAGE_DESCRIPTION}
        />

        <DonorSearch
          value={searchTerm}
          onChange={setSearchTerm}
        />

        <DonorTable donors={filteredDonors} />

        <DonorMobileList donors={filteredDonors} />
      </div>
    </main>
  );
}

export default Donateurs;
