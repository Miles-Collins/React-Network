import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../assets/img/VibeLogo3.svg";
import Login from "./Login.jsx";
import "./Styles/Navbar.scss";

export function Navbar() {
  return (
    <nav className="navbar navbar-dark px-3 background rowPadding align-items-center d-flex row">
      <div className="col-3 m-0">
        <div className="row">
          <div className="col-2 d-flex align-items-center">
            <Link className="m-0 d-flex align-items-center" to={""}>
              <div className=" d-flex align-items-center">
                <img className="img-fluid" alt="logo" src={logo} />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-8 rounded p-0 m-0 d-flex align-items-center">
          <div className="input-group">
            <span
              className="borderLeft backgroundDark input-group-text border-0"
              id="search-addon"
            >
              <i className="fontColor fs-6 mdi mdi-magnify"></i>
            </span>
            <input
              type="search"
              className="inputPadding fontColor borderRight backgroundDark form-control"
              placeholder="Search Vibe"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>
      </div>

      {/* <div className="col-3">
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto">
            <li>
              <Link
                to={"About"}
                className="btn text-success lighten-30 selectable text-uppercase"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
}
