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
import '../slider/css/style.css';
import '../slider/demo.css';
import MetaTags from 'react-meta-tags';
function Xyz() {
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
    <>
      <div>
        <MetaTags>
        <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive CSS Only Carousel Slider Demo</title>
  <meta
    name="description"
    content="Check out this demo to create responsive carousel slider with the help of CSS only. It also support multiple items and images."
  />
  <meta name="author" content="Frontendscript" />
  

          <meta charSet="UTF-8" />
          <meta name="description" content="Ogani Template" />
          <meta name="keywords" content="Ogani, unica, creative, html" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </MetaTags>
        <title>Ogani | Template</title>
        {/* Google Font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
        />{/*Only for demo purpose - no need to add.*/}
        
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
        <section className="categories">
          <div className="container">
            <div className="row">
             
            <div>
  
  <section>
    <div className="col-rt-12">
      <div className="demo-container">
        <div className="carousel">
          <input
            defaultChecked="checked"
            className="carousel__activator"
            id="carousel-slide-activator-1"
            name="carousel"
            type="radio"
          />
          <input
            className="carousel__activator"
            id="carousel-slide-activator-2"
            name="carousel"
            type="radio"
          />
          <input
            className="carousel__activator"
            id="carousel-slide-activator-3"
            name="carousel"
            type="radio"
          />
          <div className="carousel__controls">
            <label
              className="carousel__control carousel__control--forward"
              htmlFor="carousel-slide-activator-2"
            ></label>
          </div>
          <div className="carousel__controls">
            <label
              className="carousel__control carousel__control--backward"
              htmlFor="carousel-slide-activator-1"
            ></label>
            <label
              className="carousel__control carousel__control--forward"
              htmlFor="carousel-slide-activator-3"
            ></label>
          </div>
          <div className="carousel__controls">
            <label
              className="carousel__control carousel__control--backward"
              htmlFor="carousel-slide-activator-2"
            ></label>
          </div>
          <div className="carousel__screen">
            <div className="carousel__track">
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">a</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">b</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">c</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">d</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">e</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">f</div>
              </div>
              <div className="carousel__item carousel__item--mobile-in-1 carousel__item--tablet-in-2 carousel__item--desktop-in-3">
                <div className="demo-content">g</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>;

              
            </div>
          </div>
        </section>
        ;{/* Categories Section End */}
        {/* Featured Section Begin */}
        <section className="featured spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2>Featured Product</h2>
                </div>
                <div className="featured__controls">
                  <ul>
                    <li className="active" data-filter="*">
                      All
                    </li>
                    {category.map((category) => (
                      <li data-filter={'.' + category.name}>{category.name}</li>
                    ))}
                    <li data-filter=".oranges">Oranges</li>
                  </ul>
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
                          <img src={product.image} alt="product" />
                        </Link>
                        <ul className="featured__item__pic__hover">
                          <li>
                            <a href="#">
                              <i className="fa fa-heart" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-retweet" />
                            </a>
                          </li>
                          <li>
                            <Link to={'/cart/' + product._id}>
                              <i className="fa fa-shopping-cart" />
                            </Link>
                          </li>
                        </ul>
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
        {/* Banner Begin */}
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="banner__pic">
                  <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Banner End */}
        {/* Latest Product Section Begin */}
        <section className="latest-product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Latest Products</h4>
                 
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Top Rated Products</h4>
                  
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="latest-product__text">
                  <h4>Review Products</h4>
                 
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                      <a href="#" className="latest-product__item">
                        <div className="latest-product__item__pic">
                          <img src="https://colorlib.com/preview/theme/ogani/img/logo.png" />
                        </div>
                        <div className="latest-product__item__text">
                          <h6>Crab Pool Security</h6>
                          <span>$30.00</span>
                        </div>
                      </a>
                    </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Latest Product Section End */}
      </div>
      ; )
    </>
  );
}
export default Xyz;
