import { Routes, Route } from "react-router-dom";

import Home from "../../pages/client/Home";
import CalculZakat from "../../pages/client/CalculZakat";
import Impact from "../../pages/client/Impact";
import DonationType from "../../pages/client/DonationType";
import DonationSpace from "../../pages/client/DonationSpace";
import Cause from "../../pages/client/Cause";
import Landing from "../../pages/client/Landing";
// import CampaignDetails from "../../pages/client/CampaignDetails";
import Payment from "../../pages/client/Payment";
import Confirm from "../../pages/client/Confirm";


function UserRoutes() {
  return (
    <Routes>

        {/* Page d'accueil */}
        <Route index element={<Landing />} />

        {/* Page d'accueil */}
        <Route path="/home" element={<Home />} />

        {/* Page Calcul de Zakat */}
        <Route path="/calculer-zakat" element={<CalculZakat />} />
        
        {/* Page Choix d'une Cause */}
          <Route path="/cause" element={<Cause />} />

        {/* Page Type de Donation */}
        <Route path="/type" element={<DonationType /> } />

        {/* Page Details */}
        {/* <Route path="/details" element={<CampaignDetails /> } /> */}

        {/* Page Paiement */}
        <Route path="/payment" element={<Payment /> } />

        {/* Page Confirmation */}
        <Route path="/confirm" element={<Confirm /> } />

      {/* Impact */}
        <Route path="/impact" element={<Impact /> } />

      {/* Espace Donateur */}
        <Route path="/profil" element={<DonationSpace /> } />

    


    </Routes>
  );
}

export default UserRoutes;