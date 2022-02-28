import React, { useEffect, useState } from "react";
import { Auth } from "../utils/axios/Auth";
import { useSelector, useDispatch } from "react-redux";
import { auth, setUserAndId } from "../redux/user/userSlice";
import DecodeJwtFromlocalStorage from "../utils/DecodeJwt";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

export const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [statusCode, setStatusCode] = useState(0)

  const setUpUser = () => {
    if (localStorage.getItem('token')) {
      try{
      const { id, name } = DecodeJwtFromlocalStorage(localStorage.getItem("token"));

      dispatch(setUserAndId({ id, name }));
      }catch(e){console.log(e)}
    }
  };
  
  const checkAccount = (e) => {
    e.preventDefault();
    Auth(account, "login").then((r) => {
      setStatusCode(r.status)
      localStorage.setItem("token", "Bearer " + r.data.token);
    });
  };

  
  useEffect(()=>{
    if(statusCode === 200){
      dispatch(auth(user.isLogged));
      setUpUser()
      navigate('/')}
  },[statusCode])

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
              <p onClick={() => navigate('/register')}>register</p>
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
