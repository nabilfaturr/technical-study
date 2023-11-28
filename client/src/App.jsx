import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  const handleSetUsername = (newName) => {
    setUsername(newName);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home username={username} handleSetUsername={handleSetUsername} />
          }
        ></Route>
        <Route
          path="/sign-in"
          element={<SignIn handleSetUsername={handleSetUsername} />}
        ></Route>
        <Route
          path="/sign-up"
          element={<SignUp handleSetUsername={handleSetUsername} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
