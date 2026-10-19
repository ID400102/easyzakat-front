import { useLocation, useNavigate } from "react-router-dom";
// import html2canvas from "html2canvas-pro";
// import { jsPDF } from "jspdf";
import DonationSuccess from "../../components/Client/Confirm/DonationSuccess";
import TransactionReceipt from "../../components/Client/Confirm/TransactionReceipt";
import DonationActions from "../../components/Client/Confirm/DonationActions";
import Header from "../../layouts/Header";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";

import {
  DONATION_ACTIONS,
} from "../../components/Client/Confirm/DonationConfirmationData";

function formatPaymentMethod(method) {
  const methods = {
    wave: "Wave",
    orange_money: "Orange Money",
    free_money: "Free Money",
    card: "Carte bancaire",
    bank_transfer: "Virement bancaire",
  };

  return methods[method] || method || "Non renseigné";
}

function formatDonationType(type) {
  const types = {
    zakat: "Zakat",
    sadaqa: "Sadaqa",
    ramadan: "Don Ramadan",
    urgence_sociale: "Urgence sociale",
  };

  return types[type] || type || "Don";
}

function Confirm() {
  const location = useLocation();
  const navigate = useNavigate();

  // Informations transmises depuis Payment.jsx
  const {
    paymentId,
    amount,
    paymentMethod,
    donationType,
    campaignId,
    campaignName,
    campaignOrganization,
    campaignImage,
    paymentStatus,
    paymentDate,
  } = location.state || {};

  // Récupérer la campagne sauvegardée dans le navigateur
  let savedCampaign = {};

  try {
    savedCampaign = JSON.parse(
      localStorage.getItem("easyzakat_selected_campaign") || "{}"
    );
  } catch (error) {
    console.error("Erreur de lecture de la campagne :", error);
  }

  // Vérifier que la campagne enregistrée correspond à celle choisie
  const savedCampaignMatches =
    campaignId != null &&
    savedCampaign.id != null &&
    String(campaignId) === String(savedCampaign.id);

  // Priorité au nom transmis par les pages précédentes
  const finalCampaignName =
    campaignName ||
    (savedCampaignMatches
      ? savedCampaign.name || savedCampaign.title
      : "") ||
    "Cause sélectionnée";

  const finalCampaignOrganization =
    campaignOrganization ||
    (savedCampaignMatches ? savedCampaign.organization : "") ||
    "";

  const finalCampaignImage =
    campaignImage ||
    (savedCampaignMatches ? savedCampaign.image : "") ||
    "";

  // Informations affichées sur le reçu
  const transactionDate = paymentDate
    ? new Date(paymentDate)
    : new Date();

  const transaction = {
    id: paymentId || "EZ-PAY",

    date: transactionDate.toLocaleDateString("fr-FR"),

    time: transactionDate.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    }),

    zakatType: formatDonationType(donationType),

    amount: Number(amount || 0),

    currency: "FCFA",

    paymentMethod: formatPaymentMethod(paymentMethod),

    status:
      paymentStatus === "success"
        ? "Paiement confirmé"
        : paymentStatus === "failed"
          ? "Paiement échoué"
          : "Paiement enregistré",
  };

  const cause = {
    title: finalCampaignName,
    name: finalCampaignName,
    organization: finalCampaignOrganization,
    image: finalCampaignImage,
  };

  const blockchain = {
    verified: false,
  };

  // 1. Télécharger le reçu en PDF
  const handleDownload = async () => {
    try {
      const receipt = document.getElementById("transaction-receipt");

      if (!receipt) {
        alert("Le reçu est introuvable.");
        return;
      }

      const canvas = await html2canvas(receipt, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const pdf = new jsPDF("p", "mm", "a4");

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;

      const ratio = Math.min(
        (pageWidth - margin * 2) / canvas.width,
        (pageHeight - margin * 2) / canvas.height
      );

      const width = canvas.width * ratio;
      const height = canvas.height * ratio;

      pdf.addImage(
        canvas.toDataURL("image/png"),
        "PNG",
        (pageWidth - width) / 2,
        (pageHeight - height) / 2,
        width,
        height
      );

      const safeId = String(transaction.id).replace(
        /[^a-zA-Z0-9_-]/g,
        "-"
      );

      pdf.save(`recu-easyzakat-${safeId}.pdf`);
    } catch (error) {
      console.error("Erreur PDF :", error);
      alert("Impossible de télécharger le reçu.");
    }
  };

  // 2. Partager le récapitulatif sur WhatsApp
  const handleShare = () => {
    const message = [
      "REÇU DE DON - EASYZAKAT",
      `Cause : ${cause.title}`,
      `Type : ${transaction.zakatType}`,
      `Montant : ${new Intl.NumberFormat("fr-FR").format(
        transaction.amount
      )} FCFA`,
      `Moyen de paiement : ${transaction.paymentMethod}`,
      `Référence : ${transaction.id}`,
      `Statut : ${transaction.status}`,
    ].join("\n");

    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  // 3. Accéder au tableau de bord administrateur
  const handleDashboard = () => {
    navigate("/profil");
  };

  // 4. Recommencer un nouveau don
  const handleNewDonation = () => {
    localStorage.removeItem("easyzakat_selected_campaign");

    navigate("/cause", {
      replace: true,
      state: null,
    });
  };

  const paymentSucceeded = paymentStatus === "success";

  return (
    <div>
      <Header />

      <main className="min-h-screen bg-[#f8f8ff] mb-20 text-gray-900">
        <div className="mx-auto w-full max-w-[760px]">
          <DonationSuccess
            title={
              paymentSucceeded
                ? "Merci, votre don a bien été reçu."
                : "Votre demande de paiement a été enregistrée."
            }
            message={
              paymentSucceeded
                ? "« Qu’Allah accepte votre Zakat, purifie vos biens et vous comble de Ses bénédictions infinies. »"
                : "Votre transaction est enregistrée. Sa confirmation définitive dépend du retour du prestataire de paiement."
            }
          />

          <TransactionReceipt
            transaction={transaction}
            cause={cause}
            blockchain={blockchain}
          />

          <DonationActions
            labels={DONATION_ACTIONS}
            onDownload={handleDownload}
            onShare={handleShare}
            onDashboard={handleDashboard}
            onNewDonation={handleNewDonation}
          />
        </div>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}

export default Confirm;