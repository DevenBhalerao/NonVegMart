import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

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

  const items = [
    {
      src:
        'http://localhost:5000/chicken-carousel.gif'
      ,

    },
    {
      src:
        'http://localhost:5000/fish-carousel.jpg'
      ,

    },
    {
      src: 'http://localhost:5000/mutton-carousel.jpg',

    },
    {
      src: 'http://localhost:5000/ready-carousel.gif',

    },
    {
      src: 'http://localhost:5000/coldcut-carousel.gif',

    }

  ];


  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

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
    <div>

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


        <div style={{ 'width': '100%' }}>
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            style={{ 'width': '100%', 'height': '100%' }}

          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </div>
        {/* Categories Section Begin */}
        <section className="categories" style={{ 'background-color': '#DC3023' }}>
          <div className="container">



            <div className="row " style={{ 'padding-top': '35px' }}>
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 style={{ 'color': 'white' }} >Explore by Category</h2>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://c.pxhere.com/images/8c/b8/185b5e821f27a5a08b59de9bc60d-1583337.jpg!d')",
                  }}
                >
                  <h5>
                    <a href="/shop/searchCategory?=Fish">Fish</a>
                  </h5>
                </div>
              </div>

              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://c2.peakpx.com/wallpaper/187/885/219/salted-peppered-chicken-legs-wallpaper-preview.jpg')",
                  }}
                >
                  <h5>
                    <a href="/shop/searchCategory?=chicken">Chicken</a>
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
                    <a href="/shop/searchCategory?=Mutton">Mutton</a>
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
                    <a href="/shop/searchCategory?=Eggs">Eggs</a>
                  </h5>
                </div>
              </div>




            </div>

            <div className="row" style={{ 'padding-top': '1%', 'justify-content': 'center', 'align-items': 'center', 'padding-bottom': '35px' }}>

              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://c1.peakpx.com/wallpaper/134/271/707/catering-bread-appetite-calories-wallpaper-preview.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Kebabs</a>
                  </h5>
                </div>
              </div>


              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  style={{
                    backgroundImage:
                      "url('https://cdn.pixabay.com/photo/2015/03/11/13/21/wurstplatte-668676_1280.jpg')",
                  }}
                >
                  <h5>
                    <a href="#">Cold Cuts</a>
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
                    <li style={{ 'list-style-type': 'none' }} key={product._id}>
                      <div className="featured__item__pic set-bg">
                        <Link to={'/product/' + product._id}>
                          <img
                            src={`http://localhost:5000/${product.image}`}
                            alt="product"
                          />
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
                        <h5>&#8377;{product.price}</h5>
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

        <div class="banner" style={{ 'background-color': '#DC3023', 'padding-bottom': '5%', 'padding-top': '5%' }} >
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                  <img src={`http://localhost:5000/poster1.jpg`} alt="" />
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="banner__pic">
                  <img src={`http://localhost:5000/poster2.jpg`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div >
  );
}

export default LandingScreen;
