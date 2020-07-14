import React, { useState, useEffect, Component } from 'react';
import {Card,Accordion , Navbar , Nav, NavDropdown , Form, FormControl, Button, ButtonGroup, SplitButton} from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Cookie from 'js-cookie';

// import {createHashHistory} from "history";
import './screens/css/style.css'
import './screens/css/App.css'
import {useHistory} from 'react-router-dom';
import SigninScreen from './screens/SigninScreen';
// import MetaTags from 'react-meta-tags';

// import SigninScreen from './screens/SigninScreen';
import { useSelector, useDispatch } from 'react-redux';
function Headerone(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const [search, setSearch] = useState('');
  const [signin, setSigninModal] = useState(false);
  console.log(signin);
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const categoryList = useSelector((state) => state.categoryList);
  const { loading, category, error } = categoryList;
  const history = useHistory();
  const openMenu = () => {
    document.querySelector('.sidebar').classNameNameList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classNameNameList.remove('open');
  };
  const dispatch = useDispatch();
  const signinModal = ()=>{
    setSigninModal(true);
    dispatch(SigninScreen(signin))
  }
  // console.log(history)
  const searchHandler = ()=>{
    history.push('/shop/?search=' +search)
  };
  let latitude,longitude;
  function geolocation(e){
    e.preventDefault();
    if("geolocation" in navigator){
     
      navigator.geolocation.getCurrentPosition((p,e) => {
        if(e){
          alert("There is an error!")
        }else{
          latitude = p.coords.latitude;
          longitude = p.coords.longitude;
          Cookie.set(latitude , longitude);
          // location = latitude + longitude;
          console.log(`latitude = ${latitude}` , `longitude = ${longitude}`);
        }
      })
    }
    
  }
 

  return (
    <div>
  <Navbar className="nav" expand="xl">
  <Navbar.Brand href="#home">Non-Veg Mart Logo</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav id="navLinks">
      <Nav.Link id="NavLink" href="/">Home</Nav.Link>
      <NavDropdown  title="Shop" id="basic-nav-dropdown">
     
        <NavDropdown.Item id="NavDropdownItem"href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item id="NavDropdownItem" href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item id="NavDropdownItem" href="#action/3.3">Something</NavDropdown.Item>
        
       
      </NavDropdown>
      <Nav.Link id="NavLink" href="/">Gallery</Nav.Link>
      <Nav.Link id="NavLink" href="/">About Us</Nav.Link>
      <Nav.Link id="NavLink" href="/">Contact</Nav.Link>
    </Nav>

    <div class="col-lg-2 " style={{

'justify-content': 'center',

}}>

{!userInfo && (

  <li class="redhover" style={{
    'list-style-type': 'none', 'font-size': '16px', 'font-family': 'Segoe UI', 'padding': '24px 00px', 'margin-left': '130px',
    'max-width': '50%',
  }}>

    <a href='signin'>Sign in</a>


  </li>

)

}

{userInfo && userInfo.isAdmin && (
  <Dropdown as = {ButtonGroup}>
  {/* <Button variant="success">Hello {userInfo.name}</Button> */}
  <div>Hello, {userInfo.name}</div>
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
  <div>Hello, {userInfo.name}</div>
  <Dropdown.Toggle split variant="white" id="dropdown-split-basic"><i class="fa fa-chevron-down" /></Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">My Account</Dropdown.Item>
    <Dropdown.Item href="/cart">My Cart</Dropdown.Item>
    <Dropdown.Item href="/sellerproduct">My products</Dropdown.Item>
    <Dropdown.Item href="/sellerorders">My orders</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
)}

</div>
  </Navbar.Collapse>
 
  </Navbar>
</div>
  );
}

export default Headerone;
