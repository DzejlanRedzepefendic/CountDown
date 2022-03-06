import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../dataMenagment/axios/ApiMethod";
import { backendPaths } from "../../dataMenagment/appPaths/BackendPaths";
import "../../styles/Register.css";

const Register = () => {
  const [account, setAccount] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const [statusCode, setStatusCode] = useState(0);
  const navigate = useNavigate();

  const checkAccount = (e) => {
    e.preventDefault();
    if (account.password === account.password2) {
      fetchData.PostMethod(backendPaths.register,account).then((result) => {
        setStatusCode(result.status);
      });
    }
  };

  const onChangeInput = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (statusCode === 200) {
      navigate("/login");
    }
  }, [statusCode]);

  return (
    <div className="background">
      <div className="register-box">
        <h2>Register</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="name"
              value={account.name}
              onChange={onChangeInput}
            />
            <label htmlFor="">Full name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={account.email}
              onChange={onChangeInput}
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={account.password}
              onChange={onChangeInput}
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password2"
              value={account.password2}
              onChange={onChangeInput}
            />
            <label htmlFor="">Re-enter password</label>
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
              <p onClick={() => navigate("/login")}>login</p>
            </a>
          </div>
        </form>
        <a to="#">
          <p>Already have an account?</p>
        </a>
      </div>
    </div>
  );
};

export default Register;
