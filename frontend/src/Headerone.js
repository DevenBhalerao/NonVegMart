import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'js-cookie';
// import {createHashHistory} from "history";
import {useHistory} from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
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
// import SigninScreen from './screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import Amount from './screens/ShopDetails';
function Headerone() {
  const [search, setSearch] = useState('');
  const [signin, setSigninModal] = useState(false);
  console.log(signin);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, category, error } = categoryList;
  const history = useHistory();
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  const dispatch = useDispatch();
  const signinModal = ()=>{
    setSigninModal(true);
    dispatch(SigninScreen(signin))
  }
  // console.log(history)
  const searchHandler = ()=>{
    history.push('/shop/?search=' +search)
  };
  let latitude,longitude;
  function geolocation(e){
    e.preventDefault();
    if("geolocation" in navigator){
     
      navigator.geolocation.getCurrentPosition((p,e) => {
        if(e){
          alert("There is an error!")
        }else{
          latitude = p.coords.latitude;
          longitude = p.coords.longitude;
          Cookie.set(latitude , longitude);
          // location = latitude + longitude;
          console.log(`latitude = ${latitude}` , `longitude = ${longitude}`);
        }
      })
    }
    
  }
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
            item: <span><Amount /></span>
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
      <header className="header" style={{
        'background-color': '#f5f5f5',
      }} >
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
        <div className="container" style={{ 'background-color': '#f5f5f5' }}>
          <div className="row">
            <div style={{ 'text-align': 'center' }} class="col-lg-2">
              <div style={{ 'display': 'inline-block' }} class="header__logo">
                <a href="/">
                  <img
                    style={{ width: '60%', height: '60%' }}
                    src={`http://localhost:5000/logo.png`}
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-7">
              <nav class="header__menu">
                <div className="row">

                  <div className="col-lg-12">
                    <div className="hero__search">
                      <div className="hero__search__form">
                        {/* <form ={searchHandler}> */}
                        { !geolocation/*latitude && longitude*/ ?(
                    
                         <li> Mumbai </li>
                 
                        ):(
                          <a href ='javascript:void(0)' onClick={geolocation} > <i className="fa fa-location-arrow" />Detect Location</a>
                        )
                        }
                        
                          <input type="text" placeholder="What do you need?" onChange = {e => setSearch(e.target.value)}/>
                          <button type="submit" className="site-btn" onClick={searchHandler}>
                            SEARCH
                          </button>
                          {/* </form> */}
                      </div>

                    </div>



                  </div>
                </div>




              </nav>
            </div>
            <div class="col-lg-2 " style={{

              'justify-content': 'center',

            }}>

              {!userInfo && (

                <li class="redhover" style={{
                  'list-style-type': 'none', 'font-size': '16px', 'font-family': 'Segoe UI', 'padding': '24px 00px', 'margin-left': '50px',
                  'max-width': '50%',
                }}>

                  <a href='signin' /*onClick={signinModal}*/ style={{ 'font-size': '16px', 'font-family': 'Segoe UI', 'color': '#1c1c1c' }} ><img src={`http://localhost:5000/login.svg`} style={{
                    'display': 'block',
                    'max-width': '40%',
                    'height': 'auto',
                  }} />Sign In</a>


                </li>

              )

              }

              {userInfo && userInfo.isAdmin && (
                <li>
                  <a href="#">Admin</a>
                  <ul className="header__menu__dropdown">
                    <li>
                      <a href="/profile">My account</a>
                    </li>
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
                      <a href="/profile">My account</a>
                    </li>
                    <li>
                      <a href="/orders">Orders</a>
                    </li>
                    <li>
                      <a href="/sellerproducts">Products</a>
                    </li>
                  </ul>
                </li>
              )}

            </div>

            <div class="col-lg-1">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <img src={`http://localhost:5000/cart.png`} style={{
                        'display': 'block',
                        'max-width': '100%',
                        'height': 'auto',
                      }} />
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>

          <div className="humberger__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header >
      {/*Header Section End */}
      {/* Hero Section Begin */}

      {/* Hero Section End */}
    </div >
  );
}
export default Headerone;
