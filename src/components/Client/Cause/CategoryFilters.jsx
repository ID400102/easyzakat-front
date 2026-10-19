import { useState } from "react";

const categories = [
  "Tous",
  "Familles",
  "Daaras",
  "Santé",
  "Éducation",
  "Dettes",
  "Financement",
];

function CategoryFilters() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  return (
    <section className="w-full">
      <div
        className="
          flex
          w-full
          gap-2
          overflow-x-auto
          pb-1
          scrollbar-none
        "
      >
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`
                shrink-0
                sm:flex-1
                sm:w-full
                rounded-full
                px-[18px]
                py-[9px]
                text-[12px]
                font-medium
                transition
                duration-200
                
                ${
                  isActive
                    ? "bg-[#005B4F] text-white"
                    : "bg-[#E8ECFA] text-[#555B63] hover:bg-[#DDE3F5]"
                }
              `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryFilters;