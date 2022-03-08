import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import "../../styles/Login.css";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/user/userSlice";
import DecodeJwtFromlocalStorage from "../../utils/DecodeJwt";

export const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [statusCode, setStatusCode] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const setReduxD = useCallback(() => {
    const { id, name } = DecodeJwtFromlocalStorage(localStorage.getItem("token"));
    dispatch(auth({ id, name }))
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
      setReduxD()
      navigate("/");
    }
  }, [statusCode, navigate, setReduxD]);
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
