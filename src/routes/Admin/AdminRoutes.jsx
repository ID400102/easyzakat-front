import { Routes, Route } from "react-router-dom";

import AdminLayout from "../../layouts/AdminLayout";

import AdminDashboard from "../../pages/admin/AdminDashboard";
import Donors from "../../pages/admin/Donors";
import Payments from "../../pages/admin/Payments";
import Campaigns from "../../pages/admin/Campaigns";
import Organisations from "../../pages/admin/Organisations";
import Beneficiaries from "../../pages/admin/Beneficiaries";
import Distributions from "../../pages/admin/Distributions";
import Reports from "../../pages/admin/Reports";
import Audit from "../../pages/admin/Audit";

function AdminRoutes() {
  
  return (
    <Routes>
      <Route
        path="/admin"
        element={<AdminLayout/>
        }
      >
        
        <Route
          path="/admin"
          element={<AdminDashboard />}
        />

        <Route
          path="donors"
          element={<Donors />}
        />

        <Route
          path="payments"
          element={<Payments />}
        />

        <Route
          path="campaigns"
          element={<Campaigns />}
        />

        <Route
          path="organisations"
          element={<Organisations />}
        />

        <Route
          path="beneficiaries"
          element={<Beneficiaries />}
        />

        <Route
          path="distributions"
          element={<Distributions />}
        />

        <Route
          path="reports"
          element={<Reports />}
        />

        <Route
          path="audits"
          element={<Audit />}
        />
        
      </Route>
    </Routes>
  );
}

export default AdminRoutes;