import { ArrowRight } from "lucide-react";

function DonationImpactCard({
  data,
  onViewReport,
}) {
  return (
    <section
      className="
        relative
        mt-5
        min-h-[360px]
        overflow-hidden
        rounded-[13px]
        bg-[#174E45]
        
        sm:min-h-[400px]

        lg:min-h-[440px]
      "
    >
      {/* Image */}

      <img
        src={data.image}
        alt=""
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
        "
      />

      {/* Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-[#003F37]/70
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          flex
          min-h-90
          flex-col
          justify-end
          p-12

          sm:min-h-100
          sm:p-14

          lg:min-h-110
          lg:max-w-150
          lg:p-18
        "
      >
        <h2
          className="
            max-w-[310px]
            text-[24px]
            font-semibold
            leading-[1.15]
            text-white

            sm:max-w-105
            sm:text-[28px]

            lg:text-[34px]
          "
        >
          {data.title}
        </h2>

        <p
          className="
            mt-4
            max-w-[300px]
            text-[12px]
            leading-[1.55]
            text-white/90

            sm:max-w-[420px]
            sm:text-[13px]

            lg:max-w-[500px]
            lg:text-[15px]
          "
        >
          {data.description}
        </p>

        <button
          type="button"
          onClick={onViewReport}
          className="
            mt-6
            flex
            min-h-[58px]
            w-[180px]
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white
            px-5
            text-center
            text-[11px]
            font-semibold
            leading-[1.2]
            text-[#004D43]
            transition
            hover:bg-[#F1F4F3]

            sm:w-[195px]
            sm:text-[12px]

            lg:w-[205px]
          "
        >
          {data.buttonLabel}

          <ArrowRight
            size={16}
            strokeWidth={2}
          />
        </button>
      </div>
    </section>
  );
}

export default DonationImpactCard;