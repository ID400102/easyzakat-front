
import { useState } from "react";

import Header from "../../layouts/Header";
import CauseIntro from "../../components/Cause/CauseIntro";
import DonationRecommendation from "../../components/Cause/DonationRecommendation";
import CategoryFilters from "../../components/Cause/CategoryFilters";
import CauseList from "../../components/Cause/CauseList";
import BottomNav from "../../layouts/BottomNav";
import Footer from "../../layouts/Footer";

function Cause() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  return (
    <div>
      <Header />

      <main className="min-h-screen w-full bg-[#F8F8FC] mb-20">
        <div
          className="
            mx-auto w-full max-w-[1200px]
            px-[34px] pb-10 pt-[30px]
            sm:px-6 sm:pt-10
            md:px-8
            lg:px-10 lg:pt-12
          "
        >
          <div className="mt-2">
            <CauseIntro />
          </div>

          <div className="mt-8">
            <DonationRecommendation />
          </div>

          <div className="mt-12">
            <CategoryFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          <div className="mt-9">
            <CauseList activeCategory={activeCategory} />
          </div>
        </div>
      </main>

      <BottomNav />
      <Footer />
    </div>
  );
}

export default Cause;
