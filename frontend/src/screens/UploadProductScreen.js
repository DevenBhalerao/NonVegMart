import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveProduct,
  listProducts,
  deleteProdcut,
} from '../actions/productActions';
import {
  saveCategory,
  listCategory,
  deleteCategory,
} from '../actions/categoryActions';
// import CharacterDropDown from '../components/utils/CharacterDropDown';
import FileUpload from '../components/FileUploads';
import './css/style.css';
function ProductsScreen(props) {
  const [modalVisible, setModalVisible] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [brand, setBrand] = useState('');
  const [Images, setImages] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [description, setDescription] = useState('');
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  const categoryList = useSelector((state) => state.categoryList);

  const { category } = categoryList;

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    success: successDelete,
    error: errorDelete,
  } = productDelete;
  const dispatch = useDispatch();

  useEffect(() => {
    if (successSave) {
      setModalVisible(false);
    }
    dispatch(listProducts());
    dispatch(listCategory());

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
    setImages(product.image);
    setBrand(product.brand);
    setCategoryName(product.categoryName);
    setCategoryId(product.categoryId);
    setCountInStock(product.countInStock);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveProduct({
        _id: id,
        name,
        price,
        image: Images,
        brand,
        category: categoryName,
        categoryId: categoryId,
        countInStock,
        description,
      })
    );
  };
  const deleteHandler = (product) => {
    dispatch(deleteProdcut(product._id));
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

  //const setdrop = (value) => {
  // console.log(value);
  // };

  return (
    <div className="content content-margined">
      <div className="product-header" style={{ 'margin-bottom': '7%' }}>
        <h4 className="signin-title" style={{ 'margin-left': '10%' }}>
          Products
        </h4>
        <button
          className="btn-primary"
          style={{ float: 'right', 'margin-right': '20%' }}
          onClick={() => openModal({})}
        >
          Create Product
        </button>
      </div>
      {modalVisible && (
        <div className="signin__form">
          <form onSubmit={submitHandler}>
            <div className="form-container">
              <div>
                <h4 class="signin__title">Create Product</h4>
              </div>
              <div>
                {loadingSave && <div>Loading...</div>}
                {errorSave && <div>{errorSave}</div>}
              </div>

              <div className="signin__input">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="signin__input">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  value={price}
                  id="price"
                  onChange={(e) => setPrice(e.target.value)}
                ></input>
              </div>

              <div className="signin__input">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  name="brand"
                  value={brand}
                  id="brand"
                  onChange={(e) => setBrand(e.target.value)}
                ></input>
              </div>
              <div className="signin__input">
                <label htmlFor="countInStock">CountInStock</label>
                <input
                  type="text"
                  name="countInStock"
                  value={countInStock}
                  id="countInStock"
                  onChange={(e) => setCountInStock(e.target.value)}
                ></input>
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

              <button type="submit" className="button site-btn">
                {id ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                onClick={() => setModalVisible(false)}
                className="back__button "
              >
                Back
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>

              <th>Category</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>

                  <td>{product.category}</td>

                  <td>{product.brand}</td>
                  <td>
                    <button
                      className="site-btn2"
                      onClick={() => openModal(product)}
                    >
                      Edit
                    </button>{' '}
                    <button
                      className="back__button2"
                      onClick={() => deleteHandler(product)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default ProductsScreen;
