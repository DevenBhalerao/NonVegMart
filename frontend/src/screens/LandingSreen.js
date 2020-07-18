import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
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
    //   console.log(productList)
      const { products, loading, error } = productList;
    //   console.log(products)
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
        <div className="search-bar">
        <input type="text"  placeholder="Search anything"></input><a href="/shop"><i className="fa fa-search" style={{'color':'white'}}></i></a>
        </div>
      </Jumbotron>

      
     
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
                            <Link to={'/product/' + product._id}><img  style={{'height' : '150px' , width:'100%'}}src={`http://localhost:5000/${product.image}`} className="img-fluid" alt="Image" />
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fa fa-eye"></i></a></li>
                                    {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fa fa-sync-alt"></i></a></li> */}
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="fa fa-heart"></i></a></li>
                                </ul>

                                <a className="cart" href="#">Add to Cart</a>
                            </div>
                            </Link>
                        </div>
                        
                        <div className="why-text">
                            <h4>{product.name}</h4>
                            <h5>&#8377;{product.price}</h5>
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
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                <li><a href="#"><i className="fa fa-comments"></i></a></li>
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
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                <li><a href="#"><i className="fa fa-comments"></i></a></li>
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
                                <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                <li><a href="#"><i className="fa fa-eye"></i></a></li>
                                <li><a href="#"><i className="fa fa-comments"></i></a></li>
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

