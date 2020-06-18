import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React , { useState, useEffect }  from 'react';
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
import HomeScreen from './screens/HomeScreen1';
import ProductScreen from './screens/ProductScreen1';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector,useDispatch } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import Amount from './screens/ShopDetails';
function Headerone() {
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
  

return(

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
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap" />

        {/* Humberger Begin */}
        <div className="humberger__menu__overlay" />
        <div className="humberger__menu__wrapper">
          <div className="humberger__menu__logo">
            <Link to="/">
              <img src= "https://colorlib.com/preview/theme/ogani/img/logo.png"  />
              </Link>
          </div>
          <div className="humberger__menu__cart">
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-heart" /> <span>1</span>
                </a>
              </li>
              <li>
                <a href="/cart">
                  <i className="fa fa-shopping-bag" /> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              item: <span><Amount/></span>
            </div>
          </div>
 
          <nav className="humberger__menu__nav mobile-menu">
            <ul>
              <li className="active">
                <a href="./index.html">Home</a>
              </li>
              <li>
                <a href="">Shop</a>
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
                <a href="./contact.html">Contact</a>
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
                <i className="fa fa-envelope" /> hello@colorlib.com
        </li>
              <li>Free Shipping for all Order of $99</li>
            </ul>
          </div>
        </div>
        {/* Humberger End */}
        {/* Header Section Begin */}
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope" /> hello@colorlib.com
                </li>
                      <li>Free Shipping for all Order of $99</li>
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
                    <div className="header__top__right__language">
                      <img src="img/language.png"  />
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
                    {/* <div className="header__top__right__auth">
                      <a href="#">
                        <i className="fa fa-user" /> Login
                </a>
                </div> */}
                <div className="header__top__right__language">
              {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
   <div className="header__top__right__language">
     <a href="#">Admin</a>
     <span className="arrow_carrot-down" />
     <ul>
       <li>
         <Link to="/orders">Orders</Link></li>
         <li>
         <Link to="/products">Products</Link>
         </li>
         <li>
         <Link to="/categories">Categories</Link>
       </li>
       </ul>
   </div>
 )}
            {userInfo && userInfo.isSeller && (
              <div className="header__top__right__language">
                <a href="#">Seller</a>
                <span className="arrow_carrot-down" />
                <ul>
                  <li>
                    <Link to="/sellerorders">Orders</Link></li>
                    <li>
                    <Link to="/sellerproducts">Products</Link>
                    </li>
                    <li>
                    <Link to="/sellercategories">Categories</Link>
                  </li>
                  </ul>
              </div>
            )}
          
                </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                <Link to="/">
              <img src= "https://colorlib.com/preview/theme/ogani/img/logo.png"  />
              </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="./index.html">Home</a>
                    </li>
                    <li>
                      <a href="/shop">Shop</a>
                    </li>
                    <li>
                      <a href="#">Pages</a>
                      <ul className="header__menu__dropdown">
                        <li>
                          <a href="./shop-details.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="./cart">Shoping Cart</a>
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
                      <a href="./contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
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
              </div>
            </div>
            <div className="humberger__open">
              <i className="fa fa-bars" />
            </div>
          </div>
        </header>
        {/* Header Section End */}
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

                    {category &&
                      category.map((category =>
                        < li key={category._id}>
                          <Link to={'/category/' + category._id}>{category.name}</Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
                    <form action="#">
                     
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
                <div className="hero__item set_bg" style={{backgroundImage: "url('https://cdn.britannica.com/s:700x500/17/196817-050-6A15DAC3/vegetables.jpg')"}}>
                  <div className="hero__text">
                    <span>FRUIT FRESH</span>
                    <h2>
                      Vegetable <br />
                100% Organic
              </h2>
                    <p>Free Pickup and Delivery Available</p>
                    <a href="/shop" className="primary-btn">
                      SHOP NOW
              </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero Section End */}
        {/* Categories Section Begin */}
        <section className="categories">
          <div className="container">
            <div className="row">
              <div className="categories__slider owl-carousel">
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    data-setbg="frontend\src\screens\img\categories\cat-1.jpg"
                  >
                    <h5>
                      <a href="#">Fresh Fruit</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    data-setbg="img/categories/cat-2.jpg"
                  >
                    <h5>
                      <a href="#">Dried Fruit</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    data-setbg="img/categories/cat-3.jpg"
                  >
                    <h5>
                      <a href="#">Vegetables</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    data-setbg="frontend\src\screens\img\categories\cat-1.jpg"
                  >
                    <h5>
                      <a href="#">drink fruits</a>
                    </h5>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div
                    className="categories__item set-bg"
                    data-setbg="frontend\src\screens\img\categories\cat-1.jpg"
                  >
                    <h5>
                      <a href="#">drink fruits</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}

        </div>
        
);
}
export default Headerone;

