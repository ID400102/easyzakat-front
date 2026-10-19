
import { ArrowRight, Calculator } from "lucide-react";
import heroImage from "../../../assets/hero.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="px-4 pt-6 sm:px-6 sm:pt-10 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">

        <div className="overflow-hidden rounded-xl">
          <img
            src={heroImage}
            alt="Don et solidarité"
            className="h-40 w-full object-cover sm:h-64 lg:h-80"
          />
        </div>

        <div className="mt-5 w-full">
          <h1 className="text-xl font-bold leading-tight text-[#003f35] md:text-2xl lg:text-4xl">
            Calculez, donnez et suivez votre Zakat en toute confiance.
          </h1>

          <p className="mt-3 w-full text-xs leading-5 text-gray-500 md:text-xl lg:text-2xl">
            Une plateforme transparente dédiée à la communauté sénégalaise
            pour automatiser vos obligations religieuses et suivre votre impact.
          </p>

          <div className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Link
              to="/calculer-zakat"
              className="flex items-center justify-center gap-2 rounded-full bg-[#003f35] px-5 py-3 text-[10px] font-semibold text-white transition hover:bg-[#005443] sm:text-xs"
            >
              <Calculator size={14} />
              Calculer ma Zakat
            </Link>

            <Link
              to="/cause"
              className="flex items-center justify-center gap-2 rounded-full border border-[#003f35] px-5 py-3 text-[10px] font-semibold text-[#003f35] transition hover:bg-[#eaf5f1] sm:text-xs"
            >
              Faire un don
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}