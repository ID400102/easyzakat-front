function AuditPageHero() {
  return (
    <div className="mb-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#0F4C3A] font-serif tracking-tight">
        Journal d'audit
      </h1>
      <p className="text-sm sm:text-base text-gray-600 mt-1 leading-relaxed">
        Toute action sensible : utilisateur, date, action, objet, ancienne et nouvelle valeur.
      </p>
    </div>
  );
}

export default AuditPageHero;