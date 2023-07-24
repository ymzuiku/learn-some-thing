import { useState } from "react";
import { Home } from "./Home";
import { Login } from "./Login";
import { Register } from "./Register";

function App() {
  const [router, setRouter] = useState("home");
  const goBack = () => {
    setRouter("home");
  };
  return (
    <>
      {router === "home" ? <Home setRouter={setRouter} /> : null}
      {router === "register" ? <Register goBack={goBack} /> : null}
      {router === "login" ? <Login goBack={goBack} /> : null}
    </>
  );
}

export default App;
