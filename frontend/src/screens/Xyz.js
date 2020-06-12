import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useState, useEffect }  from 'react';
import {Link } from 'react-router-dom';
import $ from 'jquery';

import axios from 'axios';


import { useSelector,useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import'./css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import'./css/style.css';
import MetaTags from 'react-meta-tags';
function Xyz() {
    
    const categoryList = useSelector((state) => state.categoryList);
    const {category } = categoryList;
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));
    return () => {
      //
    };
  }, [category]);
    return<>
    {category &&
      <h2>{category}</h2>}

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
  

{/* Js Plugins */}
<script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.nice-select.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/jquery.slicknav.js"></script>
    <script src="js/mixitup.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/main.js"></script> 
    {
  /* Categories Section Begin */
}
<section className="categories">
  <div className="container">
    <div className="row">
      <div className="categories__slider owl-carousel">
        <div className="col-lg-3">
          <div
            className="categories__item set-bg"
            style={{backgroundImage: "url('https://cdn.britannica.com/s:700x500/17/196817-050-6A15DAC3/vegetables.jpg')"}}
          >
            <h5>
              <a href="#">Fresh Fruit</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="categories__item set-bg"
            style={{backgroundImage: "url('https://cdn.britannica.com/s:700x500/17/196817-050-6A15DAC3/vegetables.jpg')"}}>
          
            <h5>
              <a href="#">Dried Fruit</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="categories__item set-bg"
            style={{backgroundImage: "url('https://cdn.britannica.com/s:700x500/17/196817-050-6A15DAC3/vegetables.jpg')"}}
          >
            <h5>
              <a href="#">Vegetables</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="categories__item set-bg"
            style={{backgroundImage: "url('https://cdn.britannica.com/s:700x500/17/196817-050-6A15DAC3/vegetables.jpg')"}}
          >
            <h5>
              <a href="#">drink fruits</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3">
          <div
            className="categories__item set-bg"
            data-setbg="img/categories/cat-5.jpg"
          >
            <h5>
              <a href="#">drink fruits</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
{
  /* Categories Section End */
}

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
            <li className="active" data-filter="*">All</li>
            <li data-filter=".oranges">Oranges</li>
            <li data-filter=".fresh-meat">Fresh Meat</li>
            <li data-filter=".vegetables">Vegetables</li>
            <li data-filter=".fastfood">Fastfood</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row featured__filter">
        
        <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                  {
                      products.map(product =>
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
                      <Link to ={'/cart/' + product._id}>
                      <i className="fa fa-shopping-cart" />
                      </Link>
                      </li>
                      </ul>
                </div>
              <div className="featured__item__text">
              <h6>
              <Link to={'/product/' + product._id}>{product.name}</Link>
              </h6>
               <h5>${product.price}</h5>
              </div>
          </li>
        
          
          )}
          </div>
        
        </div>
        
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
            <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6">
          <div className="banner__pic">
            <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
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
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"/>
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
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
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
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
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Top Rated Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"  />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
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
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
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
        <div className="col-lg-4 col-md-6">
          <div className="latest-product__text">
            <h4>Review Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-prdouct__slider__item">
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
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
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>Crab Pool Security</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="#" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img src="https://colorlib.com/preview/theme/ogani/img/logo.png"   />
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
    </div>
  </section>
  {/* Latest Product Section End */}
  {/* Blog Section Begin */}
  <section className="from-blog spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title from-blog__title">
            <h2>From The Blog</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-1.jpg"   />
            </div>
            <div className="blog__item__text">
              <ul>
                <li>
                  <i className="fa fa-calendar-o" /> May 4,2019
                </li>
                <li>
                  <i className="fa fa-comment-o" /> 5
                </li>
              </ul>
              <h5>
                <a href="#">Cooking tips make cooking simple</a>
              </h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-2.jpg"   />
            </div>
            <div className="blog__item__text">
              <ul>
                <li>
                  <i className="fa fa-calendar-o" /> May 4,2019
                </li>
                <li>
                  <i className="fa fa-comment-o" /> 5
                </li>
              </ul>
              <h5>
                <a href="#">6 ways to prepare breakfast for 30</a>
              </h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6">
          <div className="blog__item">
            <div className="blog__item__pic">
              <img src="img/blog/blog-3.jpg"  />
            </div>
            <div className="blog__item__text">
              <ul>
                <li>
                  <i className="fa fa-calendar-o" /> May 4,2019
                </li>
                <li>
                  <i className="fa fa-comment-o" /> 5
                </li>
              </ul>
              <h5>
                <a href="#">Visit the clean farm in the US</a>
              </h5>
              <p>
                Sed quia non numquam modi tempora indunt ut labore et dolore
                magnam aliquam quaerat{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Section End */}
  
  

</div>;

)
</>}
export default Xyz;