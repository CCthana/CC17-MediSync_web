import { Slide, ToastContainer } from "react-toastify"
import AdminContextProvider from "./contexts/AdminContext"
import Router from "./route"
import { Suspense } from "react"
import Spinner from "./components/Spinner"

function App() {
return (
  <Suspense fallback={<Spinner />}>
    <AdminContextProvider>
      <Router />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        transition={Slide} />
    </AdminContextProvider>
  </Suspense>
)}

export default App
