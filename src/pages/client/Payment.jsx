import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";
import PaymentIntro from "../../components/Client/Payment/PaymentIntro";
import PaymentMethods from "../../components/Client/Payment/PaymentMethods";
import DonorInformation from "../../components/Client/Payment/DonorInformation";
import DonationSummary from "../../components/Client/Payment/DonationSummary";
import ShariaCertification from "../../components/Client/Payment/ShariaCertification";

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
  const campaignName = location.state?.campaignName || "";
const campaignOrganization =
  location.state?.campaignOrganization || "";

  // Informations reçues depuis /type
  const {
    campaignId,
    amount,
    donationType,
    anonymous,
  } = location.state || {};

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
    cause: campaignId || "Cause sélectionnée",
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
    try {
      setLoading(true);
      setError("");

      // Vérification montant
      if (!amount || Number(amount) <= 0) {
        setError("Le montant du don est invalide.");
        return;
      }

      // Vérification type
      if (!donationType) {
        setError("Veuillez sélectionner un type de don.");
        return;
      }

      // ============================
      // 1. CRÉER LE DON
      // ============================

      const donationPayload = {
        type: donationType,
        amount: Number(amount),
        anonymous: formData.anonymous,
        paymentMethod: selectedMethod,

        // On envoie campaign seulement
        // si c'est un vrai ObjectId MongoDB
        campaign:
          campaignId &&
          /^[0-9a-fA-F]{24}$/.test(String(campaignId))
            ? campaignId
            : null,
      };

      console.log(
        "📤 Création du don :",
        donationPayload
      );

      const donationResponse =
        await createDonation(donationPayload);

      console.log(
        "✅ Don créé :",
        donationResponse
      );

      const createdDonation =
        donationResponse.donation ||
        donationResponse.data ||
        donationResponse;

      const donationId =
        createdDonation._id ||
        createdDonation.id;

      if (!donationId) {
        throw new Error(
          "L'identifiant du don n'a pas été retourné par le backend."
        );
      }

      // ============================
      // 2. CRÉER LE PAIEMENT
      // ============================

     const paymentPayload = {
  donation: donationId,
  provider: selectedMethod,
  fees: 0,
};

      console.log(
        "📤 Création du paiement :",
        paymentPayload
      );

      const paymentResponse =
        await createPayment(paymentPayload);

      console.log(
        "✅ Paiement créé :",
        paymentResponse
      );

      const createdPayment =
        paymentResponse.payment ||
        paymentResponse.data ||
        paymentResponse;

      const paymentId =
        createdPayment._id ||
        createdPayment.id;

      if (!paymentId) {
        throw new Error(
          "L'identifiant du paiement n'a pas été retourné par le backend."
        );
      }

      // ============================
      // 3. ALLER À LA CONFIRMATION
      // ============================

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
    paymentStatus: createdPayment.status,
    paymentDate: createdPayment.createdAt,
  },
});
    } catch (err) {
      console.error(
        "❌ Erreur paiement :",
        err
      );

      setError(
        err.message ||
        "Une erreur est survenue pendant le paiement."
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