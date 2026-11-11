
import UserRoutes from "./routes/User/UserRoutes";
import AuthRoutes from "./routes/auth/AuthRoutes";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />

      <UserRoutes />

      <AuthRoutes />
    </>
  );
}

export default App;
