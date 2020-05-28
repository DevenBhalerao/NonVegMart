import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsCategory } from '../actions/categoryActions';

function CategoryScreen1(props) {
  const [qty, setQty] = useState(1);
  const categoryDetails = useSelector(state => state.categoryDetails);
  const { category, loading, error } = categoryDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsCategory(props.match.params.id));
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
          <div className="details">
            
                <li>
                  <h4>{category.name}</h4>
                </li>
                
                
                <li>
                  Description:
                  <div>
                    {category.description}
                  </div>
                </li>
              
          </div>
              )};
              
      </div>
        
    

        
}
export default CategoryScreen1;