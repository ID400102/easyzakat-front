
export const AdminMenuItems = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: "LayoutDashboard",
    permission: "dashboard:read",
  },
  {
    name: "Donateurs",
    path: "/admin/donors",
    icon: "Users",
    permission: "donors:read",
  },
  {
    name: "Transactions",
    path: "/admin/transactions",
    icon: "CreditCard",
    permission: "transactions:read",
  },
  {
    name: "Campagnes",
    path: "/admin/campaigns",
    icon: "Megaphone",
    permission: "campaigns:read",
  },
  {
    name: "Organisations",
    path: "/admin/organisations",
    icon: "Building2",
    permission: "organizations:read",
  },
  {
    name: "Bénéficiaires",
    path: "/admin/beneficiaries",
    icon: "HandHeart",
    permission: "beneficiaries:read",
  },
  {
    name: "Rapports",
    path: "/admin/rapports",
    icon: "BarChart3",
    permission: "reports:read",
  },
  {
    name: "Audits",
    path: "/admin/audits",
    icon: "BarChart3",
    permission: "audits:read",
  },
];


export const payments = [
  {
    ref: "#ZK-88210",
    donor: "Moussa Gueye",
    amount: "500,000 CFA",
    method: "Orange Money",
    status: "Success",
    date: "Oct 24, 2023",
    time: "14:20",
  },
  {
    ref: "#ZK-88211",
    donor: "Fatou Ndiaye",
    amount: "120,000 CFA",
    method: "Wave",
    status: "Success",
    date: "Oct 24, 2023",
    time: "13:45",
  },
  {
    ref: "#ZK-88212",
    donor: "Abdoulaye Diallo",
    amount: "2,500,000 CFA",
    method: "Bank Transfer",
    status: "Verifying",
    date: "Oct 24, 2023",
    time: "11:10",
  },
  {
    ref: "#ZK-88213",
    donor: "Mariama Sow",
    amount: "75,000 CFA",
    method: "Orange Money",
    status: "Success",
    date: "Oct 24, 2023",
    time: "10:05",
  },
];