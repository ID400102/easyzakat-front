import { FiShield, FiZap } from "react-icons/fi";
import { Link} from "react-router-dom";

function DonationRecommendation() {
  return (
    <section
      className="
        w-full
        rounded-[10px]
        bg-[#005B4F]
        px-5
        py-5
        text-white
        shadow-[0_5px_12px_rgba(0,0,0,0.15)]
        
        sm:px-6
        sm:py-6
        
        lg:max-w-[700px]
      "
    >
      {/* Badge */}
      <div className="mb-2 flex items-center gap-2">
        <FiShield
          size={16}
          className="shrink-0 text-[#9DDCCF]"
        />

        <span
          className="
            text-[12px]
            font-medium
            uppercase
            tracking-[1px]
            text-[#9DDCCF]
          "
        >
          Option recommandée
        </span>
      </div>

      {/* Title */}
      <h2
        className="
          text-[19px]
          font-semibold
          leading-[1.25]
          
          sm:text-[21px]
        "
      >
        Confier à EasyZakat
      </h2>

      {/* Description */}
      <p
        className="
          mt-2
          max-w-[520px]
          text-[14px]
          leading-[1.5]
          text-[#A9D9D1]
        "
      >
        Nos algorithmes de transparence et nos équipes locales identifient les
        urgences absolues. En choisissant cette option, votre don est
        redistribué là où le besoin est le plus criant en moins de 24h.
      </p>

      {/* Button */}
      <Link
        to="/type"
        className="
          mt-4
          flex
          h-[56px]
          w-full
          items-center
          justify-center
          gap-3
          rounded-[9px]
          bg-white
          text-[13px]
          font-semibold
          text-[#004D43]
          transition
          duration-200
          hover:bg-[#F1F7F5]
          active:scale-[0.98]
          
          sm:w-[194px]
        "
      >
        <span>Confier ma Zakat</span>

        <FiZap
          size={19}
          strokeWidth={2.5}
        />
      </Link>
    </section>
  );
};

export default DonationRecommendation;