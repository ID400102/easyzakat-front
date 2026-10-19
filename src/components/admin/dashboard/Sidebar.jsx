// import {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   Megaphone,
//   Building2,
//   HandHeart,
//   BarChart3,
//   Settings,
// } from "lucide-react";

// import { Link, useLocation } from "react-router-dom";

// const icons = {
//   LayoutDashboard,
//   Users,
//   CreditCard,
//   Megaphone,
//   Building2,
//   HandHeart,
//   BarChart3,
// };

// function Sidebar({ menuItems }) {
//   const location = useLocation();

//   return (
//     <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[135px] flex-col border-r border-[#e4e6ef] bg-[#f0f1ff] px-3 py-4 md:flex lg:w-[140px] xl:w-[145px]">

//       <h1 className="mb-8 px-1 text-[16px] font-bold text-[#075b45]">
//         EasyZakat
//       </h1>

//       <div className="mb-7 flex items-center gap-2">
//         <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#087653] text-[10px] font-medium text-white">
//           AD
//         </div>

//         <div>
//           <p className="text-[9px] font-bold text-[#173d34]">
//             Ahmad Diop
//           </p>
//           <p className="text-[7px] text-[#777]">
//             Admin Level 1
//           </p>
//         </div>
//       </div>

//       <nav className="space-y-1">
//         {menuItems.map((item) => {
//           const Icon = icons[item.icon];

//           const active = location.pathname === item.path;

//           return (
//             <Link
//               key={item.name}
//               to={item.path}
//               className={`flex w-full items-center gap-2 rounded-md px-2 py-2 text-left text-[9px] ${
//                 active
//                   ? "bg-[#075b45] text-white"
//                   : "text-[#344842] hover:bg-white"
//               }`}
//             >
//               <Icon size={13} />
//               {item.name}
//             </Link>
//           );
//         })}
//       </nav>

//       <button className="mt-auto flex items-center gap-2 px-2 py-2 text-[9px] text-[#344842]">
//         <Settings size={13} />
//         Settings
//       </button>
//     </aside>
//   );
// }

// export default Sidebar;