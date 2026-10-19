import {
  Waves,
  Smartphone,
  CreditCard,
  Wallet,
  Landmark,
} from "lucide-react";

// ==========================================
// CONFIGURATION DES MOYENS DE PAIEMENT
// ==========================================

export const PAYMENT_METHOD_CONFIG = {
  wave: {
    icon: Waves,
    subtitle: "MOBILE MONEY",
    iconColor: "text-[#329B87]",
    iconBackground: "bg-[#E8F0FF]",
  },

  orange_money: {
    icon: Smartphone,
    subtitle: "RAPIDE & SÛR",
    iconColor: "text-[#FF7900]",
    iconBackground: "bg-[#E8F0FF]",
  },

  free_money: {
    icon: Wallet,
    subtitle: "MOBILE WALLET",
    iconColor: "text-[#8A7200]",
    iconBackground: "bg-[#E8F0FF]",
  },

  card: {
    icon: CreditCard,
    subtitle: "VISA / MASTERCARD",
    iconColor: "text-[#005B4F]",
    iconBackground: "bg-[#E8F0FF]",
  },

  bank_transfer: {
    icon: Landmark,
    subtitle: "COMPTE BANCAIRE",
    iconColor: "text-[#60666A]",
    iconBackground: "bg-[#E8F0FF]",
  },
};

// ==========================================
// LISTE DES MOYENS DE PAIEMENT
// ==========================================

export const PAYMENT_METHODS = [
  {
    id: "wave",
    name: "Wave",
    enabled: true,
  },

  {
    id: "orange_money",
    name: "Orange Money",
    enabled: true,
  },

  {
    id: "free_money",
    name: "Free Money",
    enabled: true,
  },

  {
    id: "card",
    name: "Carte bancaire",
    enabled: true,
  },

  {
    id: "bank_transfer",
    name: "Virement bancaire",
    enabled: true,
  },
];