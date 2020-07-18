import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

function RegisterScreen(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
    return () => {
      //
    };
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password));
  };
  return (
    <div style={{'margin-top' : '20px'}}className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2  style={{'border-bottom' : '3px  #b0b435 solid ' , 'margin-bottom' : '20px' , 
            'font-weight' : '900'}}>CREATE ACCOUNT</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name" className='mb-0'>Name</label>
            <input
               style={{'backgroundColor':'#f7f2f2'}}
              className='form-control'
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="email" className='mb-0'  >Email</label>
            <input
               style={{'backgroundColor':'#f7f2f2'}}
              className='form-control'
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password" className='mb-0'>Password</label>
            <input
             style={{'backgroundColor':'#f7f2f2'}}
              className='form-control'
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="rePassword" className='mb-0'>Re-Enter Password</label>
            <input
             style={{'backgroundColor':'#f7f2f2'}}
              className='form-control'
              type="password"
              id="rePassword"
              name="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            ></input>
          </li>
          <li><br></br>
          <button type="submit" className="btn hvr-hover">
              <b style={{'color' : 'white'}}> Register</b>
            </button>
          </li><br></br>
          <li>
            Already have an account?
            <Link style={{'margin-left':'100px'}}
              to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}
              className="button secondary text-center"
            >
              <span id="signin-link" style={{'color' : 'blue' , 'border-bottom':'1px blue solid'}}>Sign-in</span>
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default RegisterScreen;
