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
import FileUpload from '../components/utils/FileUploads';

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

  const productSave = useSelector((state) => state.productSave);
  const {
    loading: loadingSave,
    success: successSave,
    error: errorSave,
  } = productSave;
  const categoryList = useSelector((state) => state.categoryList);

  const { category } = categoryList;
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
    dispatch(listCategory());
    dispatch(listProducts());
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
  };

  const dropdown = (categoryId) => {
    const strValue = categoryId.value.split('_');
    const categoryId_temp = strValue[0];
    const categoryName_temp = strValue[1];
    setCategoryId(categoryId_temp);
    setCategoryName(categoryName_temp);
  };
  return (
    <div className="content content-margined">
      <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>PRODUCTS</h2>
                    <button style={{'color' : 'white' , "marginLeft" : '400px'}}onClick={openModal} className="btn hvr-hover">Create Product</button>
                    
                </div>
            </div>
        </div>
    </div>
    <div className="product-header" style={{ 'margin-bottom': '7%' }}>
      {  modalVisible && (
      <div  style={{'margin-top' : '20px'}} className="form">
        <form onSubmit={submitHandler} >
          <div className="form-container">
            <div>
              <h2 style={{'border-bottom' : '3px  #b0b435 solid ' , 'margin-bottom' : '20px' , 
            'font-weight' : '900'}} class="signin__title">CREATE PRODUCT</h2>
            </div>
            <div>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}</div>}
            </div>
  
            <div className='mb-0'>
              <label className='mb-0' htmlFor="name">
                Name
              </label>
              <input className='form-control' type="text" name="name" value={name} id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label className='mb-0' htmlFor="price">
                Price
          </label>
              <input className='form-control' type="text" name="price" value={price} id="price" onChange={(e) => setPrice(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label className='mb-0' htmlFor="brand">
                Brand
                </label>
              <input className='form-control' type="text" name="brand" value={brand} id="brand" onChange={(e) => setBrand(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label className='mb-0' htmlFor="countInStock">
                CountInStock
          </label>
              <input className='form-control' type="text" name="countInStock" value={countInStock} id="countInStock" onChange={(e) => setCountInStock(e.target.value)}>
              </input>
            </div>
            <div className="signin__input">
              <label className='mb-0' htmlFor="Category">Catgeory</label>
              <br></br>
              <select
                className='form-control'
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
              <label className='mb-0' htmlFor="description">Description</label>
              <br></br>
              <textarea
                className='form-control'
                
                type="message"
                name="description"
                value={description}
                id="description"
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="signin__input">
              <label className='mb-0' htmlFor="images">Upload Images</label>
              <FileUpload refreshFunction={updateImages} />
              <br></br>
            </div>
  
            <button type="submit" style = {{'color' : 'white'}} className="btn hvr-hover">{id ? "Update" : "Create"}</button>
  
            <button type="button" style={{color:'white' , backgroundColor:'red' , marginLeft:'175px'}} onClick={() => setModalVisible(false)}  className="btn hvr-hover" >Back</button>
  
          </div>
        </form>
      </div>
      )}
      </div>
      <div className="product-list">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product._id}>
                  <td>{product._id}</td>
                  <td >
                    <img class="img-fluid" style={{width: '120px'}}src = {`http://localhost:5000/${product.image}`} alt="" />
                  </td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>{product.countInStock}</td>
                  <td>{product.brand}</td>
                  <td>
                  <button  style={{'color' : "white"}} className="btn hvr-hover" onClick={() => openModal(product)} >Edit</button>
                  <button  style={{backgroundColor : 'red' , 'color':'white'}}className="btn hvr-hover m-2" onClick={() => deleteHandler(product)} >Delete</button>                   
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
