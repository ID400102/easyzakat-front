// import Header from "../layout/Header";
// import BottomNav from "../layout/BottomNav";
// import EmergencyCard from "../components/EmergencyCard";
// import Campaigns from "../data/campaigns";

// function Campaigns() {
//   return (
//     <div className="min-h-screen bg-[#f8f9fc]">

//       <Header />

//       <main className="mx-auto max-w-7xl px-4 pb-28 pt-8 sm:px-6 lg:px-10 lg:pb-12">

//         <div className="mb-8">

//           <span className="font-semibold text-[#00634f]">
//             Solidarité
//           </span>

//           <h1 className="mt-2 text-3xl font-bold text-[#003f35] sm:text-4xl">
//             Nos Campagnes
//           </h1>

//           <p className="mt-3 max-w-2xl text-gray-500">
//             Découvrez les Campagnes soutenus par EasyZakat
//             et choisissez celle a laquelle vous souhaitez contribuer.
//           </p>

//         </div>

//         <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

//           {Campaigns.map((campaign) => (
//             <EmergencyCard
//               key={campaign.id}
//               Campaign={campaign}
//             />
//           ))}

//         </div>

//       </main>

//       <BottomNav />

//     </div>
//   );
// }

// export default Campaigns;