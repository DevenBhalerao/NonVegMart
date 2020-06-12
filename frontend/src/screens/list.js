import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import { useSelector } from 'react-redux';



function list() {
    
    const categoryList = useSelector((state) => state.categoryList);
    const {category } = categoryList;
    return<>

    {
    category.map(category => 
      < li key={category._id}>
         <Link to={'/category/' + category._id}>{category.name}</Link>
        </li>
      )}
    </>}

      export default list;