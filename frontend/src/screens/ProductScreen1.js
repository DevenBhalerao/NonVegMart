import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/elegant-icons.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import MetaTags from 'react-meta-tags';
function ProductScreen(props) {
  const [qty, setQty] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      //
    };
  }, []);

  const handleAddToCart = () => {
    props.history.push('/cart/' + props.match.params.id + '?qty=' + qty);
  };

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error} </div>
      ) : (
        <div>
          <MetaTags>
            <meta charSet="UTF-8" />
            <meta name="description" content="Ogani Template" />
            <meta name="keywords" content="Ogani, unica, creative, html" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          </MetaTags>
          <title>Ogani | Template</title>
          {/* Google Font */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
          />
          <section className="product-details spad">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="product__details__pic">
                    <div className="product__details__pic__item">
                      <img
                        src={`http://localhost:5000/${product.image}`}
                        alt="product"
                      ></img>
                    </div>

                    {/* <img
                      data-imgbigurl={"img/product/details/product-details-2.jpg"}
                      src={"img/product/details/thumb-1.jpg"}
                      alt
                    />
                    <img
                      data-imgbigurl="img/product/details/product-details-3.jpg"
                      src="img/product/details/thumb-2.jpg"
                      alt
                    />
                    <img
                      data-imgbigurl="img/product/details/product-details-5.jpg"
                      src="img/product/details/thumb-3.jpg"
                      alt
                    />
                    <img
                      data-imgbigurl="img/product/details/product-details-4.jpg"
                      src="img/product/details/thumb-4.jpg"
                      alt
                    /> */}
                  <div className="Avail">
                    <ul>
                      <li>
                        <b>
                          Availability:
                          {product.countInStock > 0
                            ? <span id="instock">In Stock</span>
                            : <span id="unavailable">Unavailable.' </span>}
                        </b>
                      </li>
                      <li>
                        <b>Shipping:</b>
                        <span id="shipping">
                          01 day shipping. <samp>Free pickup today</samp>
                        </span>
                      </li>
                      <li>
                        <b>Weight:</b> <span id="weight">0.5 kg</span>
                      </li>
                      <li>
                        <b>Share on</b><br></br>
                        <div className="share">
                          <a href="#">
                            <i className="fa fa-facebook" />
                          </a>
                          <a href="#">
                            <i className="fa fa-twitter" />
                          </a>
                          <a href="#">
                            <i className="fa fa-instagram" />
                          </a>
                          <a href="#">
                            <i className="fa fa-pinterest" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="product__details__text">
                    <h3>{product.name}</h3>
                    <div className="product__details__price">
                      Price: <b>&#8377;{product.price}</b>
                    </div>
                    <div className="product__details__rating">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-half-o" />
                      <span>(18 reviews)</span>
                    </div>
                    
                    <p>{product.description}</p>
                    <div className="product__details__quantity">
                      <div className="quantity">
                        <div className="pro-qty ">
                          Qty:{' '}
                          <select
                            value={qty}
                            onChange={(e) => {
                              setQty(e.target.value);
                            }}
                          >
                            {[...Array(product.countInStock).keys()].map(
                              (x) => (
                                <option key={x + 1} value={x + 1}>
                                  {x + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                    </div>
                    <a href="#" className="heart-icon">
                      <span className="icon_heart_alt" />
                    </a>
                  
                    {product.countInStock > 0 && (
                      <button onClick={handleAddToCart} className="addToCartButton">
                        Add to Cart
                      </button>
                    )}

                    
                  
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="product__details__tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#tabs-1"
                          role="tab"
                          aria-selected="true"
                        >
                          Description
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-2"
                          role="tab"
                          aria-selected="false"
                        >
                          Information
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#tabs-3"
                          role="tab"
                          aria-selected="false"
                        >
                          Reviews <span>(1)</span>
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="tabs-1"
                        role="tabpanel"
                      >
                        <div className="product__details__tab__desc">
                          <h6>Products Infomation</h6>
                          <p>{product.description}</p>
                          <p>{product.description}</p>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-2" role="tabpanel">
                        <div className="product__details__tab__desc">
                          <h6>Products Infomation</h6>
                          <p>
                            Bite into those chunk-sized chunks of signature
                            Licious hen for the last soften-­in-the-mouth tikka
                            treat! Boneless, skinless, succulent pieces taken
                            from the breast and leg portions that’s assured to
                            elevate your meat enjoy to exquisite. Whether it’s
                            Chicken Tikka Masala or Chilli Chicken, try it to
                            present your culinary experiments the proper
                            expression.
                          </p>
                          <p>
                            Praesent sapien massa, convallis a pellentesque nec,
                            egestas non nisi. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Mauris blandit aliquet
                            elit, eget tincidunt nibh pulvinar a. Cras ultricies
                            ligula sed magna dictum porta. Cras ultricies ligula
                            sed magna dictum porta. Sed porttitor lectus nibh.
                            Mauris blandit aliquet elit, eget tincidunt nibh
                            pulvinar a.
                          </p>
                        </div>
                      </div>
                      <div className="tab-pane" id="tabs-3" role="tabpanel">
                        <div className="product__details__tab__desc">
                          <h6>Products Infomation</h6>
                          <p>
                            Vestibulum ac diam sit amet quam vehicula elementum
                            sed sit amet dui. Pellentesque in ipsum id orci
                            porta dapibus. Proin eget tortor risus. Vivamus
                            suscipit tortor eget felis porttitor volutpat.
                            Vestibulum ac diam sit amet quam vehicula elementum
                            sed sit amet dui. Donec rutrum congue leo eget
                            malesuada. Vivamus suscipit tortor eget felis
                            porttitor volutpat. Curabitur arcu erat, accumsan id
                            imperdiet et, porttitor at sem. Praesent sapien
                            massa, convallis a pellentesque nec, egestas non
                            nisi. Vestibulum ac diam sit amet quam vehicula
                            elementum sed sit amet dui. Vestibulum ante ipsum
                            primis in faucibus orci luctus et ultrices posuere
                            cubilia Curae; Donec velit neque, auctor sit amet
                            aliquam vel, ullamcorper sit amet ligula. Proin eget
                            tortor risus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
export default ProductScreen;
