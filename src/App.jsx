import { Slide, ToastContainer } from "react-toastify";
import Router from "./route";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import DoctorContextProvider from "./contexts/DoctorContext";
import ClinicContextProvider from "./contexts/ClinicContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HnContextProvider from "./contexts/HnContext";
import PackageContextProvider from "./contexts/PackageContext";
import AuthContextProvider from "./contexts/AuthContext";
import AdminContextProvider from "./contexts/AdminContext";


function App() {
  return (
    <Suspense fallback={<Spinner />}>
     <AdminContextProvider>
        <HnContextProvider>
          <ClinicContextProvider>
            <DoctorContextProvider>
              <AuthContextProvider>
                <PackageContextProvider>
              <Router />
                <ToastContainer
                  position="bottom-right"
                  autoClose={2000}
                  transition={Slide}
                />
                </PackageContextProvider>
              </AuthContextProvider>
          </DoctorContextProvider>
          </ClinicContextProvider>
        </HnContextProvider>
        </AdminContextProvider>
    </Suspense>
  );
}

export default App;
