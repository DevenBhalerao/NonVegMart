import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listCategory } from '../actions/categoryActions';
import '../App.css';
import '../css/bootstrap.min.css';
import '../css/elegant-icons.css';
import '../css/font-awesome.min.css';
import '../css/jquery-ui.min.css';
import '../css/nice-select.css';
import '../css/owl.carousel.min.css';
import '../css/slicknav.min.css';
import '../css/style.css';
import '../index.css';
import MetaTags from 'react-meta-tags';

function Searchbar(props) {
    const [searchKeyword, setSearchKeyword] = useState('');
    const category = props.match.params.id ? props.match.params.id : '';
    const productList = useSelector(state => state.productList);
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
      dispatch(listProducts(category, searchKeyword))
    }
    
  
    return <>
      {category &&
        <h2>{category}</h2>}
  
    <div className="col-lg-9">
                <div className="hero__search">
                  <div className="hero__search__form">
        <form onSubmit={submitHandler}>
                        <input name="searchKeyword" onChange={(e) => setSearchKeyword(e.target.value)} />
                      <input type="text" placeholder="What do yo u need?" />
                      <button type="submit" className="site-btn">
                        SEARCH
                        </button>
                    </form>
                    </div>
                </div>
                </div>
                {loading ? <div>Loading...</div> :
      error ? <div>{error}</div> :
        <ul className="products">
          {
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}>
                    <img className="product-image" src={product.image} alt="product" />

                  </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">&#8377;{product.price}</div>
                  <div className="product-rating">{product.rating} Stars ({product.numReiews} Reviews)</div>
                </div>
              </li>)
          }
        </ul>
    }
            </>
            }
            export default Searchbar;
            