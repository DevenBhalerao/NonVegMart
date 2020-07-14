import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import './css/style.css'
import './css/App.css'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';

export default function LandingScreen(props){
    
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


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
      <Jumbotron className="Jumbotron" align="center">
        <h1>Welcome to Non-Veg Mart!</h1>
      </Jumbotron>
     
      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='http://localhost:5000/chicken-carousel.gif'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='http://localhost:5000/fish-carousel.jpg'
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='http://localhost:5000/mutton-carousel.jpg'
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


      
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
    <div className="products-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>Non-Veg Items</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="special-menu text-center">
                        <div className="button-group filter-button-group">
                            <button className="active" data-filter="*">All</button>
                            <button data-filter=".top-featured">Top featured</button>
                            <button data-filter=".best-seller">Best seller</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row special-list">
            {products.map((product) => (
                <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img src={`http://localhost:5000/${product.image}`} className="img-fluid" alt="Image" />
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fa fa-eye"></i></a></li>
                                    {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fa fa-sync-alt"></i></a></li> */}
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="fa fa-heart"></i></a></li>
                                </ul>
                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                        </div>
                        <div className="why-text">
                            <h4>{product.name}</h4>
                            <h5>{product.price}</h5>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
    <div className="latest-blog">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="title-all text-center">
                        <h1>latest blog</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src= {require ("./images/blog-img.jpg")} alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src= {require ("./images/blog-img-01.jpg")} alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-4">
                    <div className="blog-box">
                        <div className="blog-img">
                            <img className="img-fluid" src= {require ("./images/blog-img-02.jpg")} alt="" />
                        </div>
                        <div className="blog-content">
                            <div className="title-blog">
                                <h3>Fusce in augue non nisi fringilla</h3>
                                <p>Nulla ut urna egestas, porta libero id, suscipit orci. Quisque in lectus sit amet urna dignissim feugiat. Mauris molestie egestas pharetra. Ut finibus cursus nunc sed mollis. Praesent laoreet lacinia elit id lobortis.</p>
                            </div>
                            <ul className="option-blog">
                                <li><a href="#"><i className="far fa-heart"></i></a></li>
                                <li><a href="#"><i className="fas fa-eye"></i></a></li>
                                <li><a href="#"><i className="far fa-comments"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

