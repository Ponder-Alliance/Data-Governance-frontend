import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const MetaData = () => {
  const metaDatas = [
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
    <Layout activeLink="metaData">
      <div className="row">
        <div className="col-9">
          <h1>Meta-Datas </h1>
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
          {metaDatas.length > 0 ? (
            metaDatas.map((metaData) => (
              <tr key={metaData.id}>
                <td>{metaData.id}</td>
                <td>{metaData.name}</td>
                <td>{metaData.engine}</td>
                <td>{metaData.user}</td>
                <td>{metaData.password}</td>
                <td>
                  <Link
                    className="btn btn-success text-light"
                    to={`/metaData/id=${metaData.id}`}
                  >
                    View MetaData
                  </Link>{" "}
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

export default MetaData;
