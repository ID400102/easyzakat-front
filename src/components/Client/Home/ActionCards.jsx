import {
  Calculator,
  HandHeart
} from "lucide-react";

import { Link } from "react-router-dom";

function ActionCards() {
  return (
    <section className="mt-7 grid grid-cols-2 gap-3 md:gap-5 lg:w-full">

      {/* Calcul */}
      <Link
        to="/calculer-zakat"
        className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:min-h-[135px]"
      >

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9eeec] text-[#00634f] transition group-hover:bg-[#00634f] group-hover:text-white">
          <Calculator size={22} />
        </div>

        <span className="mt-3 text-center text-xs font-bold sm:text-sm">
          Calculer ma
          <br />
          Zakat
        </span>

      </Link>

      {/* Don */}
      <Link
        to="/cause"
        className="group flex min-h-[110px] flex-col items-center justify-center rounded-2xl bg-[#003f35] shadow-lg transition hover:-translate-y-1 hover:bg-[#005b49] sm:min-h-[135px]"
      >

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white">
          <HandHeart size={22} />
        </div>

        <span className="mt-3 text-center text-xs font-bold text-white sm:text-sm">
          Faire un don
        </span>

      </Link>

    </section>
  );
}

export default ActionCards;