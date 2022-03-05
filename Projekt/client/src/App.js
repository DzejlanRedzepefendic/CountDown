import "./App.css";
import Navbar from "./components/layout/Navbar";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import NoMatchPage from "./components/NoMatchPage";
import Countdown from "./components/countdown/Countdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCountDown from "./components/countdown/CreateCountDown";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countdown />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<CreateCountDown />} />
          <Route path="*" element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
