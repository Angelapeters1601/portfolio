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
    <div className="relative w-full h-full min-h-screen flex flex-col overflow-clip">
      <Header />
      <main className="flex-1 w-full overflow-x-hidden">
        {isLoading && !isHome ? (
          <div className="h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <div className="w-full h-full overflow-x-hidden">
            <Outlet />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

// return (
//   <div
//     className="relative flex flex-col overflow-x-hidden min-h-screen
//   bg-customWhite text-customBlack"
//   >
//     <Header />
//     <main className="flex-1 min-h-100 overflow-x-hidden">
//       {isLoading && !isHome ? (
//         <div className="h-full flex items-center justify-center">
//           <Loader />
//         </div>
//       ) : (
//         <Outlet />
//       )}
//     </main>
//     <Footer />
//   </div>
// );
//};

export default AppLayout;
