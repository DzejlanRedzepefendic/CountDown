import React, { useEffect, useState } from "react";
import { Auth } from "../utils/axios/Auth";
import "../styles/Login.css";
import { useSelector, useDispatch } from "react-redux";
import { auth, setUserAndId } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import DecodeJwtFromlocalStorage from "../utils/DecodeJwt";

export const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const setUpUser = () => {
    if (localStorage.getItem('token')) {
      try{
      const { id, name } = DecodeJwtFromlocalStorage(localStorage.getItem("token"));

      dispatch(setUserAndId({ id, name }));
      }catch(e){console.log(e)}
    }
  };
  
  const checkAccount = () => {
    // e.preventDefault();
    Auth(account, "login").then((r) => {
      localStorage.setItem("token", "Bearer " + r.data.token);
    });
    dispatch(auth(user.isLogged));
    setUpUser()
    navigate("/");
  };

  

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
            <label htmlFor="">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={account.password}
              onChange={(e) =>
                setAccount({ ...account, password: e.target.value })
              }
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="buttons-space">
            <a to="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p onClick={checkAccount}>Submit</p>
            </a>
            <a to="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <p>register</p>
            </a>
          </div>
        </form>
        <a to="#">
          <p>Don't have account?</p>
        </a>
      </div>
    </div>
  );
};

export default Login;
