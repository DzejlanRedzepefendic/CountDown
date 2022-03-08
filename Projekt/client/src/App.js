import Navbar from "./components/layout/Navbar";
import Login from "../src/components/auth/Login";
import Register from "../src/components/auth/Register";
import NoMatchPage from "./components/NoMatchPage";
import Countdown from "./components/countdown/CountDowns";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCountDown from "./components/countdown/CreateCountDown";
import Footer from "./components/layout/Footer";
import { useCallback, useEffect } from "react";
import DecodeJwtFromlocalStorage from "./utils/DecodeJwt";
import { useDispatch, useSelector } from "react-redux";
import { auth, logout } from "./redux/user/userSlice";

function App() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const setDataIntoRedux = useCallback(() => {
    if (localStorage.getItem("token")) {
      const { id, name } = DecodeJwtFromlocalStorage(localStorage.getItem("token"));
      dispatch(auth({ id, name }))
    } else {
      dispatch(logout())
    }
  }, [dispatch])

  useEffect(() => {
    if (!user.isLogged) setDataIntoRedux()
  }, [user.isLogged, setDataIntoRedux])

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
