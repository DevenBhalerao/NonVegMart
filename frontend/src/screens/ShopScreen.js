import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import '../css/style.css';
import 'jquery-ui-dist/jquery-ui.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './css/elegant-icons.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';

function HomeScreen(props) {
  

  let [searchKeyword, setSearchKeyword] = useState('');
  let category;
  let categoryArray = ["Fish" , "chicken" , "Mutton", "Eggs" , "Kebabs"];  
  category = props.match.params.id ? props.match.params.id : '';
  for(let i=0;i<5;i++){
    if(props.location.search.split('=')[1] === categoryArray[i]){
      category = categoryArray[i];
    }else{
      searchKeyword = props.location.search
      ? (props.location.search.split('=')[1])
      : " ";
    }
  }
  console.log(category);
  
  const [sortOrder, setSortOrder] = useState('');
 
  // category = searchKeyword;
  const productList = useSelector((state) => state.productList);
  // console.log(productList);
  const { products, loading, error } = productList;
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);
  // console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(category, searchKeyword));
    dispatch(listCategory(category));
    return () => {
      //
    };
  }, [category]);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   dispatch(listProducts(category, searchKeyword, sortOrder));
  // };
  const sortHandler = (e) => {
    setSortOrder(e.target.value);
    dispatch(listProducts(category, searchKeyword, sortOrder));
  };
  const [qty, setQty] = useState(1);
  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

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

  console.log(currentProducts);
  return (
    <>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-5">
              <div class="sidebar">
                <div class="sidebar__item">
                  <h4>Department</h4>
                  <ul>
                    <li>
                      <a href="#">Fresh Meat</a>
                    </li>
                    <li>
                      <a href="#">Vegetables</a>
                    </li>
                    <li>
                      <a href="#">Fruit & Nut Gifts</a>
                    </li>
                    <li>
                      <a href="#">Fresh Berries</a>
                    </li>
                    <li>
                      <a href="#">Ocean Foods</a>
                    </li>
                    <li>
                      <a href="#">Butter & Eggs</a>
                    </li>
                    <li>
                      <a href="#">Fastfood</a>
                    </li>
                    <li>
                      <a href="#">Fresh Onion</a>
                    </li>
                    <li>
                      <a href="#">Papayaya & Crisps</a>
                    </li>
                    <li>
                      <a href="#">Oatmeal</a>
                    </li>
                  </ul>
                </div>

                {/* <div class="sidebar__item">
                  <div class="latest-product__text">
                    <h4>Latest Products</h4>
                    <div class="latest-product__slider owl-carousel">
                      <div class="latest-prdouct__slider__item">
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                      </div>
                      <div class="latest-prdouct__slider__item">
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-1.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-2.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                        <a href="#" class="latest-product__item">
                          <div class="latest-product__item__pic">
                            <img src="img/latest-product/lp-3.jpg" alt=""></img>
                          </div>
                          <div class="latest-product__item__text">
                            <h6>Crab Pool Security</h6>
                            <span>&#8377;30.00</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div class="col-lg-9 col-md-7">
              <div class="filter__item">
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="filter__sort">
                      <span>Sort By</span>
                      <select name="sortOrder" onChange={sortHandler}>
                        <option value="">Newest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                      </select>
                    </div>
                  </div>
                  {/* <ul className="filter">
                    <li>
                      <form onSubmit={submitHandler}>
                        <input
                          name="searchKeyword"
                          onChange={(e) => setSearchKeyword(e.target.value)}
                        />
                        <button type="submit">Search</button>
                      </form>
                    </li>
                  </ul> */}
                  {/* <div class="col-lg-4 col-md-4">
                                <div class="filter__found">
                                    <h6><span>16</span> Products found</h6>
                                </div>
                            </div> */}
                  <div class="col-lg-4 col-md-3">
                    <div class="filter__option">
                      <span class="icon_grid-2x2"></span>
                      <span class="icon_ul"></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                {currentProducts.map((product) => (
                  <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                      <Link to={'/product/' + product._id}>
                        <div
                          class="product__item__pic set-bg"
                          
                        >
                          <img src={`http://localhost:5000/${product.image}`} alt="product" />
                          {console.log(product.image)}
                        </div>
                      </Link>
                     
                      <div class="product__item__text">
                        <h6>
                          <Link to = {'/product/' + product._id}>{product.name}</Link>
                        </h6>
                        <h5>&#8377;{product.price}</h5>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <Pagination productsPerPage={productsPerPage} totalProduct = {products.length}/>  */}
              <center><div class="product__pagination">
              {pageNumbers.map(number => (
                <a onClick={()=> paginate(number)} href="javascript:void(0)"> {number}</a>
                ))}
              
                <a><i class="fa fa-long-arrow-right"></i></a>
                
              </div></center>
            </div>
          </div>
        </div>
      </section>

      <script src="./js/jquery-ui.min.js"></script>
    </>
  );
}
export default HomeScreen;
