import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SellerDashboard = () => {
  const navigate = useNavigate();
  const sellertoken = localStorage.getItem("sellerToken");
  
  useEffect(() => {
    if (!sellertoken) {
      navigate("/seller-login");
    }
  });

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [catagory, setCatagory] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");

  const productForm = { title, catagory, price, description, img };
  const submitProduct = async () => {
    try {
      await axios.post(
        "http://localhost:8000/api/products/add-products",
        productForm
      );
      alert("Product added successfully");
    } catch (error) {
      alert("Product cannot Added OOPS!");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center w-100">
        <div className="col-md-10 col-lg-8 mt-4 mb-4">
          <div className="p-4 shadow bg-light rounded">
            <h2 className="text-center mb-4">Add Products</h2>{" "}
            <form className="row g-3" onSubmit={(e) => e.preventDefault()}>
              <div className="col-md-12">
                <label htmlFor="inputTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputPrice" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="inputPrice"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputCategory" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputCategory"
                  value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="inputDescription" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="inputDescription"
                  rows="4"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <div className="col-md-12">
                <label htmlFor="inputImage" className="form-label">
                  Image URL
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputImage"
                  value={img}
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="col-12">
                <button
                  onClick={submitProduct}
                  className="btn btn-warning btn-lg w-100"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
