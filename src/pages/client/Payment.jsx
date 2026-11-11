import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";
import PaymentIntro from "../../components/client/Payment/PaymentIntro";
import PaymentMethods from "../../components/client/Payment/PaymentMethods";
import DonorInformation from "../../components/client/Payment/DonorInformation";
import DonationSummary from "../../components/client/Payment/DonationSummary";
import ShariaCertification from "../../components/client/Payment/ShariaCertification";

import {
  createDonation,
  createPayment,
} from "../../services/Api";

const INITIAL_FORM_DATA = {
  fullName: "",
  phone: "",
  email: "",
  city: "",
  anonymous: false,
  whatsappReceipt: true,
  emailReceipt: true,
};

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("ÉTAT REÇU DANS PAYMENT :", location.state);
console.log(
  "CAMPAGNE ENREGISTRÉE :",
  localStorage.getItem("easyzakat_selected_campaign")
);

const state = location.state || {};

const savedCampaign = (() => {
  try {
    return JSON.parse(
      localStorage.getItem("easyzakat_selected_campaign") || "null"
    );
  } catch {
    return null;
  }
})();

const campaignId = state.campaignId ?? savedCampaign?.id ?? null;

const campaignName =
  state.campaignName ||
  savedCampaign?.name ||
  savedCampaign?.title ||
  "";

const campaignOrganization =
  state.campaignOrganization ||
  savedCampaign?.organization ||
  "";

const amount = state.amount;
const donationType = state.donationType;
const anonymous = state.anonymous;


  const [formData, setFormData] = useState({
    ...INITIAL_FORM_DATA,
    anonymous: anonymous || false,
  });

  const [selectedMethod, setSelectedMethod] = useState("wave");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Don affiché dans le résumé
   const donation = {
  type: donationType || "zakat",
  cause: campaignName || "Cause non précisée",
  campaignName,
  amount: Number(amount || 0),
  serviceFee: 0,
  total: Number(amount || 0),
  anonymous: formData.anonymous,
};

  function handleFormChange(field, value) {
    setFormData(function (currentData) {
      return {
        ...currentData,
        [field]: value,
      };
    });
  }

  function handleMethodChange(methodId) {
    setSelectedMethod(methodId);
  }


async function handlePay() {
  const fullName = formData.fullName.trim();
  const phone = formData.phone.trim();
  const email = formData.email.trim();
  const city = formData.city.trim();

  // Vérifier le montant
  if (!Number.isFinite(Number(amount)) || Number(amount) <= 0) {
    setError("Veuillez saisir un montant valide.");
    return;
  }

  // Vérifier le type de don
  if (!donationType) {
    setError("Veuillez sélectionner un type de don.");
    return;
  }

  // Vérifier les coordonnées
  if (!fullName || !phone || !email || !city) {
    setError(
      "Veuillez remplir votre nom complet, téléphone, e-mail et ville."
    );
    return;
  }

  // Vérifier le format de l'e-mail
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Veuillez saisir une adresse e-mail valide.");
    return;
  }

  // Vérifier le téléphone
  const phoneDigits = phone.replace(/\D/g, "");

  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    setError("Veuillez saisir un numéro de téléphone valide.");
    return;
  }

  if (!selectedMethod) {
    setError("Veuillez sélectionner une méthode de paiement.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const nameParts = fullName.split(" ").filter(Boolean);

const donationPayload = {
  type: donationType,
  amount: Number(amount),
  anonymous: formData.anonymous,
  paymentMethod: selectedMethod,

  campaign:
    campaignId &&
    /^[0-9a-fA-F]{24}$/.test(String(campaignId))
      ? campaignId
      : null,

  guestInfo: {
    firstName: nameParts[0] || "",
    lastName: nameParts.slice(1).join(" "),
    email,
    phone,
  },
};

    

    const donationResponse = await createDonation(donationPayload);

    const createdDonation =
      donationResponse.donation ||
      donationResponse.data ||
      donationResponse;

    const donationId = createdDonation._id || createdDonation.id;

    if (!donationId) {
      throw new Error(
        "L'identifiant du don n'a pas été retourné par le backend."
      );
    }

    const paymentResponse = await createPayment({
  donation: donationId,
  provider: selectedMethod,
  fees: 0,
  guestPaymentToken: donationResponse.guestPaymentToken,
});

    
    const createdPayment =
      paymentResponse.payment ||
      paymentResponse.data ||
      paymentResponse;

    const paymentId = createdPayment._id || createdPayment.id;

    if (!paymentId) {
      throw new Error(
        "L'identifiant du paiement n'a pas été retourné par le backend."
      );
    }

    navigate("/confirm", {
      state: {
        paymentId,
        amount: Number(createdPayment.amount ?? amount),
        paymentMethod: createdPayment.provider || selectedMethod,
        donationType,
        campaignId,
        campaignName,
        campaignOrganization,
        anonymous: formData.anonymous,
        donor: { fullName, phone, email, city },
        paymentStatus: createdPayment.status,
        paymentDate: createdPayment.createdAt,
      },
    });
  } catch (err) {
    console.error("Erreur paiement :", err);
    setError(
      err.message || "Une erreur est survenue pendant le paiement."
    );
  } finally {
    setLoading(false);
  }
}


  return (
    <main
      className="
        min-h-screen
        w-full
        bg-[#F8F9FD]
      "
    >
      <Header />

      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-5
          pb-12
          pt-8
          mb-20

          sm:px-7
          sm:pt-10

          md:px-10

          lg:px-12
          lg:pt-12
        "
      >
        {/* ================= INTRO ================= */}

        <PaymentIntro />

        {/* Message erreur */}

        {error && (
          <div
            className="
              mt-5
              rounded-xl
              bg-red-50
              px-4
              py-3
              text-sm
              text-red-600
            "
          >
            {error}
          </div>
        )}

        {/* ================= PAYMENT ================= */}

        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-6

            lg:mt-10
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-start
          "
        >
          {/* Colonne gauche */}

          <div className="space-y-6">
            <PaymentMethods
              selectedMethod={selectedMethod}
              onMethodChange={handleMethodChange}
            />

            <DonorInformation
              formData={formData}
              onChange={handleFormChange}
            />
          </div>

          {/* Colonne droite */}

          <div className="space-y-5">
            <DonationSummary
              donation={donation}
              onPay={handlePay}
              loading={loading}
            />

            <ShariaCertification />
          </div>
        </div>
      </div>

      <BottomNav />
      <Footer />
    </main>
  );
}

export default Payment;