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
  SELLER_PRODUCT_DELETE_REQUEST,
  SELLER_PRODUCT_DELETE_SUCCESS,
  SELLER_PRODUCT_DELETE_FAIL
} from "../constants/sellerproductConstant";

function sellerproductListReducer(state = {
  products: []
}, action) {

  switch (action.type) {
    case SELLER_PRODUCT_LIST_REQUEST:
      return {
        loading: true, products: []
      };
    case SELLER_PRODUCT_LIST_SUCCESS:
      return {
        loading: false, products: action.payload
      };
    case SELLER_PRODUCT_LIST_FAIL:
      return {
        loading: false, error: action.payload
      }
      default:
        return state;
  }
}

function sellerproductDetailsReducer(state = {
  product: {}
}, action) {

  switch (action.type) {
    case SELLER_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true
      };
    case SELLER_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false, product: action.payload
      };
    case SELLER_PRODUCT_DETAILS_FAIL:
      return {
        loading: false, error: action.payload
      }
      default:
        return state;
  }
}

function sellerproductDeleteReducer(state = {
  product: {}
}, action) {

  switch (action.type) {
    case SELLER_PRODUCT_DELETE_REQUEST:
      return {
        loading: true
      };
    case SELLER_PRODUCT_DELETE_SUCCESS:
      return {
        loading: false, product: action.payload, success: true
      };
    case SELLER_PRODUCT_DELETE_FAIL:
      return {
        loading: false, error: action.payload
      }
      default:
        return state;
  }
}

function sellerproductSaveReducer(state = {
  product: {}
}, action) {

  switch (action.type) {
    case SELLER_PRODUCT_SAVE_REQUEST:
      return {
        loading: true
      };
    case SELLER_PRODUCT_SAVE_SUCCESS:
      return {
        loading: false, success: true, product: action.payload
      };
    case SELLER_PRODUCT_SAVE_FAIL:
      return {
        loading: false, error: action.payload
      }
      default:
        return state;
  }
}

export {
  sellerproductListReducer,
  sellerproductDetailsReducer,
  sellerproductSaveReducer,
  sellerproductDeleteReducer
}