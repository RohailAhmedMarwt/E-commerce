import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css"; // Import the CSS file for styling

const Signup = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cellNumber, setCellNumber] = useState("");

  const navigate = useNavigate();
  const formData = { name, address, email, password, cellNumber };
  const submitForm = async () => {
    try {
      await axios.post("http://localhost:8000/api/buyers/register", formData);
      alert("Buyer Registered successfully");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row align-items-center mb-5">
        {/* Form Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <form
            className="shadow p-4 mb-2 bg-white rounded form-container"
            onSubmit={(e) => e.preventDefault()}
          >
            <h1
              className="mb-4 text-center signup-heading"
              style={{ fontWeight: "650", fontSize: "28px" }}
            >
              (Signup As Buyer)
            </h1>{" "}
            {/* Apply the class here */}
            <div className="mb-3 row">
              <label htmlFor="inputName" className="col-sm-4 col-form-label ">
                Name
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputAddress" className="col-sm-4 col-form-label">
                Address
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
                Email
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputPassword"
                className="col-sm-4 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3 row">
              <label
                htmlFor="inputCellNumber"
                className="col-sm-4 col-form-label"
              >
                Cell Number
              </label>
              <div className="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="inputCellNumber"
                  value={cellNumber}
                  onChange={(e) => setCellNumber(e.target.value)}
                />
              </div>
            </div>
            <p className="text-center">
              Already have an account? Click here to{" "}
              <Link to="/login">Login</Link>
            </p>
            <div className="text-center">
              <button
                onClick={submitForm}
                className="btn btn-warning btn-signup"
              >
                Signup
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <img src="/b.jpg" alt="Signup" className="responsive-img" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
