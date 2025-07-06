import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../ui/Loader";
import "../App.css";
import { useLoading } from "../hooks/useLoading";

const AppLayout = () => {
  const { isLoading } = useLoading();
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="relative flex flex-col min-h-screen bg-customWhite text-customBlack">
      <Header />

      <main className="flex-1 min-h-100">
        {isLoading && !isHome ? (
          <div className="h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <Outlet />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
