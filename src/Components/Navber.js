import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Fetch cart count from localStorage and update state
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.length);
  }, []);

  const buyerToken = localStorage.getItem("buyerToken");
  const sellerToken = localStorage.getItem("sellerToken");

  const logout = () => {
    localStorage.removeItem("buyerToken");
    localStorage.removeItem("sellerToken");
    window.location.reload(); // Reload to update the cart count
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body shadow p-2  bg-white rounded">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#"><img src="/logo4.png" alt="" style={{ width: "90px" }} /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0 mt-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/men">Men</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/women">Women</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/children">Children</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center ms-3">
              {buyerToken || sellerToken ? (
                <>
                <button onClick={logout} className="btn btn-outline-dark btn-custom me-2">Log out</button>
                <Link to="/cart" className="iicon me-3">
                <i className="fas fa-shopping-cart"></i>
              </Link>
              </>
              ) : (
                <>
                 
                 <div className="icon search-icon-container me-2">
                  <i className="fas fa-search"></i>
                </div>
                  <Link to="/login" className="btn btn-outline-dark btn-custom me-2">Login buyer</Link>
                  <Link to="/seller-login" className="btn btn-outline-dark btn-custom me-2">Login Seller</Link>
                </>
              )}
              <div className="icon-container">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="icon">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://facebook" target="_blank" rel="noopener noreferrer" className="icon">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navber;
