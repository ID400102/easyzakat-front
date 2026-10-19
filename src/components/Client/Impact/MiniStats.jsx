import { Users, Handshake } from "lucide-react";

function MiniCard({ icon: Icon, title, value, gold }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${
          gold
            ? "bg-[#FFF4D8] text-[#B8860B]"
            : "bg-[#E7F8EE] text-[#0F3D2E]"
        }`}
      >
        <Icon size={21} />
      </div>

      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <p className="text-xl font-bold text-[#0F3D2E]">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function MiniStats() {
  return (
    <section className="mt-4 grid gap-4 md:w-2/3 md:grid-cols-2">

      <MiniCard
        icon={Users}
        title="Bénéficiaires"
        value="12,450+"
      />

      <MiniCard
        icon={Handshake}
        title="Partenaires"
        value="48"
        gold
      />

    </section>
  );
}