import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './css/style.css';

function CartScreen(props) {

  const cart = useSelector(state => state.cart);

  const { cartItems } = cart;

  const productId = props.match.params.id;
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const removeFromCartHandler = (productId) => {
    dispatch(removeFromCart(productId));
  }
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);


  const checkoutHandler = () => {
    props.history.push("/signin?redirect=shipping");
  }
  
  function  multiply(a,b){
    return a*b;
  }
  return <div className="cart">
    <section class="shoping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th class="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              { 
                              cartItems.length === 0 ?
                              <div>
                              Cart is empty
                              </div>
                              :
                              cartItems.map(item =>
                                
                                <tr>
                                    <td class="shoping__cart__item">
                                        <img src="{item.image}" alt="product" />
                                        <Link to={"/product/" + item.product}>
                                        <h5>{item.name}</h5>
                                        </Link>
                                    </td>
                                    <td class="shoping__cart__price">
                                        ${item.price}
                                    </td>
                                    <td class="shoping__cart__quantity">
                                        <div class="quantity">
                                          <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                     
                                          {[...Array(item.countInStock).keys()].map(x =>
                                          <option key={x + 1} value={x + 1}>{x + 1}</option>
                                          )}
                                        </select>
                                        </div>
                                    </td>

                                    <td class="shoping__cart__total">
                                    
                                      ${item.price * item.qty}
                                    
                                    </td>
                                    <td class="shoping__cart__item__close">
                                        <span class="icon_close" onClick={() => removeFromCartHandler(item.product)}>
      
                                        </span>
                                    </td>
                                
                                </tr>
                              )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="shoping__cart__btns">
                        <a href="#" class="primary-btn cart-btn">CONTINUE SHOPPING</a>
                        <a href="#" class="primary-btn cart-btn cart-btn-right"><span class="icon_loading"></span>
                            Upadate Cart</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="shoping__continue">
                        <div class="shoping__discount">
                            <h5>Discount Codes</h5>
                            <form action="#">
                                <input type="text" placeholder="Enter your coupon code" />
                                <button type="submit" class="site-btn">APPLY COUPON</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
      <div class="shoping__checkout">
          <h5>Cart Total</h5>
            <span>
              Subtotal ( {cartItems.length} items)
               :
              $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </span>
            <div class="primary-btn">
            <a   onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
            Proceed to Checkout
          </a>
          </div>
        </div>
      </div>
            </div>
        </div>
   
    
    </section>
  </div>
    
}

export default CartScreen;