import { Rotes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./components/auth/SignUp";
import SingIn from "./components/auth/SingIn";
import "./App.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Rotes>
        </Rotes>
      </AuthProvider>

      <SignUp />
      <SingIn />
      <AuthDetails />
    </>
  );
}

export default App;
