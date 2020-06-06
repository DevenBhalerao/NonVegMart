import React, { useEffect, useState,select }  from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from 'c:/nonvegmart/frontend/src/actions/productActions';
function CharacterDropDown() {
  
  
  const productList = useSelector(state => state.productList);
  const { products } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts(products));
    return () => {
      //
    };
  }, []);

  return (
    <select >
     {console.log(products)}
  {products.map(({ category, categoryId }) => (
    <option key={category} value={categoryId}>
      {category}
    </option>
  ))}
</select>
    
  );
}
export default CharacterDropDown;