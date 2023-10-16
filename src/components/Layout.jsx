import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faInfo,
  faTachometer,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Siderbar";
import { Link } from "react-router-dom";

const Layout = ({ children, activeLink }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar style={{ float: "left" }} activeLink={activeLink} />

        <div className="w-100 m-0 p-0">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <p className="text-light mt-2 ">{">"}</p>
                <Link className="nav-link active" aria-current="page" to="/">
                  Link
                </Link>
              </div>
            </div>
          </nav>
          <section className="container p-4">{children}</section>
        </div>
      </div>

      <footer></footer>
    </div>
  );
};

export default Layout;
