import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { sellersaveProduct, sellerlistProducts, sellerdeleteProdcut } from '../actions/sellerProductActions';
import {
  saveCategory,
  listCategory,
  deleteCategory,
} from '../actions/categoryActions';
// import CharacterDropDown from '../components/utils/CharacterDropDown';
import FileUpload from '../components/FileUploads';
import './css/style.css';
function SellerProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [sellerid , setSellerId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [Images, setImages] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const sellerProductList = useSelector(state => state.sellerProductList);

  const {loading, products, error } = sellerProductList;
  console.log(products);
  const categoryList = useSelector((state) => state.categoryList);

  const { category } = categoryList;

  const sellerProductSave = useSelector(state => state.sellerProductSave);
  const { loading: loadingSave, success: successSave, error: errorSave } = sellerProductSave;

  const sellerProductDelete = useSelector(state => state.sellerProductDelete);
  const { loading: loadingDelete, success: successDelete, error: errorDelete } = sellerProductDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(sellerlistProducts());
    return () => {
      //
    };
  }, [successSave, successDelete]);
  const openModal = (product) => {
    setModalVisible(true);
    setId(product._id);
    setName(product.name);
    setPrice(product.price);
    setDescription(product.description);
    setBrand(product.brand);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      sellersaveProduct({
        _id: id,
        name,
        price,
        brand,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (sellerproduct) => {
    dispatch(sellerdeleteProdcut(sellerproduct._id));
  };

  const updateImages = (newImages) => {
    setImages(newImages);
    console.log(newImages);
  };

  const dropdown = (categoryId) => {
    const strValue = categoryId.value.split('_');
    const categoryId_temp = strValue[0];
    const categoryName_temp = strValue[1];

    setCategoryId(categoryId_temp);
    setCategoryName(categoryName_temp);
  };
  return <div className="content content-margined">

<div className="product-header" style={{ 'margin-bottom': '7%' }}>
        <h4 className="signin-title" style={{ 'margin-left': '10%' }}>
          Seller Products
        </h4>
        <button
          className="btn-primary"
          style={{ float: 'right', 'margin-right': '20%' }}
          onClick={() => openModal({})}
        >
          Create Product
        </button>
      </div>
    {modalVisible &&
      <div className="signin__form">
        <form onSubmit={submitHandler} >
          <div className="form-container">
            <div>
            <h4 class="signin__title">Create Product</h4>
            </div>
            <div>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </div>

            <div className="signin__input">
              <label htmlFor="name">
                Name
              </label>
              <input type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label htmlFor="price">
                Price
          </label>
              <input type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label htmlFor="brand">
                Brand
                </label>
              <input type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label htmlFor="countInStock">
                CountInStock
          </label>
              <input type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
                <label htmlFor="Category">Catgeory</label>
                <br></br>
                <select
                  className="cattext"
                  onChange={(e) => dropdown(e.currentTarget)}
                >
               <option key="default" value="default">
                    Please select a category
                  </option>
                 {category.map(({ name, _id }) => (
                    <option key={name} value={_id + '_' + name}>
                      {name}
                    </option>
                  ))} 
             
           
                </select> 
              </div>
            <div className="signin__input">
                <label htmlFor="description">Description</label>
                <br></br>
                <textarea
                  className="destext"
                  type="message"
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            <div className="signin__input">
                <label htmlFor="images">Upload Images</label>
                <FileUpload refreshFunction={updateImages} />
                <br></br>
              </div>
          
              <button type="submit" className="button site-btn">{id ? "Update" : "Create"}</button>
                   
              <button type="button" onClick={() => setModalVisible(false)} className="back__button">Back</button>
            
          </div>
        </form>
      </div>
    }


    <div className="product-list">

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>SELLERID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(<tr key={product._id}>
            <td>{product._id}</td>
            <td>{product.sellerid}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
            <td>{product.brand}</td>
            <td>
              <button className="button" className="site-btn2" onClick={() => openModal(product)} >Edit</button>
              <button className="button" className="back__button2" onClick={() => deleteHandler(product)} >Delete</button>
            </td>
          </tr>))}
        </tbody>
      </table>

    </div>
  </div>
}
export default SellerProductsScreen;