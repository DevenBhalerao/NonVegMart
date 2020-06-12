import 'jquery-ui-dist/jquery-ui.min.css';
import './css/jquery-ui.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import store from './store';
import 'jquery-ui-dist/jquery-ui.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import './css/elegant-icons.css';
import './css/font-awesome.min.css';
import './css/nice-select.css';
import './css/owl.carousel.min.css';
import './css/slicknav.min.css';
import './css/style.css';


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

