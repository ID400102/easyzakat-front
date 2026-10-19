import {
  Banknote,
  Heart,
  Moon,
  Asterisk,
} from "lucide-react";

const Types = [
  {
    id: "zakat",
    title: "Zakat",
    badge: "Mandatory",
    description:
      "L'aumône légale purifiant vos biens (2.5% de votre épargne annuelle).",
    icon: Banknote,
    variant: "green",
  },

  {
    id: "sadaqa",
    title: "Sadaqa",
    badge: "Voluntary",
    description:
      "Un acte de générosité spontané pour soutenir diverses causes sociales.",
    icon: Heart,
    variant: "gray",
  },

  {
    id: "ramadan",
    title: "Don Ramadan",
    badge: "Special",
    description:
      "Fidya, Kaffara ou Iftar pour accompagner nos frères durant le mois saint.",
    icon: Moon,
    variant: "yellow",
  },

  {
    id: "urgence_sociale",
    title: "Urgence sociale",
    badge: "Priority",
    description:
      "Aide immédiate pour les familles en situation de crise ou catastrophes.",
    icon: Asterisk,
    variant: "red",
  },
];

export default Types;