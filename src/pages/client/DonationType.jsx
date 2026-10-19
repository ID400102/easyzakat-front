import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import TypeIntro from "../../components/Client/DonationType/TypeIntro";
import TypeList from "../../components/Client/DonationType/TypeList";
import AmountForm from "../../components/Client/DonationType/AmountForm";
import BottomNav from "../../layouts/BottomNav";

function DonationType() {
  const navigate = useNavigate();
  const location = useLocation();

  // Informations reçues depuis la page Details
 const {
  campaignId,
  campaignName,
  campaignOrganization,
  donationAmount,
  donationType,
} = location.state || {};

  // Montant
  const [amount, setAmount] = useState(
    donationAmount || ""
  );

  // Don anonyme
  const [anonymous, setAnonymous] = useState(false);

  // Type sélectionné
  const [selectedType, setSelectedType] = useState(
    donationType || null
  );

  // Changement du montant
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Changement anonymat
  const handleAnonymousChange = (event) => {
    setAnonymous(event.target.checked);
  };

  // Sélection du type
  const handleTypeSelect = (typeId) => {
    setSelectedType(typeId);
  };

  // Continuer vers Payment
  const handleContinue = () => {
    if (!selectedType) {
      alert("Veuillez sélectionner un type de don.");
      return;
    }

    if (!amount || Number(amount) <= 0) {
      alert("Veuillez entrer un montant valide.");
      return;
    }

  navigate("/payment", {
  state: {
    campaignId,
    campaignName,
    campaignOrganization,
    amount: Number(amount),
    donationType: selectedType,
    anonymous,
  },
});
  };

  return (
    <div>
      <Header />

      <main
        className="
          min-h-screen
          w-full
          bg-[#F8F8FC]
        "
      >
        <div
          className="
            mx-auto
            w-full
            max-w-[1200px]
            px-[34px]
            pb-10
            pt-[30px]

            sm:px-6
            sm:pt-10

            md:px-8

            lg:px-10
            lg:pt-12
          "
        >
          {/* ================= INTRODUCTION ================= */}

          <div className="mt-2">
            <TypeIntro />
          </div>

          {/* ================= LISTE DES TYPES DE DONS ================= */}

          <div className="mt-8">
            <TypeList
              selectedType={selectedType}
              onTypeSelect={handleTypeSelect}
            />
          </div>

          {/* ================= FORMULAIRE DU MONTANT ================= */}

          <div className="mt-8">
            <AmountForm
              amount={amount}
              anonymous={anonymous}
              onAmountChange={handleAmountChange}
              onAnonymousChange={handleAnonymousChange}
              onContinue={handleContinue}
            />
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

export default DonationType;