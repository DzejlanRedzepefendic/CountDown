import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [reRender, pleaseReRender] = useState(false);

  const logOut = () => {
    localStorage.removeItem("token");
    dispatch(auth(user.isLogged));
    return navigate("/login");
  };

  return (
    <div>
      <nav>
        <ul className="menu-bar">
          {user.isLogged && <li>Welcome {user.userName}</li>}
          <Link to="/">
            <li>CountDowns</li>
          </Link>
          <Link to="/">
            <li>Trending</li>
          </Link>
          <Link to="/">
            <li>Ending Soon</li>
          </Link>
          {user.isLogged && (
            <Link to="/create">
              <li>Create</li>
            </Link>
          )}
          {!user.isLogged && (
            <Link to="/login">
              <li>Login</li>
            </Link>
          )}
          {!user.isLogged && (
            <Link to="/register">
              <li>Register</li>
            </Link>
          )}
          {user.isLogged && <li onClick={logOut}>Logout</li>}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
