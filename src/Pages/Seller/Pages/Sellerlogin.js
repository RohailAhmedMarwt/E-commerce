import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Sellerlogin = () => {

  const [email , setEmail]=useState("");
  const [password , setPassword]=useState("")

  const navigate = useNavigate();
  const formData = {email , password}
  const submitForm = async () => {
    try {
        const response = await axios.post("http://localhost:8000/api/sellers/login", formData);
        const token = response.data.token
        localStorage.setItem("sellerToken", token)
        
        alert("Seller loggedin successfully");
        navigate("/seller-dashborad")
    } catch (error) {
        alert(error)
    }
}

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Form Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center mb-4">
          <img src="/j.jpg" alt="Signup" className="responsive-img" style={{height:"500px"}} />
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center">
          <form className="shadow p-4 mb-2 bg-white rounded form-container" onSubmit={(e)=>e.preventDefault()}>
            <h1
              className="mb-4 text-center signup-heading"
              style={{ fontWeight: "650", fontSize: "28px" }}
            >
              (Login As Seller)
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
              <Link to="/seller-Signup">Signup</Link>
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

export default Sellerlogin;
