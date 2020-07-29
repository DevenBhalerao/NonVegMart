import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'
import {useHistory} from 'react-router-dom';
import './css/style.css'
import './css/App.css'
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';

export default function LandingScreen(props){
    const [search, setSearch] = useState('');
    const [index, setIndex] = useState(0);
    const history = useHistory();
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };


      const categoryList = useSelector((state) => state.categoryList);
      const { category } = categoryList;
      const productList = useSelector((state) => state.productList);
    //   console.log(productList)
      let { products, loading, error } = productList;
    //   const products = product[4]
    //   console.log(products)
    
      const dispatch = useDispatch();
    
      useEffect(() => {
        dispatch(listCategory());
        dispatch(listProducts(category));
    
        return () => {
          //
        };
      }, []);

      const searchHandler = ()=>{
        history.push('/shop/?search=' +search)
      };
  return (
    <div>
      <Jumbotron className="Jumbotron" align="center">
        <h1>Welcome to Non-Veg Mart!</h1>
        <div className="search-bar">
        <input type="text"  placeholder="Search anything"  
        onChange = {e => setSearch(e.target.value)}></input><a href="javascript:void(0)"  
        onClick={searchHandler}><i className="fa fa-search" style={{'color':'white'}}></i></a>
        </div>
      </Jumbotron>

      <section className="categories" >
          <div className="container">



            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 style={{ 'color': '#b0b435' }} >Explore by Category</h2><br></br>
                </div>
              </div>
              <div >
              <a href="/shop/searchCategory?=Fish"><img className="categoryImage" src="https://c.pxhere.com/images/8c/b8/185b5e821f27a5a08b59de9bc60d-1583337.jpg!d"></img></a>
              <p className="categoryName">Fish</p>
              </div>

              <div >
              <a href="/shop/searchCategory?=chicken"><img className="categoryImage" src='https://c2.peakpx.com/wallpaper/187/885/219/salted-peppered-chicken-legs-wallpaper-preview.jpg'></img></a>
              <p className="categoryName">Chicken</p>
              </div>
              <div >
              <a href="/shop/searchCategory?=Mutton"> <img className="categoryImage" src='https://images.pexels.com/photos/1696178/pexels-photo-1696178.jpeg?cs=srgb&dl=meat-raw-meat-1696178.jpg&fm=jpg'></img></a>
              <p className="categoryName">Mutton</p>
              </div>
              <div>
              <a href="/shop/searchCategory?=Eggs"><img className="categoryImage" src='https://live.staticflickr.com/65535/49829839696_2234a9820a_b.jpg'></img></a>
              <p className="categoryName">Eggs</p>
              </div>
              <div >
              <a href="/shop/searchCategory?=Kebabs"> <img className="categoryImage" src='https://c1.peakpx.com/wallpaper/134/271/707/catering-bread-appetite-calories-wallpaper-preview.jpg'></img></a>
              <p className="categoryName">Kebabs</p>
              </div>
              <div>
              <a href="/shop/searchCategory?=Cold-Cuts"> <img className="categoryImage" src='https://cdn.pixabay.com/photo/2015/03/11/13/21/wurstplatte-668676_1280.jpg'></img></a>
              <p className="categoryName">Cold-Cuts</p>
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
                        
                    </div>
                </div>
            </div>
            

            <div   className="row special-list">
                
                {products.slice(0,4).map((product) => (
                <div className="col-lg-3 col-md-6 special-grid best-seller">
                    <div className="products-single fix">
                        <div className="box-img-hover">
                            <div className="type-lb">
                                <p className="sale">Sale</p>
                            </div>
                            <img  style={{'height' : '200px' , width:'300px'}}src={`http://localhost:5000/${product.image}`} className="img-fluid" alt="Image" />
                            <div className="mask-icon">
                                <ul>
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="View"><i className="fa fa-eye"></i></a></li>
                                    {/* <li><a href="#" data-toggle="tooltip" data-placement="right" title="Compare"><i className="fa fa-sync-alt"></i></a></li> */}
                                    <li><a href="#" data-toggle="tooltip" data-placement="right" title="Add to Wishlist"><i className="fa fa-heart"></i></a></li>
                                </ul>

                                <a className="cart" href={"/cart/" + product._id + "?qty=" + 1}>Add to Cart</a>
                            </div>
                           
                        </div>
                        <Link to={'/product/' + product._id}>
                          <div className="why-text">
                              <h4>{product.name}</h4>
                              <h5>&#8377;{product.price}</h5>
                          </div>
                        </Link>
                    </div>
                    
                
                </div>
                
                ))}
                <span>
                    <a href='/shop'><i style = {{position:'absolute' , right:'.5 rem' , top:'1.5 rem',marginTop:'120px' , color:'#b0b435'}} className=" fa fa-chevron-right "></i></a>
                    
                </span>
                
            </div>
        </div>
    </div>
   

    </div>
  )
}

