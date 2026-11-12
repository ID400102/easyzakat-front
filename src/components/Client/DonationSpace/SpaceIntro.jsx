function SpaceIntro({ user }) {
  const firstName =
    user?.firstName ||
    user?.name?.split(" ")[0] ||
    "cher donateur";

  return (
    <section className="w-full">
      <h1 className="max-w-[500px] text-[24px] font-semibold leading-[1.2] tracking-[-0.5px] text-[#004D43] sm:text-[29px] lg:text-[34px]">
        Bonjour {firstName},
        <br />
        bienvenue dans votre espace
      </h1>

      <p className="mt-2 max-w-[520px] text-[13px] leading-[1.5] text-[#676E6C] sm:text-[14px] lg:text-[15px]">
        Votre générosité crée un changement réel au Sénégal aujourd'hui.
      </p>
    </section>
  );
}

export default SpaceIntro;