import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import './css/style.css'

function HomeScreen(props) {
  const qty = 1;
  let [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('');
//   const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const dispatch = useDispatch();
  let category;
  let categoryArray = ["Fish" , "chicken" , "Mutton", "Eggs" , "Kebabs", "Cold-Cuts"];  
  category = props.match.params.id ? props.match.params.id : '';
  for(let i=0;i<categoryArray.length;i++){
    if(props.location.search.split('=')[1] === categoryArray[i]){
      category = categoryArray[i];
    }else{
      searchKeyword = props.location.search
      ? (props.location.search.split('=')[1])
      : " ";
    }
  }
  useEffect(() => {
    dispatch(listProducts(category , searchKeyword));
    dispatch(listCategory(category));
    return () => {
      //
    };
  }, [category]);


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct , indexOfLastProduct);

  const pageNumbers = [];
  const totalProducts = products.length;

  const paginate = (pageNumber)=>{
    setCurrentPage(pageNumber);
  }
  for(let i=1;i <= Math.ceil(totalProducts / productsPerPage) ; i++){
    pageNumbers.push(i);
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };


  const handleAddToCart = (e) => {
    props.history.push("/cart/" + e + "?qty=" + qty)
  }


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
                                    {currentProducts.map((product) => (
                                        <div className="col-sm-6 col-md-6 col-lg-4 col-xl-4">
                                          
                                            <div className="products-single fix">
                                                <div className="box-img-hover">
                                                <Link to={"/product/" + product._id}><img  style={{'height' : '150px' , width:'100%'}}src= {`http://localhost:5000/${product.image}`}  className="img-fluid" alt="Image" /></Link>
                                                    <div className="mask-icon">
                                                        <ul>
                                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fa fa-eye"></i></a></li>
                                                            {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fas fa-sync-alt"></i></a></li> */}
                                                            <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="fa fa-heart"></i></a></li>
                                                        </ul>
                                                        <a href={"/cart/" + product._id + "?qty=" + qty} className="cart">Add to Cart</a>
                                                    </div>
                                                </div>
                                                <div className="why-text">
                                                    <h4>{product.name}</h4>
                                                    <h5> &#8377; {product.price}</h5>
                                                </div>
                                            </div>
                                            
                                        </div> 
                                        ))}
                                        
                                </div>
                        <center><div class="product__pagination">
                            {pageNumbers.map(number => (
                                <span style={{ marginLeft:'10px'}}><a className='product_pagination'
                                onClick={()=> paginate(number)} href="javascript:void(0)"> {number}</a></span>
                                ))}
                            
                                <a><i class="fa fa-long-arrow-right m-2"></i></a>
                                
                            </div></center>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>
                
				<div style={{position:'absolute' , top:'0rem', left:'56rem' }} className="col-xl-3 col-lg-3 col-sm-12 col-xs-12 sidebar-shop-left">
                    <div className="product-categorie">
                        
                        <div className="filter-sidebar-left">
                            <div className="title-left">
                                <h3>Categories</h3>
                            </div>
                            <div className="list-group list-group-collapse list-group-sm list-group-tree" id="list-group-men" data-children=".sub-men">
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=Fish" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Fish <small className="text-muted"></small>
								</a>

                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=chicken" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Chicken <small className="text-muted"></small>
								</a>

                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=Mutton" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Mutton <small className="text-muted"></small>
								</a>

                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=Kebabs" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Kebabs<small className="text-muted"></small>
								</a>

                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=Eggs" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Eggs<small className="text-muted"></small>
								</a>

                                </div>
                                <div className="list-group-collapse sub-men">
                                    <a className="list-group-item list-group-item-action" href="/shop/searchCategory?=Cold-Cuts" data-toggle="collapse" aria-expanded="true" aria-controls="sub-men1">Cold-Cuts <small className="text-muted"></small>
								</a>

                                </div>
                                
                               </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    
</div>
  );
}
export default HomeScreen;
