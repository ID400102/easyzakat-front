import { UserRound } from "lucide-react";

function DonorInformation({
  formData,
  onChange,
}) {
  function handleChange(event) {
    const field = event.target.name;
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;

    onChange(field, value);
  }

  return (
    <section
      className="
        w-full
        rounded-[14px]
        bg-white
        p-5

        sm:p-6

        lg:p-7
      "
    >
      {/* Title */}

      <div className="flex items-center gap-2">
        <UserRound
          size={19}
          strokeWidth={2}
          className="text-[#005B4F]"
        />

        <h2
          className="
            text-[20px]
            font-semibold
            text-[#174E45]

            sm:text-[21px]
          "
        >
          Vos Coordonnées
        </h2>
      </div>

      {/* Form */}

      <div
        className="
          mt-6
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2
          md:gap-x-5
        "
      >
        {/* Nom */}

        <div>
          <label
            htmlFor="fullName"
            className="text-[13px] text-[#555D5B]"
          >
            Nom complet
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ex: Ahmad Diop"
            className="
              mt-1
              h-[44px]
              w-full
              rounded-[6px]
              border
              border-transparent
              bg-[#EEF1FC]
              px-4
              text-[13px]
              text-[#303634]
              outline-none
              placeholder:text-[#C1C6C9]
              focus:border-[#005B4F]
            "
          />
        </div>

        {/* Téléphone */}

        <div>
          <label
            htmlFor="phone"
            className="text-[13px] text-[#555D5B]"
          >
            Numéro de téléphone
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+221 77 000 00 00"
            className="
              mt-1
              h-[44px]
              w-full
              rounded-[6px]
              border
              border-transparent
              bg-[#EEF1FC]
              px-4
              text-[13px]
              text-[#303634]
              outline-none
              placeholder:text-[#C1C6C9]
              focus:border-[#005B4F]
            "
          />
        </div>

        {/* Email */}

        <div>
          <label
            htmlFor="email"
            className="text-[13px] text-[#555D5B]"
          >
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ahmad@example.sn"
            className="
              mt-1
              h-[44px]
              w-full
              rounded-[6px]
              border
              border-transparent
              bg-[#EEF1FC]
              px-4
              text-[13px]
              text-[#303634]
              outline-none
              placeholder:text-[#C1C6C9]
              focus:border-[#005B4F]
            "
          />
        </div>

        {/* Ville */}

        <div>
          <label
            htmlFor="city"
            className="text-[13px] text-[#555D5B]"
          >
            Ville
          </label>

          <input
            id="city"
            name="city"
            type="text"
            value={formData.city}
            onChange={handleChange}
            placeholder="Dakar"
            className="
              mt-1
              h-[44px]
              w-full
              rounded-[6px]
              border
              border-transparent
              bg-[#EEF1FC]
              px-4
              text-[13px]
              text-[#303634]
              outline-none
              placeholder:text-[#C1C6C9]
              focus:border-[#005B4F]
            "
          />
        </div>
      </div>

      {/* Options */}

      <div className="mt-6 space-y-3">
        <label
          className="
            flex
            cursor-pointer
            items-center
            gap-3
            text-[13px]
            text-[#303634]
          "
        >
          <input
            type="checkbox"
            name="anonymous"
            checked={formData.anonymous}
            onChange={handleChange}
            className="
              h-[17px]
              w-[17px]
              shrink-0
              accent-[#005B4F]
            "
          />

          Faire ce don de manière anonyme
        </label>

        <label
          className="
            flex
            cursor-pointer
            items-center
            gap-3
            text-[13px]
            text-[#303634]
          "
        >
          <input
            type="checkbox"
            name="whatsappReceipt"
            checked={formData.whatsappReceipt}
            onChange={handleChange}
            className="
              h-[17px]
              w-[17px]
              shrink-0
              accent-[#005B4F]
            "
          />

          Recevoir le reçu via WhatsApp
        </label>

        <label
          className="
            flex
            cursor-pointer
            items-center
            gap-3
            text-[13px]
            text-[#303634]
          "
        >
          <input
            type="checkbox"
            name="emailReceipt"
            checked={formData.emailReceipt}
            onChange={handleChange}
            className="
              h-[17px]
              w-[17px]
              shrink-0
              accent-[#005B4F]
            "
          />

          Recevoir le reçu par Email
        </label>
      </div>
    </section>
  );
}

export default DonorInformation;