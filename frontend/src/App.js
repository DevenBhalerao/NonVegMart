import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './screens/css/style.css';
import HomeScreen from './screens/ShopScreen';
import ProductScreen from './screens/ProductScreen1';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import UploadProductsScreen from './screens/UploadProductScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import UploadCategoryScreen from './screens/UploadCategoryScreen';
import CategoryScreen1 from './screens/CategoryScreen1';
import Headerone from './HeaderOne'
import Footer from './screens/footer'
import LandingScreen from './screens/LandingSreen'
import aboutUs from './about-us'
import privacyPolicy from './PrivacyPolicy'
import refund from './refundandreturn'

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, category, error } = categoryList;
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
    <div>
     <Headerone/>
     </div>
      <div className="grid-container">
       
       
        <main className="main">
          <div className="content">
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={UploadProductsScreen} />
            <Route path="/categories" component={UploadCategoryScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={CategoryScreen1} />
            <Route path="/shop"  component={HomeScreen} />
            <Route path="/" exact={true} component={LandingScreen} />
            <Route path="/about-us" component={aboutUs}/>
            <Route path="/privacy-policy" component={privacyPolicy}/>
            <Route path='/refund-return' component={refund}/>
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
      <Footer />
    </BrowserRouter>
 
  );
}

export default App;
