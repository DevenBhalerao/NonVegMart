import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import MetaTags from 'react-meta-tags';
function LandingScreen() {
  const categoryList = useSelector((state) => state.categoryList);
  const { category } = categoryList;
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategory());
    dispatch(listProducts(category));

    return () => {
      //
    };
  }, []);
  return (
    <div className="container">
      <div
        className="hero__item set_bg"
        style={{
          backgroundImage:
            "url('https://p0.pikrepo.com/preview/635/800/closeup-photo-of-variety-of-meat-products.jpg')",
        }}
      >
        <div className="hero__text">
          <span style={{ color: 'white' }}>FRESH PRODUCTS</span>
          <h2 style={{ color: 'white' }}>
            MEAT AND POULTRY <br />
            100% Fresh
          </h2>
          <p>Free Pickup and Delivery Available</p>
          <a href="/shop" className="primary-btn">
            SHOP NOW
          </a>
        </div>
      </div>
      <div>
        <title>Ogani | Template</title>
        {/* Google Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
        />
        {/* Js Plugins */}
        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.nice-select.min.js"></script>
        <script src="js/jquery-ui.min.js"></script>
        <script src="js/jquery.slicknav.js"></script>
        <script src="js/mixitup.min.js"></script>
        <script src="js/owl.carousel.min.js"></script>
        <script src="js/main.js"></script>
        {/* Categories Section Begin */}
        <section className="categories" style={{ 'margin-top': '45px' }}>
          <div className="container">
            <div className="row ">
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://c.pxhere.com/images/8c/b8/185b5e821f27a5a08b59de9bc60d-1583337.jpg!d')",
                  }}
                >
                  <h5>
                    <a href="#">Fish</a>
                  </h5>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://www.publicdomainpictures.net/pictures/60000/velka/seasoned-chicken-legs.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Chicken</a>
                  </h5>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://images.pexels.com/photos/1696178/pexels-photo-1696178.jpeg?cs=srgb&dl=meat-raw-meat-1696178.jpg&fm=jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Mutton</a>
                  </h5>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://live.staticflickr.com/65535/49829839696_2234a9820a_b.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Eggs</a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
              </div>
            </div>
            <div className="row featured__filter">
              {products.map((product) => (
                <div className="col-lg-3 col-md-4 col-sm-6 mix ">
                  <div className="featured__item">
                    <li key={product._id}>
                      <div className="featured__item__pic set-bg">
                        <Link to={'/product/' + product._id}>
                          <img
                            src={`http://localhost:5000/${product.image}`}
                            alt="product"
                          />
                        </Link>
                      </div>
                      <div className="featured__item__text">
                        <h6>
                          <Link to={'/product/' + product._id}>
                            {product.name}
                          </Link>
                        </h6>
                        <h5>${product.price}</h5>
                      </div>
                    </li>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Featured Section End */}
        {/* Latest Product Section Begin */}
      </div>
    </div>
  );
}
export default LandingScreen;
