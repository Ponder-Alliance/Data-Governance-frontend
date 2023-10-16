import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ activeLink }) => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll initial",
        maxWidth: "280px",
        float: "left",
      }}
    >
      <CDBSidebar textColor="#fff" className="bg-dark">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link
            to="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Data Governance
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink
              exact={"true"}
              to="/"
              className={activeLink === "dashboard" && "activeClicked"}
            >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact={"true"}
              to="/dbconfig"
              className={activeLink === "dbConfig" && "activeClicked"}
            >
              <CDBSidebarMenuItem icon="table">DB Config</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact={"true"}
              to="/metadata"
              className={activeLink === "metaData" && "activeClicked"}
            >
              <CDBSidebarMenuItem icon="user">MetaData</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              exact={"true"}
              to="/"
              className={activeLink === "analytics" && "activeClicked"}
            >
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            {/* <NavLink
              exact={"true"}
              to="/hero404"
              target="_blank"
               className={activeLink === "dashboard" && "activeClicked"}
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink> */}
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div
            style={{
              padding: "20px 5px",
            }}
          >
            <small>
              <FontAwesomeIcon icon={faCopyright} /> Copyright Ponder Alliance{" "}
              {new Date().getFullYear()}
            </small>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
