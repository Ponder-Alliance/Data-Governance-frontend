import React from "react";

import Sidebar from "./Siderbar";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  activeLink: String;
};

const Layout: React.FC<Props> = ({ children, activeLink }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <Sidebar activeLink={activeLink} />

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
