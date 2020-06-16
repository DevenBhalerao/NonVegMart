import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';
import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './css/elegant-icons.css';
import './css/font-awesome.min.css';

import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import './index.css';

import MetaTags from 'react-meta-tags';
import HomeScreen from './screens/HomeScreen1';
import Checkout from './screens/Checkout';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import UploadProductsScreen from './screens/UploadProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProdutScreen from './screens/ProductScreen1';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import UploadCategoryScreen from './screens/UploadCategoryScreen';
import CategoryScreen1 from './screens/CategoryScreen1';
import Headerone from './Headerone';
import Xyz from './screens/Xyz';
import ShopDetails from './screens/ShopDetails';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, category, error } = categoryList;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };

  return (
    <BrowserRouter>
      <Headerone />

      <main className="main">
        <div className="content">
          <Route path="/orders" component={OrdersScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/order/:id" component={OrderScreen} />
          <Route path="/products" component={UploadProductsScreen} />
          <Route path="/categories" component={UploadCategoryScreen} />
          <Route path="/shipping" component={Checkout} />
          <Route path="/payment" component={PaymentScreen} />
          <Route path="/placeorder" component={PlaceOrderScreen} />
          <Route path="/signin" component={SigninScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/product/:id" component={ProdutScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/category/:id" component={CategoryScreen1} />
          <Route path="/shop" component={HomeScreen} />
          <Route path="/" exact={true} component={Xyz} />
        </div>
      </main>
      <div className="row">
        <div className="col-lg-12">
          {/* Footer Section Begin */}
          <footer className="footer spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="footer__about">
                    <div className="footer__about__logo">
                      <a href="./index.html">
                        <img src="img/logo.png" />
                      </a>
                    </div>
                    <ul>
                      <li>Address: 60-49 Road 11378 New York</li>
                      <li>Phone: +65 11.188.888</li>
                      <li>Email: hello@colorlib.com</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
                  <div className="footer__widget">
                    <h6>Useful Links</h6>
                    <ul>
                      <li>
                        <a href="#">About Us</a>
                      </li>
                      <li>
                        <a href="#">About Our Shop</a>
                      </li>
                      <li>
                        <a href="#">Secure Shopping</a>
                      </li>
                      <li>
                        <a href="#">Delivery infomation</a>
                      </li>
                      <li>
                        <a href="#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="#">Our Sitemap</a>
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <a href="#">Who We Are</a>
                      </li>
                      <li>
                        <a href="#">Our Services</a>
                      </li>
                      <li>
                        <a href="#">Projects</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Innovation</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12">
                  <div className="footer__widget">
                    <h6>Join Our Newsletter Now</h6>
                    <p>
                      Get E-mail updates about our latest shop and special
                      offers.
                    </p>
                    <form action="#">
                      <input type="text" placeholder="Enter your mail" />
                      <button type="submit" className="site-btn">
                        Subscribe
                      </button>
                    </form>
                    <div className="footer__widget__social">
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                      <a href="#">
                        <i className="fa fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fa fa-pinterest" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="footer__copyright">
                    <div className="footer__copyright__text">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{' '}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                    <div className="footer__copyright__payment">
                      <img src="img/payment-item.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
          {/* Footer Section End */}
          {/* Js Plugins */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
