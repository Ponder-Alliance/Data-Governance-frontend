import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdd } from "@fortawesome/free-solid-svg-icons";

const DbConfig = () => {
  const dbConfigs = [
    {
      id: "1",
      name: "DB name",
      engine: "DB Engine",
      user: "Username",
      password: "pass******",
    },
    {
      id: "2",
      name: "DB name",
      engine: "DB Engine",
      user: "Username",
      password: "pass******",
    },
    {
      id: "3",
      name: "DB name",
      engine: "DB Engine",
      user: "Username",
      password: "pass******",
    },
  ];

  return (
    <Layout activeLink="dbConfig">
      <div className="row">
        <div className="col-9">
          <h1>Database Configurations </h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <Link to="/dbconfig/add" className="btn btn-dark mr-0">
            <FontAwesomeIcon icon={faAdd} /> Add new configuration
          </Link>
        </div>
        <hr />
      </div>
      <br />
      <table className="dataTables table-response table table-striped">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Database Name</th>
            <th>Database Engine</th>
            <th>Database User</th>
            <th>Database Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dbConfigs.length > 0 ? (
            dbConfigs.map((dbConfig) => (
              <tr key={dbConfig.id}>
                <td>{dbConfig.id}</td>
                <td>{dbConfig.name}</td>
                <td>{dbConfig.engine}</td>
                <td>{dbConfig.user}</td>
                <td>{dbConfig.password}</td>
                <td>
                  {/* <Link
                    className="btn btn-dark"
                    to={`/dbconfig/edit/${dbConfig.id}`}
                  >
                    Edit
                  </Link>{" "}
                  |{" "} */}
                  <Link
                    className="btn btn-info"
                    to={`/dbconfig/id=${dbConfig.id}/viewOnly=true`}
                  >
                    View
                  </Link>{" "}
                  |{" "}
                  <button onClick={() => {}} className="btn btn-danger">
                    Delete
                  </button>{" "}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4}>No data found</td>
            </tr>
          )}
        </tbody>
      </table>
    </Layout>
  );
};

export default DbConfig;
