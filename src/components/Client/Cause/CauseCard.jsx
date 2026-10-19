import { Link } from "react-router-dom";

function CauseCard({
  image,
  category,
  organization,
  title,
  amount,
  goal,
  percentage,
  donors,
}) {
  return (
    <article
      className="
        w-full
        overflow-hidden
        rounded-[10px]
        border
        border-[#CDD5D2]
        bg-white
        
        transition
        duration-200
        hover:-translate-y-[2px]
        hover:shadow-md
      "
    >
      {/* ================= IMAGE ================= */}
      <div className="relative aspect-[1.78] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Category badge */}
        <span
          className="
            absolute
            right-3
            top-3
            flex
            items-center
            gap-1
            rounded-full
            bg-white
            px-2
            py-1
            text-[10px]
            font-medium
            text-[#23453F]
            shadow-sm
          "
        >
          {category}
        </span>
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          px-[18px]
          pb-[18px]
          pt-[17px]
        "
      >
        {/* Organization */}
        <p
          className="
            text-[10px]
            font-normal
            text-[#6B6F72]
          "
        >
          {organization}
        </p>

        {/* Title */}
        <h2
          className="
            mt-1
            text-[19px]
            font-semibold
            leading-[1.2]
            text-[#004D43]
          "
        >
          {title}
        </h2>

        {/* Amount + percentage */}
        <div className="mt-5 flex items-end justify-between">
          <div>
            <p
              className="
                text-[19px]
                font-bold
                leading-none
                text-[#004D43]
              "
            >
              {amount}
            </p>

            <p
              className="
                mt-1
                text-[9px]
                text-[#777D7D]
              "
            >
              Récoltés sur {goal}
            </p>
          </div>

          <span
            className="
              text-[10px]
              font-semibold
              text-[#8D7918]
            "
          >
            {percentage}%
          </span>
        </div>

        {/* Progress bar */}
        <div
          className="
            mt-2
            h-[7px]
            w-full
            overflow-hidden
            rounded-full
            bg-[#E1E7F4]
          "
        >
          <div
            className="
              h-full
              rounded-full
              bg-[#005B4F]
            "
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        {/* Donors */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex -space-x-1">
            <span className="h-[16px] w-[16px] rounded-full border border-white bg-[#A6E6D7]" />
            <span className="h-[16px] w-[16px] rounded-full border border-white bg-[#82D9C7]" />
            <span className="h-[16px] w-[16px] rounded-full border border-white bg-[#D9DEDC]" />
          </div>

          <span
            className="
              text-[10px]
              text-[#656B6B]
            "
          >
            +{donors} donateurs
          </span>
        </div>

        {/* CTA */}
        <Link
          to="/type"
          className="
            mt-5
            flex
            h-[45px]
            w-full
            items-center
            justify-center
            rounded-[9px]
            bg-[#004D43]
            text-[12px]
            font-semibold
            text-white
            transition
            duration-200
            hover:bg-[#003F37]
            active:scale-[0.98]
          "
        >
          Choisir cette cause
        </Link>
      </div>
    </article>
  );
};

export default CauseCard;