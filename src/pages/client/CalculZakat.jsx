import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../layouts/Header";
import ZakatAssets from "../../components/Client/Zakat/ZakatAssets";
import ZakatDebts from "../../components/Client/Zakat/ZakatDebts";
import ZakatNote from "../../components/Client/Zakat/ZakatNote";
import Recapitulatif from "../../components/Client/Zakat/Recapitulatif";
import Footer from "../../layouts/Footer";
import BottomNav from "../../layouts/BottomNav";
import {
  calculateZakat as calculateZakatAPI
} from "../../services/Api";

function CalculZakat() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    cash: "",
    bank: "",
    savings: "",
    gold: "",
    silver: "",
    merchandise: "",
    receivables: "",
    otherAssets: "",
    debts: "",
    immediateObligations: "",
  });

  const [totalActifs, setTotalActifs] = useState(0);
  const [dettes, setDettes] = useState(0);
  const [assiette, setAssiette] = useState(0);
  const [zakat, setZakat] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ==========================================
  // VÉRIFIER LA CONNEXION
  // ==========================================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // ==========================================
  // MODIFIER LES CHAMPS
  // ==========================================
  const handleChange = (name, value) => {
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ==========================================
  // CALCULER LA ZAKAT AVEC LE BACKEND
  // ==========================================
  const calculateZakat = async () => {
    try {
      setLoading(true);
      setError("");

      const data = await calculateZakatAPI({
        cash: Number(form.cash || 0),
        bankBalance: Number(form.bank || 0),
        savings: Number(form.savings || 0),
        gold: Number(form.gold || 0),
        silver: Number(form.silver || 0),
        tradeGoods: Number(form.merchandise || 0),
        receivables: Number(form.receivables || 0),
        otherAssets: Number(form.otherAssets || 0),
        shortTermDebt: Number(form.debts || 0),
        immediateObligations: Number(
          form.immediateObligations || 0
        ),
        nisab: 500000,
      });

      console.log("Résultat Zakat :", data);

      // Résultat provenant du backend
      const result = data.result;

      setTotalActifs(result.totalAssets || 0);
      setDettes(result.totalDebts || 0);
      setAssiette(result.zakatableAmount || 0);
      setZakat(result.zakatAmount || 0);

    } catch (err) {
      console.error("Erreur calcul Zakat :", err);

      setError(
        err.message || "Erreur lors du calcul de la Zakat"
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // ALLER VERS LES CAUSES
  // ==========================================
  const handleDonate = () => {
    if (!zakat || zakat <= 0) {
      setError(
        "Votre montant de Zakat est inférieur au Nisab."
      );
      return;
    }

    navigate("/cause", {
      state: {
        donationType: "zakat",
        amount: zakat,
      },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f8fc] text-[#143f35]">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pb-28 pt-7 sm:px-6 sm:pt-9 lg:px-10 lg:pb-0 lg:pt-12">

        {/* TITRE */}
        <section className="mb-7 sm:mb-9">
          <h1 className="text-[28px] font-bold leading-tight tracking-[-0.7px] sm:text-4xl lg:text-[42px]">
            Calculez votre Zakat
          </h1>

          <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#59605d] sm:text-[15px] sm:leading-6">
            Renseignez vos biens et dettes pour déterminer votre contribution
            annuelle.
          </p>
        </section>

        {/* ERREUR */}
        {error && (
          <div className="mb-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            {error}
          </div>
        )}

        <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-7">

          {/* GAUCHE */}
          <div className="lg:col-span-8">

            <ZakatAssets
              form={form}
              handleChange={handleChange}
            />

            <div className="mt-5 space-y-5">

              <ZakatDebts
                form={form}
                handleChange={handleChange}
                onCalculate={calculateZakat}
                loading={loading}
              />

              <ZakatNote />

            </div>
          </div>

          {/* DROITE */}
          <div className="lg:col-span-4">

            <Recapitulatif
              totalActifs={totalActifs}
              dettes={dettes}
              assiette={assiette}
              zakat={zakat}
              onDonate={handleDonate}
            />

          </div>
        </div>
      </main>

      {/* BARRE MOBILE */}
      <div className="fixed bottom-[61px] left-0 right-0 z-40 bg-[#086c51] shadow-[0_-3px_12px_rgba(0,0,0,0.12)] lg:hidden">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-[9px] sm:px-6 sm:py-3">

          <div>
            <p className="text-[9px] leading-3 text-white/60 sm:text-[11px]">
              Ma Zakat
            </p>

            <p className="text-[17px] font-bold leading-5 text-white sm:text-xl">
              {new Intl.NumberFormat("fr-FR", {
                maximumFractionDigits: 0,
              }).format(zakat)}{" "}
              FCFA
            </p>
          </div>

          <button
            type="button"
            onClick={handleDonate}
            disabled={!zakat || zakat <= 0}
            className="rounded-[5px] bg-[#e8c944] px-6 py-3 text-[11px] font-semibold text-[#4c461d] shadow-sm transition hover:bg-[#dabb31] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-3.5"
          >
            Donner
          </button>

        </div>
      </div>

      {/* NAVIGATION MOBILE */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#e1e1e1] bg-white lg:hidden">
        <div className="mx-auto grid h-[61px] max-w-lg grid-cols-5">
          <BottomNav />
          <Footer />
        </div>
      </nav>

      <Footer />
    </div>
  );
}

export default CalculZakat;