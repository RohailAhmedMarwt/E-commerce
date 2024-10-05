import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Import the CSS file for styling
import axios from "axios";

const Login = () => {

  const [email , setEmail]=useState("");
  const [password , setPassword]=useState("")

  const navigate = useNavigate();
  const formData = {email , password}
  const submitForm = async () => {
    try {
        const response = await axios.post("http://localhost:8000/api/buyers/login", formData);
        const token = response.data.token
        localStorage.setItem("buyerToken", token)
        alert("buyer loggedin successfully");
        navigate("/")
    } catch (error) {
        alert(error)
    }
}


  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Form Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4">
          <img src="/a.jpg" alt="Signup" className="responsive-img" />
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <form className="shadow p-4 mb-2 bg-white rounded form-container" onSubmit={(e)=>e.preventDefault()}>
            <h1
              className="mb-4 text-center signup-heading"
              style={{ fontWeight: "650", fontSize: "28px" }}
            >
              (Login As Buyer)
            </h1>{" "}
            {/* Apply the class here */}
            <div className="mb-3 row"></div>
            <div className="mb-3 row">
              <label htmlFor="inputEmail" className="col-sm-4 col-form-label">
                Email
              </label>
              <div className="col-sm-8">
                <input type="email" className="form-control" id="inputEmail" value={email}  onChange={(e) => setEmail(e.target.value)}/>
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
            <p className="text-center">
              Dot't have an account? Click here to{" "}
              <Link to="/signup">Signup</Link>
            </p>
            <div className="text-center">
              <button className="btn btn-warning btn-signup " onClick={submitForm} >Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
