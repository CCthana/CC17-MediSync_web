import { Slide, ToastContainer } from "react-toastify";
import AdminContextProvider from "./contexts/AdminContext";
import Router from "./route";
import { Suspense } from "react";
import Spinner from "./components/Spinner";
import DoctorContextProvider from "./contexts/DoctorContext";
import ClinicContextProvider from "./contexts/ClinicContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HnContextProvider from "./contexts/HnContext";

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <AdminContextProvider>
        <HnContextProvider>
          <ClinicContextProvider>
            <DoctorContextProvider>
              <Router />
              <ToastContainer
                position="bottom-right"
                autoClose={2000}
                transition={Slide}
              />
            </DoctorContextProvider>
          </ClinicContextProvider>
        </HnContextProvider>
      </AdminContextProvider>
    </Suspense>
  );
}

export default App;
