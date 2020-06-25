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
      <div className="humberger__menu__overlay" />
  <div className="humberger__menu__wrapper">
    <div className="humberger__menu__logo">
      <a href="#">
        <img src="img/logo.png" alt />
      </a>
    </div>
    <div className="humberger__menu__cart">
      <ul>
        <li>
          <a href="#">
            <i className="fa fa-heart" /> <span>1</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-shopping-bag" /> <span>3</span>
          </a>
        </li>
      </ul>
      <div className="header__cart__price">
        item: <span><Amount/></span>
      </div>
    </div>
    <div className="humberger__menu__widget">
      <div className="header__top__right__language">
        <img src="img/language.png" alt />
        <div>English</div>
        <span className="arrow_carrot-down" />
        <ul>
          <li>
            <a href="#">Spanis</a>
          </li>
          <li>
            <a href="#">English</a>
          </li>
        </ul>
      </div>
      <div className="header__top__right__auth">
        <a href="#">
          <i className="fa fa-user" /> Login
        </a>
      </div>
    </div>
    <nav className="humberger__menu__nav mobile-menu">
      <ul>
        <li className="active">
          <a href="./index.html">Home</a>
        </li>
        <li>
          <a href="./shop-grid.html">Shop</a>
        </li>
        <li>
          <a href="#">Pages</a>
          <ul className="header__menu__dropdown">
            <li>
              <a href="./shop-details.html">Shop Details</a>
            </li>
            <li>
              <a href="./shoping-cart.html">Shoping Cart</a>
            </li>
            <li>
              <a href="./checkout.html">Check Out</a>
            </li>
            <li>
              <a href="./blog-details.html">Blog Details</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="./blog.html">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div id="mobile-menu-wrap" />
    <div className="header__top__right__social">
      <a href="#">
        <i className="fa fa-facebook" />
      </a>
      <a href="#">
        <i className="fa fa-twitter" />
      </a>
      <a href="#">
        <i className="fa fa-linkedin" />
      </a>
      <a href="#">
        <i className="fa fa-pinterest-p" />
      </a>
    </div>
    <div className="humberger__menu__contact">
      <ul>
        <li>
          <i className="fa fa-envelope" /> hello@nonvegmart.com
        </li>
        <li>Free Shipping for all Order of Rs99</li>
      </ul>
    </div>
  </div>
  {/* Humberger End */}
  <header className="header">
    <div className="header__top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="header__top__left">
              <ul>
                <li>
                  <i className="fa fa-envelope" /> hello@nonvegmart.com
                </li>
                <li>Free Shipping for all Order of Rs99</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
      <div class="col-lg-3">
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
              <div class="col-lg-6">
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
                      <a href="/contact">Contact</a>
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


              
              <div className="col-lg-3">
          <div className="header__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart" /> <span>0</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-shopping-bag" /> <span>0</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              Item: <span><Amount/></span>
            </div>
          </div>
        </div>
            </div>
            
      <div className="humberger__open">
        <i className="fa fa-bars" />
      </div>
    </div>
  </header>
      {/*Header Section End */}
      {/* Hero Section Begin */}
  <section className="hero">
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="hero__categories">
            <div className="hero__categories__all">
              <i className="fa fa-bars" />
              <span>All departments</span>
            </div>
            <ul>
              <li>
                <a href="#">Chicken</a>
              </li>
              <li>
                <a href="#">Fish &amp; Seafood</a>
              </li>
              <li>
                <a href="#">Mutton</a>
              </li>
              <li>
                <a href="#">Eggs</a>
              </li>
              <li>
                <a href="#">Kebabs</a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"></a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
              <li>
                <a href="#"> </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="hero__search">
            <div className="hero__search__form">
              <form action="#">
                <div className="hero__search__categories">
                  All Categories
                  <span className="arrow_carrot-down" />
                </div>
                <input type="text" placeholder="What do yo u need?" />
                <button type="submit" className="site-btn">
                  SEARCH
                </button>
              </form>
            </div>
            <div className="hero__search__phone">
              <div className="hero__search__phone__icon">
                <i className="fa fa-phone" />
              </div>
              <div className="hero__search__phone__text">
                <h5>+65 11.188.888</h5>
                <span>support 24/7 time</span>
              </div>
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
