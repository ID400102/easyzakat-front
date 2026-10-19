function DonationIntro() {
  return (
    <section
      className="
        mx-auto
        w-full
        max-w-[650px]
        px-4
        text-center
        sm:px-6
      "
    >
      <h1
        className="
          text-[28px]
          font-semibold
          leading-[1.15]
          tracking-[-0.6px]
          text-[#004D43]

          sm:text-[32px]

          lg:text-[38px]
        "
      >
        Quel type de don
        <br />
        souhaitez-vous faire?
      </h1>

      <p
        className="
          mx-auto
          mt-3
          max-w-[370px]
          text-[17px]
          leading-[1.65]
          text-[#555B59]

          sm:max-w-[500px]
          sm:text-[18px]
        "
      >
        Chaque contribution renforce notre communauté et soutient les plus
        démunis.
      </p>
    </section>
  );
}

export default DonationIntro;