import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Loader from "../ui/Loader";
import "../App.css";
import { useLoading } from "../hooks/useLoading";

const AppLayout = () => {
  const { isLoading } = useLoading(); // Custom hook to track navigation state

  return (
    <div className="relative flex flex-col min-h-screen bg-customWhite text-customBlack">
      <Header />

      <main className="flex-1">
        {isLoading ? (
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
