import Header from "../../layouts/Header";
import CauseIntro from "../../components/client/Cause/CauseIntro";
import DonationRecommendation from "../../components/client/Cause/DonationRecommendation";
import CategoryFilters from "../../components/client/Cause/CategoryFilters";
import CauseList from "../../components/client/Cause/CauseList";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";

function Cause()  {
  return (
    <div>
    <Header />
    <main
      className="
        min-h-screen
        w-full
        bg-[#F8F8FC]
        mb-20
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-[1200px]
          px-[34px]
          pb-10
          pt-[30px]
          
          sm:px-6
          sm:pt-10
          
          md:px-8
          
          lg:px-10
          lg:pt-12
        "
      >
        {/* ================= INTRODUCTION ================= */}

        <div className="mt-2">
          <CauseIntro />
        </div>

        {/* ================= RECOMMENDATION ================= */}

        <div className="mt-8">
          <DonationRecommendation />
        </div>

        {/* ================= FILTERS ================= */}

        <div className="mt-12">
          <CategoryFilters />
        </div>

        {/* ================= CAUSES ================= */}

        <div className="mt-9">
          <CauseList />
        </div>
      </div>
    </main>
    <BottomNav />
    <Footer />
    </div>
  );
};

export default Cause;