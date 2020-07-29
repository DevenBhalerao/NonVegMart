import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { logout, update } from '../actions/userActions';
import { listMyOrders } from '../actions/orderActions';
import { useDispatch, useSelector } from 'react-redux';
import './css/style.css';

function ProfileScreen(props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;
  const handleLogout = () => {
    dispatch(logout());
    props.history.push("/signin");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(update({ userId: userInfo._id, email, name, password }))
  }
  const userUpdate = useSelector(state => state.userUpdate);
  const { loading, success, error } = userUpdate;

  const myOrderList = useSelector(state => state.myOrderList);
  const { loading: loadingOrders, orders, error: errorOrders } = myOrderList;
  useEffect(() => {
    console.log(userInfo);
    if (userInfo) {
      console.log(userInfo.name)
      setEmail(userInfo.email);
      setName(userInfo.name);
      setPassword(userInfo.password);
    }
    dispatch(listMyOrders());
    return () => {

    };
  }, [userInfo])

  return <div className="profile">
    <div className="all-title-box">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2>PROFILE</h2>
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Shop</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <br></br>
    <div className="profile-info">
      <div className="form">
        <form onSubmit={submitHandler} >
          <ul className="form-container">
          
            <li>
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
              {success && <div>Profile Saved Successfully.</div>}
            </li>
            <li>
              <label  className='mb-0' htmlFor="name">
                Name
          </label><br></br>
              <input className='form-control' value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input><br></br>
            </li>
            <li>
              <label  className='mb-0' htmlFor="email">
                Email
          </label><br></br>
              <input className='form-control' value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input><br></br>
            </li>
            <li>
              <label  className='mb-0' htmlFor="password">Password</label><br></br>
              <input className='form-control' value={password} type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}>
              </input><br></br>
            </li>

          
              <button type="submit"  style={{'color' : 'white'}} className="btn hvr-hover">Update</button>
            
            
              <button type="button" style={{'backgroundColor' : 'red' , 'color' : 'white'}} onClick={handleLogout} className="btn hvr-hover logout-button btn btn-danger">Logout</button>
             

          </ul>
        </form>
      </div>
    </div>
    <br></br>
    <div className="profile-orders content-margined">
      {
        loadingOrders ? <div>Loading...</div> :
          errorOrders ? <div>{errorOrders} </div> :
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.totalPrice}</td>
                  <td>{order.isPaid}</td>
                  <td>
                    <Link to={"/order/" + order._id}>DETAILS</Link>
                  </td>
                </tr>)}
              </tbody>
            </table>
      }
    </div>
  </div>
}

export default ProfileScreen;