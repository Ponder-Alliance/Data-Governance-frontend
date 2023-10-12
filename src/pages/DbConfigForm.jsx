import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const DbConfigForm = () => {
  const { configID, viewOnly } = useParams();

  console.log(configID);

  return (
    <Layout>
      <div className="row">
        <div className="col-9">
          <h1>
            Database Configuration |{" "}
            {!configID ? "Add" : viewOnly ? "Details" : "Edit"}
          </h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <Link to="/dbconfig" className="btn btn-outline-dark mr-0">
            <FontAwesomeIcon icon={faChevronLeft} /> Go Back
          </Link>
        </div>
        <hr />
      </div>
      <br />
    </Layout>
  );
};

export default DbConfigForm;
