import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import './css/style.css'

function HomeScreen(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category));
    dispatch(listCategory(category));
    return () => {
      //
    };
  }, [category]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };

  return (
    <div>

<div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Shop</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Shop</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <div className="shop-box-inner">
        <div className="container">
            <div className="row">
                <div className="col-xl-9 col-lg-9 col-sm-12 col-xs-12 shop-content-right">
                    <div className="right-product-box">
                        <div className="product-item-filter row">
                            <div className="col-12 col-sm-8 text-center text-sm-left">
                                <div className="toolbar-sorter-right">
                                    <span>Sort by </span>
                                    <select id="basic" className="selectpicker show-tick form-control" data-placeholder="$ USD" onChange={sortHandler}>
									<option data-display="Select">Nothing</option>
									<option value="1">Newest</option>
									<option value="2">Lowest</option>
									<option value="3">Highest</option>
									{/* <option value="4">Best Selling</option> */}
								</select>
                                </div>
                                <p>Showing all {products.length} results</p>
                            </div>
                            <div className="col-12 col-sm-4 text-center text-sm-right">
                                <ul className="nav nav-tabs ml-auto">
                                    <li>
                                        <a className="nav-link active" href="#grid-view" data-toggle="tab"> <i className="fa fa-th"></i> </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="#list-view" data-toggle="tab"> <i className="fa fa-list-ul"></i> </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="product-categorie-box">
                            <div className="tab-content">
                                <div role="tabpanel" className="tab-pane fade show active" id="grid-view">
                                    <div className="row">
                                    {products.map((product) => (
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                          
                                            <div className="products-single fix">
                                                <div className="box-img-hover">
                                                    <img src= {`http://localhost:5000/${product.image}`}  className="img-fluid" alt="Image" />
                                                    <div className="mask-icon">
                                                        <ul>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fa fa-eye"></i></a></li>
                                                            {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li> */}
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
                    </div>
                </div>
				<div className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                    <div className="product-categorie">
                        <div className="search-product">
                            <form action="#">
                                <input className="form-control" placeholder="Search here..." type="text" />
                                <button type="submit"> <i className="fa fa-search"></i> </button>
                            </form>
                        </div>
                        <div className="filter-sidebar-left">
                            <div className="title-left">
                                <h3>Categories</h3>
                            </div>
                            <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="#sub-men1" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Fruits & Drinks <small className="text-muted">(100)</small>
								</a>
                                    <div className="collapse show" id="sub-men1" data-parent="#list-group-men">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action active">Fruits 1 <small className="text-muted">(50)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Fruits 2 <small className="text-muted">(10)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Fruits 3 <small className="text-muted">(10)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Fruits 4 <small className="text-muted">(10)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Fruits 5 <small className="text-muted">(20)</small></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="#sub-men2" data-toggle="collapse" aria-expanded="false" aria-controls="sub-men2">Vegetables 
								<small className="text-muted">(50)</small>
								</a>
                                    <div className="collapse" id="sub-men2" data-parent="#list-group-men">
                                        <div className="list-group">
                                            <a href="#" className="list-group-item list-group-item-action">Vegetables 1 <small className="text-muted">(10)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Vegetables 2 <small className="text-muted">(20)</small></a>
                                            <a href="#" className="list-group-item list-group-item-action">Vegetables 3 <small className="text-muted">(20)</small></a>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="list-group-item list-group-item-action"> Grocery  <small className="text-muted">(150) </small></a>
                                <a href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(11)</small></a>
                                <a href="#" className="list-group-item list-group-item-action"> Grocery <small className="text-muted">(22)</small></a>
                            </div>
                        </div>
                        <div className="filter-price-left">
                            <div className="title-left">
                                <h3>Price</h3>
                            </div>
                            <div className="price-box-slider">
                                <div id="slider-range"></div>
                                <p>
                                    <input type="text" id="amount"/>
                                    <button className="btn hvr-hover" type="submit">Filter</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
    // </div>
  );
}
export default HomeScreen;
