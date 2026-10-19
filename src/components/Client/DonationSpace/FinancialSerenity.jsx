import {
  AlarmClock,
  ArrowRight,
} from "lucide-react";

function FinancialSerenity({
  data,
  onScheduleReminder,
}) {
  return (
    <section
      className="
        mt-5
        overflow-hidden
        rounded-[12px]
        border
        border-[#B8E4DE]
        bg-[#ECF4FF]
        p-4

        sm:p-5

        lg:p-6
      "
    >
      <div className="flex items-center gap-2">
        <AlarmClock
          size={19}
          className="text-[#005B4F]"
          strokeWidth={1.7}
        />

        <h2
          className="
            text-[16px]
            font-semibold
            text-[#004D43]

            sm:text-[18px]
          "
        >
          {data.title}
        </h2>
      </div>

      <p
        className="
          mt-3
          max-w-[600px]
          text-[11px]
          leading-[1.5]
          text-[#626967]

          sm:text-[12px]

          lg:text-[13px]
        "
      >
        {data.description}
      </p>

      <button
        type="button"
        onClick={onScheduleReminder}
        className="
          mt-5
          flex
          min-h-[44px]
          w-full
          items-center
          justify-center
          gap-2
          rounded-[7px]
          bg-[#004D43]
          px-4
          text-[10px]
          font-medium
          text-white
          transition
          hover:bg-[#003F37]

          sm:w-auto
        "
      >
        <AlarmClock
          size={14}
          strokeWidth={1.8}
        />

        {data.buttonLabel}

        <ArrowRight
          size={14}
          strokeWidth={1.8}
        />
      </button>

      {/* Advisor */}

      <div className="mt-6 flex items-center gap-3">
        <img
          src={data.advisorImage}
          alt={data.advisorName}
          className="
            h-10
            w-10
            shrink-0
            rounded-full
            object-cover
          "
        />

        <div>
          <p
            className="
              text-[10px]
              font-semibold
              text-[#004D43]
            "
          >
            {data.advisorName}
          </p>

          <p
            className="
              mt-0.5
              text-[8px]
              text-[#6B7370]
            "
          >
            {data.advisorRole}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinancialSerenity;