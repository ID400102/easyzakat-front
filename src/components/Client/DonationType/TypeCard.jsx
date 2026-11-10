


function getIconBackground(variant) {
  const backgrounds = {
    green: "bg-[#005B4F]",
    gray: "bg-[#E2E1DF]",
    yellow: "bg-[#D4AD24]",
    red: "bg-[#FFD8D5]",
  };

  return backgrounds[variant] || backgrounds.green;
}

function getIconColor(variant) {
  const colors = {
    green: "text-white",
    gray: "text-[#666666]",
    yellow: "text-[#4A4300]",
    red: "text-[#B00000]",
  };

  return colors[variant] || colors.green;
}

function getBadgeBackground(variant) {
  const backgrounds = {
    green: "bg-[#FFE28A]",
    gray: "bg-[#E5E4E2]",
    yellow: "bg-[#FFE28A]",
    red: "bg-[#FFD8D5]",
  };

  return backgrounds[variant] || backgrounds.green;
}

function getBadgeColor(variant) {
  const colors = {
    green: "text-[#705B00]",
    gray: "text-[#555555]",
    yellow: "text-[#705B00]",
    red: "text-[#B00000]",
  };

  return colors[variant] || colors.green;
}

function DonationTypeCard({
  title,
  badge,
  description,
  icon: Icon,
  variant,
  selected,
  onSelect,
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`
        flex
        w-full
        items-start
        gap-5
        rounded-[16px]
        border
        bg-white
        p-6
        text-left
        transition-all
        duration-200

        hover:-translate-y-[1px]
        hover:shadow-md

        sm:p-7


        ${
          selected
            ? "border-[#005B4F] shadow-[0_0_0_2px_rgba(0,91,79,0.12)]"
            : "border-[#E2E4E3]"
        }
      `}
    >
      <div className="flex w-full sm:flex-col items-center text-center">
                {/* Icône */}
        <div
          className={`
            flex
            h-[54px]
            w-[54px]
            shrink-0
            items-center
            justify-center
            rounded-[8px]

            ${getIconBackground(variant)}
          `}
        >
          <Icon
            size={25}
            strokeWidth={2}
            className={getIconColor(variant)}
          />
        </div>

        {/* Contenu */}
        <div className="min-w-0 flex-1">
          <h2
            className="
              text-[23px]
              font-semibold
              leading-[1.15]
              text-[#004D43]
            "
          >
            {title}
          </h2>

          <span
            className={`
              mt-3
              inline-flex
              rounded-full
              px-3
              py-1
              text-[12px]
              font-medium

              ${getBadgeBackground(variant)}
              ${getBadgeColor(variant)}
            `}
          >
            {badge}
          </span>

          <p
            className="
              mt-2
              max-w-[330px]
              text-[16px]
              leading-[1.5]
              text-[#555B59]
            "
          >
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default DonationTypeCard;