import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsCategory } from '../actions/categoryActions';
import { listProducts } from '../actions/productActions';

function CategoryScreen1(props) {
  const categoryDetails = useSelector(state => state.categoryDetails);
  const { category, loading, error } = categoryDetails;
  const productList = useSelector(state => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCategory(props.match.params.id));
    dispatch(listProducts(products));
    return () => {
      //
    };
  }, []);

 
  return <div>
    <div className="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div className="details-info">
            
                <li>
                  <h4>{category.name}</h4>
                </li>
                
                
                <li>
                  Description:
                  <div>
                    {category.description}
                  </div>
                </li>
              
          </div>)}
              { products &&
                products.map(product =>
                  <li key={product._id}>
                    <div className="product">
                      <Link to={'/product/' + product._id}>
                        <img className="product-image" src={product.image} alt="product" />
    
                      </Link>
                      <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link>
                      </div>
                    
                    </div>
                    </li>
    
                  )
              };
                 
          </div>
            
        
    
            
    }
    export default CategoryScreen1;