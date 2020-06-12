import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { saveShipping } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';
import Newcheckpay from './newcheckpay';

import '../App.css';

import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import './css/elegant-icons.css';
import './css/font-awesome.min.css';

import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';
import '../index.css';




import 'bootstrap/dist/css/bootstrap.css';

import 'owl.carousel/dist/assets/owl.carousel.min.css';
import MetaTags from 'react-meta-tags';

function Checkout(props) {
	const [address, setAddress] = useState('');
	const [city, setCity] = useState('');
	const [postalCode, setPostalCode] = useState('');
	const [country, setCountry] = useState('');

	const dispatch = useDispatch();

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShipping({ address, city, postalCode, country }));
		props.history.push('payment');
    };
    return(
<div>  
<MetaTags>
          <meta charSet="UTF-8" />
          <meta name="description" content="Ogani Template" />
          <meta name="keywords" content="Ogani, unica, creative, html" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </MetaTags>

  
  {/* Checkout Section Begin */}
  <section className="checkout spad">
  <div className="container">
      
        <div className="checkout__form">
            <h4>Billing Details</h4>
            <form onSubmit={submitHandler}>
          <div className="row">
            <div className="col-lg-8 col-md-6">
              
                          
                <div className="checkout__input">
                <p>
                  Address<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Street Address"
                  className="checkout__input__add"
                  name="address"
                  id = "address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Apartment, suite, unite ect (optinal)"
                />
              </div>
              <div className="checkout__input">
                <p>
                  Town/City<span>*</span>
                </p>
                <input type="text"
                name="city"
                id="city"
                onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="checkout__input">
                <p>
                  Country/State<span>*</span>
                </p>
                <input type="text" 
                type="text"
                name="country"
                id="country"
                onChange={(e) => setCountry(e.target.value)}
                />
              </div>
              <div className="checkout__input">
                <p>
                  Postcode / ZIP<span>*</span>
                </p>
                <input type="text"
                type="text"
                name="postalCode"
                id="postalCode"
                onChange={(e) => setPostalCode(e.target.value)}
                 />
              </div>
            
              
            </div>
               <Newcheckpay/>

          </div>
          
          
        </form>
        
    
      </div>
    </div>
  </section>
  {/* Checkout Section End */}
  
  {/* Js Plugins */}
  </div>
    );
    }
export default Checkout;;