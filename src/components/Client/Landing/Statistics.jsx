
import { useEffect, useState } from "react";

import { API_URL } from "../../../services/Api";

const fallbackStats = {
  totalDonated: 12500000,
  donationsCount: 320,
  beneficiariesCount: 145,
  organizationsCount: 8,
};

function AnimatedNumber({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const target = Math.max(0, Number(value) || 0);
    const duration = 1600;
    let startTime = null;
    let frameId;

    if (target === 0) {
      setCount(0);
      return;
    }

    function animate(timestamp) {
      if (startTime === null) {
        startTime = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * easedProgress));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    }

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, [value]);

  return <>{Math.round(count).toLocaleString("fr-FR")}</>;
}

function Statistics() {
  const [stats, setStats] = useState(fallbackStats);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStatistics() {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${API_URL}/dashboard`, {
          signal: controller.signal,
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
        });

        if (!response.ok) {
          throw new Error(`Erreur API : ${response.status}`);
        }

        const result = await response.json();
        const data = result.data || result.stats || result.dashboard || result;

        setStats({
          totalDonated: Number(
            data.totalDonated ?? data.totalCollected ?? fallbackStats.totalDonated
          ),
          donationsCount: Number(
            data.donationsCount ?? fallbackStats.donationsCount
          ),
          beneficiariesCount: Number(
            data.beneficiariesCount ??
              data.beneficiariesHelped ??
              fallbackStats.beneficiariesCount
          ),
          organizationsCount: Number(
            data.organizationsCount ?? fallbackStats.organizationsCount
          ),
        });
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(
            "Erreur de chargement des statistiques :",
            error
          );
        }
      }
    }

    fetchStatistics();

    return () => controller.abort();
  }, []);

  const statistics = [
    {
      value: stats.totalDonated,
      unit: "FCFA",
      label: "TOTAL COLLECTÉ",
    },
    {
      value: stats.donationsCount,
      unit: "",
      label: "DONS EFFECTUÉS",
    },
    {
      value: stats.beneficiariesCount,
      unit: "",
      label: "BÉNÉFICIAIRES",
    },
    {
      value: stats.organizationsCount,
      unit: "",
      label: "ORGANISATIONS PARTENAIRES",
    },
  ];

  return (
    <section className="mx-auto mt-8 w-full max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-4">
        {statistics.map((statistic) => (
          <div
            key={statistic.label}
            className="flex min-h-20 flex-col items-center justify-center rounded-lg bg-white px-2 py-3 text-center shadow-sm sm:min-h-28 sm:px-4"
          >
            <p className="text-[15px] font-bold leading-tight text-[#003527] sm:text-2xl">
              <AnimatedNumber value={statistic.value} />
            </p>

            {statistic.unit && (
              <p className="text-[9px] font-bold text-[#003527] sm:text-xs">
                {statistic.unit}
              </p>
            )}

            <p className="mt-1 text-[6px] font-medium tracking-wide text-gray-400 sm:text-[9px]">
              {statistic.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
