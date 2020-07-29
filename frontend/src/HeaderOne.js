import React, { useState, useEffect } from 'react';
import {  Card,Accordion , Navbar , Nav, NavDropdown , Form, FormControl, Button, ButtonGroup, SplitButton, Badge} from 'react-bootstrap';
import Modal from 'react-responsive-modal'
import Dropdown from 'react-bootstrap/Dropdown'
import Cookie from 'js-cookie';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from './actions/userActions';
import { Link } from 'react-router-dom';
// import {createHashHistory} from "history";
import './screens/css/style.css'
import './screens/css/App.css'
import {useHistory} from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
// import MetaTags from 'react-meta-tags';

// import SigninScreen from './screens/SigninScreen';
function Headerone(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [signinModal , setSigninModal] = useState(false);
  const [search, setSearch] = useState('');
  const [email, setEmail] = useState('');
  console.log(email);
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const categoryList = useSelector((state) => state.categoryList);
  const {  category } = categoryList;
  const history = useHistory();
  const openMenu = () => {
    document.querySelector('.sidebar').classNameNameList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classNameNameList.remove('open');
  };
  const dispatch = useDispatch();
  
  // const redirect = props.location.search ? props.location.search.split('=')[1] : '/';
  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  //   return () => {
  //     //
  //   };
  // }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };
  // console.log(history)
  // const searchHandler = ()=>{
  //   history.push('/shop/?search=' +search)
  // };
  let latitude,longitude;
  function geolocation(e){
    // e.preventDefault();
    if("geolocation" in navigator){
     
      navigator.geolocation.getCurrentPosition((p,e) => {
        if(e){
          alert("There is an error!")
        }else{
          latitude = p.coords.latitude;
          longitude = p.coords.longitude;
          Cookie.set("latitude", latitude);
          Cookie.set("longitude", longitude);
          // location = latitude + longitude;
          console.log(`latitude = ${latitude}` , `longitude = ${longitude}`);
        }
      })
    }
    
  }
 
  geolocation();
  const cartItems = Cookie.getJSON('cartItems') || [];
  let badgeStyle = "Badge btn btn-";
  if(cartItems.length === 0){
    badgeStyle += "warning";
  }else{
    badgeStyle += "success";
  }

  return (
    <div>
  <Navbar className="nav" expand="xl">
  <Navbar.Brand href="/" style={{'width' : '300px' , 'height' : '100px'}}>
 
        <img
          style={{'margin-left':'50px' , width: '20%', height: '100%' }}
          src={`http://localhost:5000/logo.png`}
          alt=""
          />
    
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="navLinks">
      <Nav.Link id="NavLink" href="/">Home</Nav.Link>
      <Nav.Link id="NavLink" href="/shop">Shop</Nav.Link>
      <Nav.Link id="NavLink" href="/about-us">About Us</Nav.Link>
      <Nav.Link id="NavLink" href="/">Chat with us</Nav.Link>
    </Nav>

    <div class="col-lg-2 " style={{

'justify-content': 'center',

}}>

{!userInfo && (

  <li class="redhover" style={{
    'list-style-type': 'none', 'font-size': '16px', 'font-family': 'Segoe UI', 'padding': '24px 00px', 'margin-left': '70px',
    'max-width': '50%',
  }}>

    <a href='/signin'>Sign in</a>


  </li>

)

}


{userInfo && !userInfo.isAdmin && !userInfo.isSeller && (
  <Dropdown as = {ButtonGroup}>
  {/* <Button variant="success">Hello {userInfo.name}</Button> */}
  <div style={{ 'background-color':'green;'}}>Hello, {userInfo.name}</div>
  <Dropdown.Toggle split variant="white" id="dropdown-split-basic"><i class="fa fa-chevron-down" /></Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">My Account</Dropdown.Item>
    <Dropdown.Item href="/cart">My Cart</Dropdown.Item>
    <Dropdown.Item href="/orders">My orders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)}

{userInfo && userInfo.isAdmin && (
  <Dropdown as = {ButtonGroup}>
  {/* <Button variant="success">Hello {userInfo.name}</Button> */}
  <div style={{'padding-top':'10px;' , 'background-color':'green;'}}>Hello, {userInfo.name}</div>
  <Dropdown.Toggle split variant="white" id="dropdown-split-basic"><i class="fa fa-chevron-down" /></Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">My Account</Dropdown.Item>
    <Dropdown.Item href="/cart">My Cart</Dropdown.Item>
    <Dropdown.Item href="/products">My products</Dropdown.Item>
    <Dropdown.Item href="/orders">My orders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)}

{userInfo && userInfo.isSeller && (
  <Dropdown as = {ButtonGroup}>
  {/* <Button variant="success">Hello {userInfo.name}</Button> */}
  <div style={{'padding-top':'20px;' , 'background-color':'green;'}}>Hello, {userInfo.name}</div>
  <Dropdown.Toggle split variant="white" id="dropdown-split-basic"><i class="fa fa-chevron-down" /></Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">My Account</Dropdown.Item>
    <Dropdown.Item href="/cart">My Cart</Dropdown.Item>
    <Dropdown.Item href="/sellerproducts">My products</Dropdown.Item>
    <Dropdown.Item href="/sellerorders">My orders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)}

  

</div>

  <div>
  <a href='/cart'><i className="fa fa-shopping-cart fa-lg"></i></a>
  { userInfo ?  (<small><Badge className={badgeStyle}>{cartItems.length}</Badge></small>) : (<div></div>) }
  </div>
  
  </Navbar.Collapse>
 
  </Navbar>
</div>
  );
}

export default Headerone;
