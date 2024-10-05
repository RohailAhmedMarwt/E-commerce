import React, { useState, useEffect } from 'react';
import './Cart.css'; // Import custom styles if needed

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const removeProd = (index) => {
        // Create a new array excluding the item to remove
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    

    return (
        <div className="container">
            <div className="row mb-4">
                
            </div>
            <div className="row">
                {cart.length > 0 ? (
                    cart.map((item, index) => (
                        <div key={index} className="col-12 mb-4">
                            <div className="cart d-flex align-items-start border p-3 rounded">
                                {/* Product Image */}
                                <div className="me-3">
                                    <img src={item.img} alt={item.title} className="img-fluid" style={{ maxWidth: "150px", maxHeight: "150px", objectFit: "cover" }} />
                                </div>

                                {/* Product Details */}
                                <div className="flex-grow-1">
                                    <h5 className="mb-1">{item.title}</h5>
                                    <p className="mb-1">{item.description}</p>
                                    <h2 className="mb-3">${item.price}</h2>
                                    <button className="btn btn-warning">Buy Now</button>
                                    <button 
                                        className="btn btn-danger ms-2" 
                                        onClick={() => removeProd(index)}
                                    >
                                        Remove Item
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-12 text-center">
                        <h4>Your cart is empty</h4>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
