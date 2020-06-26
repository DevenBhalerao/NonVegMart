import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

function Contact() {

  return (

    <div>
      <meta charSet="UTF-8" />
      <meta name="description" content="Ogani Template" />
      <meta name="keywords" content="Ogani, unica, creative, html" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Ogani | Template</title>
      {/* Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;900&display=swap"
        rel="stylesheet"
      />
      {/* Css Styles */}
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
      <link rel="stylesheet" href="css/font-awesome.min.css" type="text/css" />
      <link rel="stylesheet" href="css/elegant-icons.css" type="text/css" />
      <link rel="stylesheet" href="css/nice-select.css" type="text/css" />
      <link rel="stylesheet" href="css/jquery-ui.min.css" type="text/css" />
      <link rel="stylesheet" href="css/owl.carousel.min.css" type="text/css" />
      <link rel="stylesheet" href="css/slicknav.min.css" type="text/css" />
      <link rel="stylesheet" href="css/style.css" type="text/css" />


      {/* Breadcrumb Section Begin */}

      {/* Breadcrumb Section End */}
      {/* Contact Section Begin */}
      <section className="contact spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_phone" />
                <h4>Phone</h4>
                <p>+01-3-8888-6868</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_pin_alt" />
                <h4>Address</h4>
                <p>Row House No. C-101, SwapnaShilp, Five Gardens Soc, near Jagtap
            Dairy, near Balaji Tyres, Pune, Maharashtra 411017</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_clock_alt" />
                <h4>Open time</h4>
                <p>10:00 am to 23:00 pm</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 text-center">
              <div className="contact__widget">
                <span className="icon_mail_alt" />
                <h4>Email</h4>
                <p>hello@nonvegmart.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}
      {/* Map Begin */}
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.514121411977!2d73.78241441489386!3d18.595931487365238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b919c85bf8fb%3A0xe4d90616b4c3c20d!2sInnoBytes%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1592706600731!5m2!1sen!2sin"
          height={500}
          style={{ border: 0 }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
        />
        <div className="map-inside">
          <i className="icon_pin" />
          <div className="inside-widget">
            <h4>InnoBytes Technologies Pvt. Ltd.</h4>
            <ul>
              <li>Phone: +12-345-6789</li>
              <li>
                Add: Row House No. C-101, SwapnaShilp, Five Gardens Soc, near Jagtap
                Dairy, near Balaji Tyres, Pune, Maharashtra 411017
          </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Map End */}
      {/* Contact Form Begin */}
      <div className="contact-form spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact__form__title">
                <h2>Leave Message</h2>
              </div>
            </div>
          </div>
          <form action="#">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your name" />
              </div>
              <div className="col-lg-6 col-md-6">
                <input type="text" placeholder="Your Email" />
              </div>
              <div className="col-lg-12 text-center">
                <textarea placeholder="Your message" defaultValue={""} />
                <button type="submit" className="site-btn">
                  SEND MESSAGE
            </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Contact Form End */}

    </div>
  );
}
export default Contact;




