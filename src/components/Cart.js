import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { addToCart, decreaseCart, removeFromCart } from '../features/cartSlice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromCart(cartItem));
  }

  const handleDecreaseCart = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  }
  const handleIncreaseCart = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  return (
    <div className='cart-container'>
      <h2 >Shopping Cart</h2>
      { cart.cartItems.length === 0 ? (
        <div className='cart-empty'>
        <p>your Cart is currently empty</p>
        <div className='start-shopping'>
          <Link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
          </svg>
            <span>Start Shoping</span>
          </Link>
        </div>
        </div>
      )
      : (
        <div >
          <div className="titles ">
            <h5 >Products</h5>
            <h5>Price</h5>
            <h5>Quantity</h5>
            <h5>Total</h5>
          </div>
          <div className='cart-items'>
            {cart.cartItems && cart.cartItems.map((cartItem) => (
              <div className="cart-item" key = {cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                      <h5>{cartItem.title}</h5>
                      <button onClick={() => handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">${cartItem.price}</div>
                <div className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                  <div className="count">{cartItem.cartQuantity}</div>
                  <button onClick={() => handleIncreaseCart(cartItem) }>+</button>
                </div>
                <div className="cart-product-total-price"> ${cartItem.price * cartItem.cartQuantity}</div>
            </div>
            ))}
          </div>
          <div className="cart-summary">
                <button>Clear Cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    <span className="amount">${cart.cartTotalAmount}</span>
                  </div>
                  <p>Taxes and shipping fee calculated at checkout</p>
                  <button>Checkout</button>
                  <div className="continue-shopping">
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                          <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg>
                        <span>Continue Shoping</span>
                    </Link>
                 </div>
                </div>
              </div>
        </div>
      )}

    </div>
  )
}

export default Cart;