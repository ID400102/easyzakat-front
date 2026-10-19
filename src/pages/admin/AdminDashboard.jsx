import { useState } from "react";
import {
  Wallet,
  CircleDollarSign,
  HandHeart,
  Clock3,
} from "lucide-react";

import DashboardHeader from "../../components/admin/dashboard/DashboardHeader";
import StatCard from "../../components/admin/dashboard/StatCard";
import CollectionChart from "../../components/admin/dashboard/CollectionChart";
import PaymentRow from "../../components/admin/dashboard/PaymentRow";
import MobilePaymentCard from "../../components/admin/dashboard/PaymentCard";

import { payments } from "../../Data/adminData";

function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const filteredPayments = payments.filter((payment) =>
    `${payment.donor} ${payment.ref} ${payment.method}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen  rounded-2xl text-[#123b32]">

      <main className="min-h-screen pb-20 md:px-10">

        <div className="mx-auto max-w-[1200px] px-4 py-5 sm:px-5 md:px-6 md:py-6 lg:px-7 xl:px-8">
          
          <DashboardHeader />

          <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
            <StatCard
              icon={<Wallet size={15} />}
              iconBg="bg-[#eaf6f2]"
              iconColor="text-[#087653]"
              border="border-[#8aaea4]"
              top="+12.4%"
              title="Total Collected"
              value="42,500,000"
            />

            <StatCard
              icon={<CircleDollarSign size={15} />}
              iconBg="bg-[#f7f4e7]"
              iconColor="text-[#a18a2b]"
              border="border-[#c5b981]"
              top="+8.1%"
              title="Redistributed"
              value="31,200,000"
            />

            <StatCard
              icon={<HandHeart size={15} />}
              iconBg="bg-[#eaf7f3]"
              iconColor="text-[#087653]"
              border="border-[#a7d8cc]"
              title="System Balance"
              value="11,300,000"
            />

            <StatCard
              icon={<Clock3 size={15} />}
              iconBg="bg-[#fcebed]"
              iconColor="text-[#b52d3b]"
              border="border-[#d99ca5]"
              top="42 Unresolved"
              title="Pending Payments"
              value="2,840,000"
              danger
            />
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 xl:grid-cols-[1fr_340px]">
            <div className="rounded-lg bg-white p-5">
              <h3 className="mb-5 text-[10px] font-bold">
                Collections per Month
              </h3>

              <CollectionChart />
            </div>

            <div className="rounded-lg bg-white p-5">
              <h3 className="text-[10px] font-bold">
                Donation by Method
              </h3>

              <div className="mx-auto mt-5 h-[125px] w-[125px] rounded-full bg-[conic-gradient(#075b45_0deg_140deg,#c4aa31_140deg_212deg,#d8d8d8_212deg_360deg)]" />
              
              <div className="mt-5 space-y-2 text-[8px]">
                <div className="flex justify-between">
                  <span>● Mobile Money</span>
                  <b>65%</b>
                </div>

                <div className="flex justify-between">
                  <span>● Card Payment</span>
                  <b>20%</b>
                </div>

                <div className="flex justify-between">
                  <span>● Bank Transfer</span>
                  <b>15%</b>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 overflow-hidden rounded-lg bg-white">
            <div className="flex flex-col gap-3 border-b px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-[10px] font-bold">
                Recent Payments
              </h3>

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search ref, donor..."
                className="h-7 rounded-full border px-3 text-[8px] outline-none"
              />
            </div>

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[650px]">
                <thead>
                  <tr className="bg-[#f5f6fb] text-left text-[8px]">
                    <th className="px-5 py-3">REF</th>
                    <th className="px-5 py-3">DONOR</th>
                    <th className="px-5 py-3">AMOUNT</th>
                    <th className="px-5 py-3">METHOD</th>
                    <th className="px-5 py-3">STATUS</th>
                    <th className="px-5 py-3">DATE</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredPayments.map((payment) => (
                    <PaymentRow
                      key={payment.ref}
                      payment={payment}
                    />
                  ))}
                </tbody>
              </table>
            </div>

            <div className="md:hidden">
              {filteredPayments.map((payment) => (
                <MobilePaymentCard
                  key={payment.ref}
                  payment={payment}
                />
              ))}
            </div>

            <div className="flex items-center justify-between border-t px-5 py-3">
              <p className="text-[8px] text-[#777]">
                Showing 4 of 2,450 results
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                >
                  ‹
                </button>

                <span className="rounded bg-[#075b45] px-2 text-[8px] text-white">
                  {page}
                </span>

                <button onClick={() => setPage(page + 1)}>
                  ›
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;