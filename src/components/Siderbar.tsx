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

type Props = {
  activeLink: String;
};

const Sidebar: React.FC<Props> = ({ activeLink }) => {
  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll initial",
        maxWidth: "280px",
        float: "left",
      }}
    >
      <CDBSidebar
        textColor="#fff"
        className="bg-dark"
        backgroundColor={""}
        breakpoint={0}
        toggled={false}
        minWidth={"100px"}
        maxWidth={"250px"}
      >
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
              to="/"
              className={activeLink === "dashboard" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/dbconfig"
              className={activeLink === "dbConfig" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="table">DB Config</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/metadata"
              className={activeLink === "metaData" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="user">MetaData</CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/business"
              className={activeLink === "business" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="dollar">
                Business Domains
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              to="/catalog"
              className={activeLink === "catalog" ? "activeClicked" : ""}
            >
              <CDBSidebarMenuItem icon="map">
                Catalog Mapping
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="/"
              className={activeLink === "analytics" ? "activeClicked" : ""}
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

        <CDBSidebarFooter>
          <div
            style={{
              padding: "20px 5px",
              textAlign: "center",
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
