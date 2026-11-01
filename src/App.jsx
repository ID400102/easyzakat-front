
import UserRoutes from "./routes/User/UserRoutes";
import AdminRoutes from "./routes/Admin/AdminRoutes";
import AuthRoutes from "./routes/auth/AuthRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <UserRoutes />
      <AdminRoutes />
      <AuthRoutes />
    </>
  );
}

export default App;
