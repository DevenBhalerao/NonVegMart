import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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

  return (
    <div>
      <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Cart</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active">Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="cart-box-main">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="table-main table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Images</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>

                            <tbody>
                            {cartItems.length === 0 ? (
                            <div>Cart is empty</div>
                             ):( 
                              cartItems.map((item) => (
                                <tr>
                                  <Link to={'product' + item._id}>
                                  <td class="thumbnail-img">
                                    <a href="#"><img class="img-fluid" src = {`http://localhost:5000/${item.image}`} alt="" /> </a>
                                  </td></Link>
                                  
                                    <td class="name-pr"> 
                                    <Link to={'/product/' + item.product}>
									                    {item.name}
                                      </Link>
                                    </td> 
                                    <td class="price-pr">
                                        <p>&#8377;{item.price}</p>
                                    </td>
                                    <td>
                                    <div class="quantity">
                                      <select
                                        value={item.qty}
                                        onChange={(e) =>
                                          dispatch(
                                            addToCart(item.product, e.target.value)
                                          )
                                        }
                                      >
                                        {[...Array(item.countInStock).keys()].map(
                                          (x) => (
                                            <option key={x + 1} value={x + 1}>
                                              {x + 1}
                                            </option>
                                          )
                                        )}
                                      </select>
                                    </div>
                                    </td>
                                    <td class="total-pr">
                                    &#8377;{item.price * item.qty}
                                    </td>
                                    
                                    <td class="remove-pr">
                                        <a href="javascript:void(0)" onClick={() =>
                                removeFromCartHandler(item.product)
                              }>
									                      <i class="fa fa-times"></i>
								                        </a>
                                    </td>
                                </tr>
                              ))
                             )}
                            </tbody>
                            
                        </table>
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-lg-6 col-sm-6">
                    <div class="coupon-box">
                        <div class="input-group input-group-sm">
                            <input class="form-control" placeholder="Enter your coupon code" aria-label="Coupon code" type="text" />
                            <div class="input-group-append">
                                <button class="btn btn-theme" type="button">Apply Coupon</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                    <div class="update-box">
                        <input value="Update Cart" type="submit" />
                    </div>
                </div>
            </div>

            <div class="row my-5">
                <div class="col-lg-8 col-sm-12"></div>
                <div class="col-lg-4 col-sm-12">
                    <div class="order-box">
                        <h3>Order summary</h3>
                        <div class="d-flex">
                            <h4>Sub Total</h4>
                            <div class="ml-auto font-weight-bold">( {cartItems.length} items) : &#8377;{' '}
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</div>
                        </div>
                        
  
                        <div class="d-flex">
                            <h4>Shipping Cost</h4>
                            <div class="ml-auto font-weight-bold"> Free </div>
                        </div>
                        <hr/>
                        <div class="d-flex gr-total">
                            <h5>Grand Total</h5>
                            <div class="ml-auto h5">&#8377;
                  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)} </div>
                        </div>
                        <hr/>
                      </div>
                </div>
                <div class="col-12 d-flex shopping-box"> <a  onClick={checkoutHandler}
                  
                    disabled={cartItems.length === 0} class="ml-auto btn hvr-hover">Checkout</a> </div>
            </div>

        </div>
    </div>

    </div>
  )
    {/* <div className="cart-list">
      <ul className="cart-list-container">
        <li>
          <h3>
            Shopping Cart
          </h3>
          <div>
            Price
          </div>
        </li>
        {
          cartItems.length === 0 ?
            <div>
              Cart is empty
          </div>
            :
            cartItems.map(item =>
              <li>
                <div className="cart-image">
                  <img src={item.image} alt="product" />
                </div>
                <div className="cart-name">
                  <div>
                    <Link to={"/product/" + item.product}>
                      {item.name}
                    </Link>

                  </div>
                  <div>
                    Qty:
                  <select value={item.qty} onChange={(e) => dispatch(addToCart(item.product, e.target.value))}>
                      {[...Array(item.countInStock).keys()].map(x =>
                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                      )}
                    </select>
                    <button type="button" className="button" onClick={() => removeFromCartHandler(item.product)} >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="cart-price">
                  ${item.price}
                </div>
              </li>
            )
        }
      </ul>

    </div>
    <div className="cart-action">
      <h3>
        Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
        :
         $ {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
      </h3>
      <button onClick={checkoutHandler} className="button primary full-width" disabled={cartItems.length === 0}>
        Proceed to Checkout
      </button>

    </div>

  </div> */}
}

export default CartScreen;