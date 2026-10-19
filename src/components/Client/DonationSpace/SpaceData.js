import {
  Calculator,
  HandCoins,
  Download,
} from "lucide-react";
import commerce from "../../../assets/commerce.png"
import eau from "../../../assets/eau.png"

export const QUICK_ACTIONS = [
  {
    id: "calculate-zakat",
    title: "Calculer ma Zakat",
    description: "Outil de précision 2026",
    icon: Calculator,
  },
  {
    id: "make-donation",
    title: "Faire un don",
    description: "Soutenir une campagne active",
    icon: HandCoins,
  },
  {
    id: "download-receipts",
    title: "Télécharger mes reçus",
    description: "Attestations fiscales (PDF)",
    icon: Download,
  },
];

export const DEFAULT_DASHBOARD_DATA = {
  user: {
    firstName: "Bonjour",
  },

  donationStats: {
    totalDonated: 1245000,
    annualChange: 12,
    familiesSupported: 3,
    foodKits: 12,
  },

  recentDonations: [
    {
      id: 1,
      date: "12/05/2024",
      type: "Zakat Al Maal",
      campaign: "Fond Général",
      amount: 500000,
    },
    {
      id: 2,
      date: "02/04/2024",
      type: "Sadaqa",
      campaign: "Eau Potable Touba",
      amount: 25000,
    },
    {
      id: 3,
      date: "15/03/2024",
      type: "Zakat Al Fitr",
      campaign: "Ramadan 2024",
      amount: 150000,
    },
  ],

  financialSerenity: {
    title: "Sérénité Financière",
    description:
      "Ne manquez jamais votre obligation spirituelle. Automatisez votre rappel annuel de Zakat pour une tranquillité d'esprit totale.",
    buttonLabel: "Programmer un rappel annuel",
    advisorName: "Ahmad Diop",
    advisorRole: "Votre conseiller Zakat",
    advisorImage: commerce,
  },

  impactReport: {
    title: "Votre impact est concret.",
    description:
      "En 2026, vos dons ont contribué à la construction de 2 nouveaux puits et au financement de l'éducation de 45 orphelins dans la région de Thiès.",
    buttonLabel: "Voir le rapport d'impact",
    image: eau,
  },
};