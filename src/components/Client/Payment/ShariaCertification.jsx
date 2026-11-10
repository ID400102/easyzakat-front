import { Award } from "lucide-react";

function ShariaCertification({
  title = "Certifié Sharia",
  description = "Conformité validée par le comité d'éthique.",
}) {
  return (
    <section
      className="
        flex
        w-full
        items-center
        gap-4
        rounded-[14px]
        bg-[#EEF1FC]
        px-5
        py-4

        sm:px-6
      "
    >
      {/* Badge */}

      <div
        className="
          flex
          h-[42px]
          w-[42px]
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-[#E1E5DC]
        "
      >
        <Award
          size={23}
          strokeWidth={1.7}
          className="text-[#A18A43]"
        />
      </div>

      {/* Text */}

      <div className="min-w-0">
        <h3
          className="
            text-[12px]
            font-bold
            text-[#303634]

            sm:text-[13px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-0.5
            text-[10px]
            leading-[1.35]
            text-[#626967]

            sm:text-[11px]
          "
        >
          {description}
        </p>
      </div>
    </section>
  );
}

export default ShariaCertification;