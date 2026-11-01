
import { Routes, Route } from "react-router-dom";
import Reports from "../../pages/public/Reports";

import Home from "../../pages/public/Home";
import CalculZakat from "../../pages/public/CalculZakat";
import Impact from "../../pages/public/Impact";
import DonationType from "../../pages/public/DonationType";
import DonationSpace from "../../pages/public/DonationSpace";
import Cause from "../../pages/public/Cause";
import Landing from "../../pages/public/Landing";
import CampaignDetails from "../../pages/public/CampaignDetails";
import Payment from "../../pages/public/Payment";
import Confirm from "../../pages/public/Confirm";

function UserRoutes() {
  return (
    <Routes>
      {/* Page d'accueil */}
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />

      {/* Calcul de Zakat */}
      <Route
        path="/calculer-zakat"
        element={<CalculZakat />}
      />

      {/* Choix d'une cause */}
      <Route path="/cause" element={<Cause />} />

      {/* Type de donation */}
      <Route path="/type" element={<DonationType />} />

      {/* Détails d'une campagne */}
      <Route path="/details" element={<CampaignDetails />} />
      <Route
        path="/campaigns/:id"
        element={<CampaignDetails />}
      />

      {/* Paiement */}
      <Route path="/payment" element={<Payment />} />

      {/* Confirmation */}
      <Route path="/confirm" element={<Confirm />} />

      {/* Impact */}
      <Route path="/impact" element={<Impact />} />

      {/* Espace donateur */}
      <Route path="/profil" element={<DonationSpace />} />

      <Route path="/rapports" element={<Reports />} />
    </Routes>
  );
}

export default UserRoutes;
