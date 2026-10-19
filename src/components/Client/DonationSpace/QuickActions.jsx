import { ArrowRight } from "lucide-react";

import { QUICK_ACTIONS } from "./SpaceData";

function QuickActions({
  actions = QUICK_ACTIONS,
  onAction,
}) {
  return (
    <section
      className="
        mt-5
        rounded-[11px]
        bg-[#004D43]
        p-4

        sm:p-5
      "
    >
      <h2
        className="
          text-[10px]
          font-medium
          text-white

          sm:text-[11px]
        "
      >
        Actions Rapides
      </h2>

      <div className="mt-4 space-y-2">
        {actions.map(function (action) {
          const Icon = action.icon;

          return (
            <button
              key={action.id}
              type="button"
              onClick={function () {
                onAction(action.id);
              }}
              className="
                flex
                min-h-[52px]
                w-full
                items-center
                gap-3
                rounded-[8px]
                bg-[#125F52]
                px-3
                text-left
                transition
                duration-200
                hover:bg-[#176B5C]
              "
            >
              <div
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                "
              >
                <Icon
                  size={16}
                  strokeWidth={1.8}
                  className="text-[#C0E3DB]"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className="
                    text-[10px]
                    font-medium
                    text-white

                    sm:text-[11px]
                  "
                >
                  {action.title}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-[8px]
                    text-[#9BC9BE]

                    sm:text-[9px]
                  "
                >
                  {action.description}
                </p>
              </div>

              <ArrowRight
                size={14}
                className="text-[#83BDAF]"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default QuickActions;