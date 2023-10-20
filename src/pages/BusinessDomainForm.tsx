import React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

import { useState, useRef } from "react";

const BusinessDomainForm = () => {
  const { businessID, viewOnly } = useParams();

  console.log(businessID);

  const [formData, setFormData] = useState({
    name: "",
  });

  const description = useRef<HTMLTextAreaElement>(null);

  const { name } = formData;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(name, description.current?.value);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Layout activeLink="dbConfig">
      <div className="row">
        <div className="col-9">
          <h1>
            Business Domain |{" "}
            {!businessID ? "Add" : viewOnly ? "Details" : "Edit"}
          </h1>
        </div>
        <div className="col-3 d-flex justify-content-end align-items-center">
          <Link to="/business" className="btn btn-outline-dark mr-0">
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
              <label className="form-label">Description</label>
              <textarea
                ref={description}
                className="form-control"
                id="description"
                name="description"
                placeholder="Enter description"
              ></textarea>
            </div>
            {!viewOnly && (
              <button type="submit" className="btn btn-dark">
                {!businessID ? "Add" : "Edit"}
              </button>
            )}
          </form>
        </div>
      </div>
      <br />
    </Layout>
  );
};
export default BusinessDomainForm;
