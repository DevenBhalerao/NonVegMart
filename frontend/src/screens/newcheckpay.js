import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { createOrder } from '../actions/orderActions';
import '../App.css';


import './css/elegant-icons.css';
import './css/font-awesome.min.css';

import './css/nice-select.css';

import './css/slicknav.min.css';
import './css/style.css';
import '../index.css';

import 'bootstrap/dist/css/bootstrap.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import MetaTags from 'react-meta-tags';




function Newcheckpay(props) {

  const cart = useSelector(state => state.cart);
  const orderCreate = useSelector(state => state.orderCreate);
  const { loading, success, error, order } = orderCreate;

  const { cartItems, shipping, payment } = cart;
 
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const shippingPrice = itemsPrice > 100 ? 0 : 10;
  const taxPrice = 0.15 * itemsPrice;
  const totalPrice = itemsPrice + shippingPrice + taxPrice;

  const dispatch = useDispatch();

  const placeOrderHandler = () => {
    // create an order
    dispatch(createOrder({
      orderItems: cartItems, shipping, payment, itemsPrice, shippingPrice,
      taxPrice, totalPrice
    }));
  }
  useEffect(() => {
    if (success) {
      props.history.push("/order/" + order._id);
    }

  }, [success]);

  return <div>
      <MetaTags>
          <meta charSet="UTF-8" />
          <meta name="description" content="Ogani Template" />
          <meta name="keywords" content="Ogani, unica, creative, html" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </MetaTags>
  
      
  {/* Checkout Section Begin */}
 

  <div className="container">
      
      <div className="checkout__form">
  <div className="col-lg-12 col-md-6">
            
            <div className="checkout__order">
              <h4>Your Order</h4>
              <div className="checkout__order__products">
                Products <span>Total</span>
              
                
              
             <div> Items<span> <div>${itemsPrice}</div></span></div>
             <div> Shipping<span> <div>${shippingPrice}</div></span></div>
             <div> Tax<span> <div> ${taxPrice}</div></span></div>
              

              <div className="checkout__order__total">
              Order Total <span><div>${totalPrice}</div></span>
              </div>
              
             
              <div className="checkout__input__checkbox">
                <label htmlFor="payment">
                  Check Payment
                  <input type="checkbox" id="payment" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="checkout__input__checkbox">
                <label htmlFor="paypal">
                  Paypal
                  <input type="checkbox" id="paypal" />
                  <span className="checkmark" />
                </label>
              </div>
              <button type="submit" className="site-btn">
                PLACE ORDER
              </button>
            </div>
            

</div>

</div>
</div>
</div>
</div>
}
  export default Newcheckpay