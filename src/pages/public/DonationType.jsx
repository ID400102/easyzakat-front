
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import TypeIntro from "../../components/DonationType/TypeIntro";
import TypeList from "../../components/DonationType/TypeList";
import AmountForm from "../../components/DonationType/AmountForm";
import BottomNav from "../../layouts/BottomNav";

function DonationType() {
  const navigate = useNavigate();
  const location = useLocation();

  // Informations reçues depuis la page Details
  const state = location.state || {};

  const campaignId =
    state.campaignId ||
    state.campaign?._id ||
    state.campaign?.id ||
    null;

  const campaignName =
    state.campaignName ||
    state.campaignTitle ||
    state.campaign?.name ||
    state.campaign?.title ||
    state.campaign?.campaignName ||
    "";

  const campaignOrganization =
    state.campaignOrganization ||
    state.campaign?.organization?.name ||
    "";

  const donationAmount = state.donationAmount ?? state.amount ?? "";
  const donationType = state.donationType || null;

  // Montant
  const [amount, setAmount] = useState(donationAmount);

  // Don anonyme
  const [anonymous, setAnonymous] = useState(false);

  // Type sélectionné
  const [selectedType, setSelectedType] = useState(donationType);

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

    if (!amount || !Number.isFinite(Number(amount)) || Number(amount) <= 0) {
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

      <main className="min-h-screen w-full bg-[#F8F8FC]">
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
          <div className="mt-2">
            <TypeIntro />
          </div>

          <div className="mt-8">
            <TypeList
              selectedType={selectedType}
              onTypeSelect={handleTypeSelect}
            />
          </div>

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
