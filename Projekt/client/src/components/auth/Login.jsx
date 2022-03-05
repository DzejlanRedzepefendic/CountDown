import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth, setUserAndId } from "../../redux/user/userSlice";
import { apiPaths } from "../../utils/axios/ApiPaths";
import { httpMethods } from "../../utils/axios/HttpMethods";
import GetDataFromBackend from "../../utils/axios/GetDataFromBackend";
import DecodeJwtFromlocalStorage from "../../utils/DecodeJwt";
import "../../styles/Login.css";

export const Login = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  const [statusCode, setStatusCode] = useState(0);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setUpUser = () => {
    if (localStorage.getItem("token")) {
      try {
        const { id, name } = DecodeJwtFromlocalStorage(
          localStorage.getItem("token")
        );

        dispatch(setUserAndId({ id, name }));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const checkAccount = (e) => {
    e.preventDefault();

    GetDataFromBackend(httpMethods.post)(apiPaths.login, account).then((r) => {
      setStatusCode(r.status);
      localStorage.setItem("token", "Bearer " + r.data.token);
    });
  };

  useEffect(() => {
    if (statusCode === 200) {
      dispatch(auth(user.isLogged));
      setUpUser();
      navigate("/");
    }
  }, [statusCode]);

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
              <p onClick={() => navigate("/register")}>register</p>
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