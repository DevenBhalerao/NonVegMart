import {
  SELLER_PRODUCT_LIST_REQUEST,
  SELLER_PRODUCT_LIST_SUCCESS,
  SELLER_PRODUCT_LIST_FAIL,
  SELLER_PRODUCT_DETAILS_REQUEST,
  SELLER_PRODUCT_DETAILS_SUCCESS,
  SELLER_PRODUCT_DETAILS_FAIL,
  SELLER_PRODUCT_SAVE_REQUEST,
  SELLER_PRODUCT_SAVE_SUCCESS,
  SELLER_PRODUCT_SAVE_FAIL,
  SELLER_PRODUCT_DELETE_SUCCESS,
  SELLER_PRODUCT_DELETE_FAIL,
  SELLER_PRODUCT_DELETE_REQUEST
} from "../constants/sellerproductConstant"
import axios from 'axios';
import Axios from "axios";

// const listCategory = () => async (dispatch) => {
//   try {
//     dispatch({ type: CATEGORY_LIST_REQUEST });
//     const { data } = await axios.get('/api/categories');
//     dispatch({ type: CATEGORY_LIST_SUCCESS, payload: data });
//   } catch (error) {
//     dispatch({ type: CATEGORY_LIST_FAIL, payload: error.message });
//   }
// };
const sellerlistProducts = () => async (dispatch , getState) => {
  try {

    dispatch({
      type: SELLER_PRODUCT_LIST_REQUEST
    });
    const {
      userSignin: {
        userInfo
      }
    } = getState();
    // console.log(userInfo);
    const{ data} = await axios.get("/api/products/sellerproduct/" + userInfo._id)
    console.log(data)  
    dispatch({
      type: SELLER_PRODUCT_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {

    dispatch({
      type: SELLER_PRODUCT_LIST_FAIL,
      payload: error.message
    });
  }
}

const sellersaveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SELLER_PRODUCT_SAVE_REQUEST,
      payload: product
    });
    const {
      userSignin: {
        userInfo
      }
    } = getState();
    if (!product._id) {
      const {
        data
      } = await Axios.post('/api/products/sellerproduct/', product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({
        type: SELLER_PRODUCT_SAVE_SUCCESS,
        payload: data
      });
    } else {
      const {
        data
      } = await Axios.put('/api/products/sellerproduct/' + product._id, product, {
        headers: {
          'Authorization': 'Bearer ' + userInfo.token
        }
      });
      dispatch({
        type: SELLER_PRODUCT_SAVE_SUCCESS,
        payload: data
      });
    }

  } catch (error) {

    dispatch({
      type: SELLER_PRODUCT_SAVE_FAIL,
      payload: error.message
    });
  }
}

const sellerdetailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: SELLER_PRODUCT_DETAILS_REQUEST,
      payload: productId
    });
    const {
      data
    } = await axios.get("/api/products/sellerproduct/" + productId);
    dispatch({
      type: SELLER_PRODUCT_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: SELLER_PRODUCT_DETAILS_FAIL,
      payload: error.message
    });

  }
}

const sellerdeleteProdcut = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: {
        userInfo
      }
    } = getState();
    dispatch({
      type: SELLER_PRODUCT_DELETE_REQUEST,
      payload: productId
    });
    const {
      data
    } = await axios.delete("/api/products/sellerproduct/" + productId, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({
      type: SELLER_PRODUCT_DELETE_SUCCESS,
      payload: data,
      success: true
    });
  } catch (error) {
    dispatch({
      type: SELLER_PRODUCT_DELETE_FAIL,
      payload: error.message
    });

  }
}

export {
  sellerlistProducts,
  sellerdetailsProduct,
  sellersaveProduct,
  sellerdeleteProdcut
}