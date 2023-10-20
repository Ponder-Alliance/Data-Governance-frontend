import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdd } from "@fortawesome/free-solid-svg-icons";

const BusinessDomain = () => {
  const businessDomains = [
    {
      id: "1",
      name: "test 1",
      description: "test description",
    },
    {
      id: "2",
      name: "test 2",
      description: "Test description",
    },
  ];
  return (
    <Layout activeLink={"business"}>
      <div className="row">
        <div className="col-9">
          <h1>Business Domains</h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <Link to="/business/add" className="btn btn-dark mr-0">
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
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {businessDomains.length > 0 ? (
            businessDomains.map((businessDomain) => (
              <tr key={businessDomain.id}>
                <td>{businessDomain.id}</td>
                <td>{businessDomain.name}</td>
                <td>{businessDomain.description}</td>
                <td>
                  <Link
                    className="btn btn-dark"
                    to={`/business/edit/${businessDomain.id}`}
                  >
                    Edit
                  </Link>{" "}
                  |{" "}
                  <Link
                    className="btn btn-info"
                    to={`/business/id=${businessDomain.id}/viewOnly=true`}
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

export default BusinessDomain;
