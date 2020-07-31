import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import Cookie from 'js-cookie';
import './css/style.css';
// import MetaTags from 'react-meta-tags';
function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  // console.log(productDetails);
  const { product, loading, error } = productDetails;
 
  // console.log(product.slice(0 , 1))

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  let cartItems = [];
  const handleAddToCart = (productId) => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    // cartItems = product.find((x) => x._id === productId);
    // Cookie.set("cartItems" , cartItems)
  }
  console.log(cartItems);
  let value = 0;
  return(
  <div>
    <div classNameName="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {
      loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
      (
    <div>
     <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>Product Detail</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/shop">Shop</a></li>
                        <li className="breadcrumb-item active">Shop Detail </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <div className="shop-detail-box-main">
        <div className="container">
          <div className="row">
            
            
                <div className="col-xl-5 col-lg-5 col-md-6">
                    <div id="carousel-example-1" className="single-product-slider carousel slide" data-ride="carousel">
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active"> <img style={{'height' : '300px'}} className="d-block w-100" src={`http://localhost:5000/${product.image}`} alt="product" /> </div>
                        </div>
                        
                        
                    </div>
                </div>
                
                <div className="col-xl-7 col-lg-7 col-md-6">
                  <div className="single-product-details">
                    <h2>{product.name}</h2>
                      <h5> &#8377;{product.price}</h5>
                        <p className="available-stock"><span> {product.countInStock} available </span></p>
						            <h4>Description:</h4>
						            <p>{product.description}</p>
						        <ul>
							      <li>
								      <div className="form-group quantity-box">
									      <label className="control-label">Quantity</label>
								      	<input className="form-control" value={value} type="text" pattern="[0-9]*"></input>
                        {/* <select className="form-control"></select> */}
								      </div>
							      </li>
						        </ul>

                    <div className="price-box-bar">
                      <div className="cart-and-bay-btn">
                      <a id="button1" className="btn hvr-hover" data-fancybox-close="" href="/shop">Buy New</a>
                      <a id="button1" className="btn hvr-hover" data-fancybox-close="" href='javascript:void(0)' onClick={() => handleAddToCart(product._id)}>Add to cart</a>
                    </div>

						      </div>

						      <div className="add-to-btn">
							    <div className="add-comp">
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-heart"></i> Add to wishlist</a>
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-sync-alt"></i> Add to Compare</a>
							    </div>
							    <div className="share-bar">
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a>
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a>
								    <a id="button1" className="btn hvr-hover" href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a>
							    </div>
						    </div>
                </div>
               
                
            
            
          </div>
          
       
        
      </div>
      </div>
    </div>
    </div>
      )}
  
    <div style={{'margin-left' : '30px'}}class="row my-5">
				<div class="card card-outline-secondary my-4">
					<div class="card-header">
						<h2>Product Reviews</h2>
					</div>
					<div class="card-body">
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr></hr>
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr></hr>
						<div class="media mb-3">
							<div class="mr-2"> 
								<img class="rounded-circle border p-1" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2264%22%20height%3D%2264%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_160c142c97c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_160c142c97c%22%3E%3Crect%20width%3D%2264%22%20height%3D%2264%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.5546875%22%20y%3D%2236.5%22%3E64x64%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Generic placeholder image"/>
							</div>
							<div class="media-body">
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
								<small class="text-muted">Posted by Anonymous on 3/1/18</small>
							</div>
						</div>
						<hr></hr>
						<a href="#" class="btn hvr-hover">Leave a Review</a>
					</div>
				  </div>
			</div>
      </div>
  )
    
     {/* <div classNameName="back-to-result">
      <Link to="/">Back to result</Link>
    </div>
    {loading ? <div>Loading...</div> :
      error ? <div>{error} </div> :
        (
          <div classNameName="details">
            <div classNameName="details-image">
              <img src={`http://localhost:5000/${product.image}`}  alt="product" ></img>
            </div>
            <div classNameName="details-info">
              <ul>
                <li>
                  <h4>{product.name}</h4>
                </li>
                <li>
                  {product.rating} Stars ({product.numReviews} Reviews)
                </li>
                <li>
                  Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>
                    {product.description}
                  </div>
                </li>
              </ul>
            </div>
            <div classNameName="details-action">
              <ul>
                <li>
                  Price: {product.price}
                </li>
                <li>
                  Status: {product.countInStock > 0 ? "In Stock" : "Unavailable."}
                </li>
                <li>
                  Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                    {[...Array(product.countInStock).keys()].map(x =>
                      <option key={x + 1} value={x + 1}>{x + 1}</option>
                    )}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && <button onClick={handleAddToCart} classNameName="button primary" >Add to Cart</button>
                  }
                </li>
              </ul>
            </div>
          </div>
        )
    }


  </div> 
  ) */}
}
export default ProductScreen;