import eau from "../../../assets/eau.png";
import sante from "../../../assets/sante.png";

const Campaigns = [
  {
    id: 1,
    image:eau ,
    category: "Familles",
    title: "Aide aux Familles Vulnérables",
    description:
      "Soutien alimentaire et financier pour 50 familles en milieu rural durant les mois bénis.",
    collected: "350 000 FCFA",
    goal: "500 000 FCFA",
    percentage: 75,
  },
  {
    id: 2,
    image: sante,
    category: "Éducation",
    title: "Réhabilitation des Classes",
    description:
      "Amélioration des conditions d'accueil d'encadrement et d'apprentissage pour les élèves.",
    collected: "420 000 FCFA",
    goal: "1 000 000 FCFA",
    percentage: 42,
  },
  {
    id: 3,
    image: eau,
    category: "Santé",
    title: "Fonds Santé & Secours",
    description:
      "Prise en charge des frais médicaux pour les malades démunis sans couverture sociale.",
    collected: "420 000 FCFA",
    goal: "500 000 FCFA",
    percentage: 92,
  },
];

export default Campaigns;