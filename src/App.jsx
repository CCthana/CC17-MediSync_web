import AuthContextProvider from "./contexts/authContext";
import Router from "./route";

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  );
}

export default App;
