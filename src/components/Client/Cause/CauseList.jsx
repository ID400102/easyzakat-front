import CauseCard from "./CauseCard";
import orphelin from "../../../assets/orphelin.png";
import podor from "../../../assets/podor.png";
import commerce from "../../../assets/commerce.png";

const causes = [
  {
    id: 1,
    image: orphelin,
    category: "Éducation",
    organization: "Fondation Education Pour Tous",
    title: "Bourses d'études pour 50 orphelins à Touba",
    amount: "7.5M FCFA",
    goal: "10M",
    percentage: 75,
    donors: 240,
  },

  {
    id: 2,
    image: podor,
    category: "Santé",
    organization: "Croissant Rouge Sénégal",
    title: "Accès à l'eau potable : Forage à Podor",
    amount: "2.1M FCFA",
    goal: "5M",
    percentage: 42,
    donors: 86,
  },

  {
    id: 3,
    image: commerce,
    category: "Dettes",
    organization: "Entraide Communautaire",
    title: "Désendettement des petits commerçants",
    amount: "12.8M FCFA",
    goal: "15M",
    percentage: 85,
    donors: 412,
  },

  {
    id: 4,
    image: commerce,
    category: "Financement",
    organization: "Commercants unis",
    title: "Financement des petits commerces",
    amount: "20M FCFA",
    goal: "30M",
    percentage: 55,
    donors: 402,
  },
];

function CauseList() {
  return (
    <section
      className="
        grid
        w-full
        grid-cols-1
        gap-[18px]
        
        sm:grid-cols-2
        
        lg:grid-cols-3
        lg:gap-6
        
        xl:grid-cols-4
      "
    >
      {causes.map((cause) => (
        <CauseCard
          key={cause.id}
          {...cause}
        />
      ))}
    </section>
  );
};

export default CauseList;