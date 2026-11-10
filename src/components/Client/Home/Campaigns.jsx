import eau from "../../../assets/eau.png";
import sante from "../../../assets/sante.png";

const campaigns = [
  {
    id: 1,
    title: "Construction de 3 puits solaires pour 500 familles.",
    description: "Construction de 3 puits solaires pour 500 familles.",
    progress: 85,
    remaining: "4 jours restants",
    collected: 4250000,
    target: 5000000,
    image: eau,
    category: "Eau",
  },
  {
    id: 2,
    title: "Santé pour Touba",
    description: "Équipements médicaux pour le centre de santé local.",
    progress: 42,
    remaining: "12 jours restants",
    collected: 2100000,
    target: 5000000,
    image: sante,
    category: "Santé",
  },
];

export default campaigns;