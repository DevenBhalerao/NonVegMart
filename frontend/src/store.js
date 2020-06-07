import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
<<<<<<< HEAD
=======
import{
  sellerproductListReducer,
  sellerproductDetailsReducer,
  sellerproductSaveReducer,
  sellerproductDeleteReducer
} from './reducers/sellerProductReducers'
>>>>>>> akshay
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeleteReducer,
} from './reducers/productReducers';
<<<<<<< HEAD
import { cartReducer } from './reducers/cartReducers';
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer,
=======
import {
  cartReducer
} from './reducers/cartReducers'
import {
  userSigninReducer,
  userRegisterReducer,
  userUpdateReducer
>>>>>>> akshay
} from './reducers/userReducers';
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  myOrderListReducer,
  orderListReducer,
<<<<<<< HEAD
  orderDeleteReducer,
} from './reducers/orderReducers';
import {
  categoryListReducer,
  categoryDetailsReducer,
  categorySaveReducer,
  categoryDeleteReducer,
} from './reducers/categoryReducers';
=======
  orderDeleteReducer
} from './reducers/orderReducers';
>>>>>>> akshay

const cartItems = Cookie.getJSON('cartItems') || [];
const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
<<<<<<< HEAD
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
=======
  cart: {
    cartItems,
    shipping: {},
    payment: {}
  },
  userSignin: {
    userInfo
  }
>>>>>>> akshay
};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeleteReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  userUpdate: userUpdateReducer,
  myOrderList: myOrderListReducer,
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
<<<<<<< HEAD
  categoryList: categoryListReducer,
  categoryDetails: categoryDetailsReducer,
  categorySave: categorySaveReducer,
  categoryDelete: categoryDeleteReducer,
});
=======
  sellerProductList:sellerproductListReducer,
  sellerProductDetails: sellerproductDetailsReducer,
  sellerProductSave: sellerproductSaveReducer,
  sellerProductDelete:sellerproductDeleteReducer

})
>>>>>>> akshay
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);
export default store;
