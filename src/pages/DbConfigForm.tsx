import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

import { useState } from "react";

const DbConfigForm = () => {
  const { configID, viewOnly } = useParams();

  console.log(configID);

  const [formData, setFormData] = useState({
    name: "",
    engine: "",
    username: "",
    password: "",
  });

  const { name, engine, username, password } = formData;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, engine, username, password);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Layout activeLink="dbConfig">
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
        <div>
          <form autoComplete="off" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={(e) => onChange(e)}
                value={name}
                placeholder="Enter name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Engine</label>
              <input
                type="text"
                className="form-control"
                id="engine"
                value={engine}
                name="engine"
                onChange={(e) => onChange(e)}
                placeholder="Enter engine"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                placeholder="Enter password"
                onChange={(e) => onChange(e)}
              />
            </div>
            {!viewOnly && (
              <button type="submit" className="btn btn-dark">
                {!configID ? "Add" : "Edit"}
              </button>
            )}
          </form>
        </div>
      </div>
      <br />
    </Layout>
  );
};
export default DbConfigForm;
