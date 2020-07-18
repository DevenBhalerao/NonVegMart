import React from 'react';
import './screens/css/style.css';
function aboutUs(){
  return(
    <div>
    <div class="all-title-box">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>ABOUT US</h2>
                    <ul class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item active">ABOUT US</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="about-box-main">
        <div class="container">
            <div class="row">
				<div class="col-lg-6">
                <div class="banner-frame"> <img class="img-fluid" src={ require ("./screens/images/about-img.jpg")} alt="About-us image" />
                </div>
                </div>
                <div class="col-lg-6">
                    <h2 class="noo-sh-title-top" style={{'border-bottom' : '3px solid  #b0b435'}}>We are <span>NON-VEGMART</span></h2>
                    <p>Our mart is the modern meat retail company for fresh proteins. Our mission is to redefine meat retailing in the country by delivering premium products and best-in-class customer service within a hygienic and convenient shopping environment.</p>
                    <p>We offer various choices of meats (fish/poultry/lamb/chicken), cuts and flavours. Our range includes free-range chicken and goat, alongside a wide variety of exotic seafood. Based on a multi-conduit retail system, we bring you the finest meats to your table. Our retail stores are modern, air-conditioned, hygienic and odourless creating an perfect meat shopping experience. </p>
                    <p>Numerous checks are employed right from sourcing the meat to pre-cleaning, processing and maintaining freshness of the produce. Quality measures include cold chain technology for freshness, stringent processes of preparation, packaging, and storage to ensure high quality, hygienic products. Our in-house certified laboratory guarantees chemical and pesticide-free products. The quality of the meat and seafood conforms to HALAL, ISO, HACCP and FSSAI certification.</p>
					      <a class="btn hvr-hover" href="#" style={{'color':'white'}}>Read More</a>
                </div>
            </div>
              <div class="row my-5">
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>We are Trusted</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>We are Professional</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="service-block-inner">
                        <h3>We are Expert</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )

    
  
}

export default aboutUs;