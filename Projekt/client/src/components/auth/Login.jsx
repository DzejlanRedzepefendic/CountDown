import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, setUserAndId } from "../../redux/user/userSlice";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import DecodeJwtFromlocalStorage from "../../utils/DecodeJwt";
import "../../styles/Login.css";

export const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [statusCode, setStatusCode] = useState(0);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setUpUser = useCallback(() => {
    if (localStorage.getItem("token")) {
      try {
        const { id, name } = DecodeJwtFromlocalStorage(localStorage.getItem("token"));
        dispatch(setUserAndId({ id, name }));
      } catch (e) {
        console.log(e);
      }
    }
  }, [dispatch])

  const checkAccount = (e) => {
    e.preventDefault();

    fetchData.post(backendPaths.login, account).then(({ status, data }) => {
      setStatusCode(status);
      localStorage.setItem("token", "Bearer " + data.token);
    });
  };


  useEffect(() => {
    if (statusCode === 200) {
      dispatch(auth(user.isLogged));
      setUpUser();
      navigate("/");
    }
  }, [statusCode, dispatch, navigate, setUpUser, user.isLogged]);
  return (
    <div className="background">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form>
          <div className="user-box">
            <input
              type="email"
              value={account.email}
              onChange={(e) =>
                setAccount({ ...account, email: e.target.value })
              }
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="buttons-space">
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p onClick={checkAccount}>Submit</p>
            </div>
            <div className="box">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p onClick={() => navigate("/register")}>register</p>
            </div>
          </div>
        </form>
        <p style={{ paddingTop: '5%' }}>Don't have account?</p>
      </div >
    </div >
  );
};

export default Login;
