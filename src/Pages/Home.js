import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import axios from 'axios';
import './Home.css'
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const data = [
  { image: "/d.jpg" },
  { image: "/h.webp" },
  { image: "/e.jpg" },
  { image: "/i.webp" },
  { image: "/f.jpg" }
];

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cart , setCart] = useState([]);

  const getAllProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products/get-All");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const buyerToken = localStorage.getItem("buyerToken");
  useEffect(() => {
    if (!buyerToken) {
      navigate("/login");
    }
  });
  
  const addToCart = (product) =>{
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cart = [...updatedCart ,product];
    localStorage.setItem("cart" , JSON.stringify(cart));
    setCart(cart)
  }

  return (
    <>
      <div style={{ width: '100%', height: '800px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          swipeable
          emulateTouch
          centerSlidePercentage={100}
        >
          {data.map((shoes, index) => (
            <div key={index} style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={shoes.image}
                alt={`Slide ${index}`}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container text-center mt-5">
        <h1>Products</h1>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-3 col-md-3 col-sm-4 col-4 mt-5 product" key={product._id}>
              <Link to={`/product-detail/${product._id}`} className="custom-link">
                <img src={product.img} alt="" style={{ width: "240px", height: "200px", overflow: 'hidden' }} />
                <h6>{product.title}</h6>
                <h3>{product.price}$</h3>
                <h6>{product.description}</h6>
              </Link>
              <div className="text-center mt-3">
                <button type="button" className="btn btn-warning" onClick={() => addToCart(product)}>
                  Add to <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
