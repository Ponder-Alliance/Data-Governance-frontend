import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDatabase,
  faInfo,
  faTachometer,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./Siderbar";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar style={{ float: "left" }} />

        <div className="w-100 m-0 p-0">
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="container-fluid">
              <div class="navbar-nav">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <p className="text-light mt-2 ">{">"}</p>
                <Link class="nav-link active" aria-current="page" to="/">
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
