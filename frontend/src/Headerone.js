import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import './css/elegant-icons.css';
import './css/font-awesome.min.css';

import './css/nice-select.css';

import './css/slicknav.min.css';
import './css/style.css';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import OwlCarousel from 'react-owl-carousel';
import MetaTags from 'react-meta-tags';
import HomeScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen1';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import Amount from './screens/ShopDetails';
function Headerone() {
  const [search , setSearch] = useState('');
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
    <div>
      <MetaTags>
        <meta charSet="UTF-8" />
        <meta name="description" content="Ogani Template" />
        <meta name="keywords" content="Ogani, unica, creative, html" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </MetaTags>
      <title>Ogani | Template</title>
      {/* Google Font */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
      />

      {/* Humberger Begin */}

      {/* Header Section Begin */}
      <header class="header">
        <div class="header__top">
          <div class="container">
            <div class="row">
              <div class="col-lg-2">
                <div class="header__logo">
                  <a href="/">
                    <img
                      style={{ width: '50%', height: '50%' }}
                      src={`http://localhost:5000/logo.png`}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div class="col-lg-8">
                <nav class="header__menu">
                  <ul>
                    <li class="active">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href="/shop">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul class="header__menu__dropdown">
                        <li>
                          <a href="./shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="./cart">Shoping Cart</a>
                        </li>
                        <li>
                          <a href="/shipping">Check Out</a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a href="./contact.html">Contact</a>
                    </li>

                    {userInfo ? (
                      <li>
                        <a href="/profile">My account</a>
                      </li>
                    ) : (
                      <li>
                        <a href="/signin">Sign In</a>
                      </li>
                    )}

                    {userInfo && userInfo.isAdmin && (
                      <li>
                        <a href="#">Admin</a>
                        <ul className="header__menu__dropdown">
                          <li>
                            <a href="/orders">Orders</a>
                          </li>
                          <li>
                            <a href="/products">Products</a>
                          </li>
                        </ul>
                      </li>
                    )}

                    {userInfo && userInfo.isSeller && (
                      <li>
                        <a href="#">Seller</a>
                        <ul className="header__menu__dropdown">
                          <li>
                            <a href="/orders">Orders</a>
                          </li>
                          <li>
                            <a href="/sellerproducts">Products</a>
                          </li>
                        </ul>
                      </li>
                    )}
                  </ul>
                </nav>
              </div>

              {userInfo && (
                <div class="col-lg-2">
                  <div class="header__cart">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-shopping-bag"></i> <span>3</span>
                        </a>
                      </li>
                    </ul>
                    <div class="header__cart__price">
                      item: <span>$150.00</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div class="humberger__open">
              <i class="fa fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
      {/*Header Section End */}
      {/* Hero Section Begin */}
      <section style={{ 'margin-top': '45px' }} className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="hero__search">
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone" />
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
                <div className="hero__search__form">
                  <form action="/shop">
                    <input type="text"  onclick={(e) => setSearch(e.target.value)} name="search" id="search" placeholder="What do you need?" />
                    <button type="submit"className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}
    </div>
  );
}
export default Headerone;
