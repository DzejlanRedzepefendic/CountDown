import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import NoMatchPage from "./components/NoMatchPage";
import Countdown from "./components/Countdown";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCountDown from "./components/CreateCountDown";

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
