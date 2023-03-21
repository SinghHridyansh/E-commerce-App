import React from "react";
import ".././Components/NavBar.css";
import Thrift from "./../Assets/Thrift-logo.gif";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <div className="NavBar-main">
          <div>
            <Link to="/" className="links">
              <img src={Thrift} alt=".." className="weblogo" />
            </Link>
          </div>
          <div className="third-section">
            <div login-section>
              <Link to="/" className="links">
                <span className="interactive-button">Home</span>
              </Link>
            </div>
            <div>
              <Link to="/Products" className="links">
                <span className="interactive-button">Products</span>
              </Link>
            </div>
            <div>
              <Link to="/user" className="links">
                <span className="interactive-button">Users</span>
              </Link>
            </div>
            <div>
              <Link to="/Contact" className="links">
                <span className="interactive-button">Contact Us</span>
              </Link>
            </div>
            <div>
              <Link to="/login" className="links">
                <span className="logout">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
