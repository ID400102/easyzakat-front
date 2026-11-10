
import { Routes, Route, Navigate } from "react-router-dom";
import Reports from "../../pages/client/Reports";
import CampaignDetails from "../../pages/client/CampaignDetails";

import Home from "../../pages/client/Home";
import CalculZakat from "../../pages/client/CalculZakat";
import Impact from "../../pages/client/Impact";
import DonationType from "../../pages/client/DonationType";
import DonationSpace from "../../pages/client/DonationSpace";
import Cause from "../../pages/client/Cause";
import Landing from "../../pages/client/Landing";
import Payment from "../../pages/client/Payment";
import Confirm from "../../pages/client/Confirm";

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
      

      {/* Confirmation */}
      <Route path="/confirm" element={<Confirm />} />

      {/* Impact */}
      <Route path="/impact" element={<Impact />} />

      {/* Payment */}
      <Route path="/payment" element={<Payment />} />

      {/* Espace donateur */}
      <Route path="/profil" element={<DonationSpace />} />

      <Route path="/rapports" element={<Reports />} />
    </Routes>
  );
}

export default UserRoutes;
