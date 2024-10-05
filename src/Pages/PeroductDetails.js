import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'; // Import the CSS file for styling

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [cart , setCart] =useState([]);


  const getAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/products/product-detail/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, [id]);

  if (!product) return <div className='loading'>Loading...</div>;

  const addToCart = (product) =>{
    const updatedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const cart = [...updatedCart ,product];
    localStorage.setItem("cart" , JSON.stringify(cart));
    setCart(cart)
  }

     
  return (
    <div className='product-details-container'>
      <div className="product-image">
        <img src={product.img} alt={product.title} />
      </div>
      <div className="product-info">
        <h1 className="product-title">{product?.title}</h1>
        <p className="product-price">${product?.price}</p>
        <p className="product-description">{product?.description}</p>
        <div className="product-actions">
          <button className="btn-add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>
          <button className="btn-buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
