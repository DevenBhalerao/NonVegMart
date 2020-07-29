import React, { useState, useEffect } from 'react';
import './css/style.css'

 export default function footer(props){
  return (
    <div>
      <footer>
        <div className="footer-main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>About Freshshop</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 							
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="/about-us">About Us</a></li>
                                <li><a href="/refund-return">Refund and Return</a></li>
                                <li><a href="#">Our Sitemap</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="/privacy-policy">Privacy Policy</a></li>
                                <li><a href="#">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p><i className="fa fa-map-marker"></i>Address: Michael I. Days 3756 <br></br>Preston Street Wichita,<br></br> KS 67213 </p>
                                </li>
                                <li>
                                    <p><i className="fa fa-phone-square"></i>Phone: <a href="tel:+1-888705770">+1-888 705 770</a></p>
                                </li>
                                <li>
                                    <p><i className="fa fa-envelope"></i>Email: <a href="mailto:contactinfo@gmail.com">contactinfo@gmail.com</a></p>
                                </li>
                            </ul>
                    
						 
					
                        </div>
                        
                    </div>
                    
                </div>
                <div  className="row">
                    <div style={{marginLeft:'758px'}}  className="col-lg-4 col-md-12 col-sm-12">
                    <div className="footer-top-box">
							
							<ul>
                                <li><a href="#"><i className="fa fa-facebook" ></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            </ul>
				    </div>
                    </div>
                    </div>
            </div>
        </div>
    </footer>
   

  
    <div className="footer-copyright">
        <p className="footer-company">All Rights Reserved. &copy; 2018 <a href="#">ThewayShop</a> Design By :
            <a href="https://html.design/">html design</a></p>
    </div>
    </div>
  )
}

