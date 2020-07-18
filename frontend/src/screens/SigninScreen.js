import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import './css/style.css'

function SigninScreen(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userSignin = useSelector((state) => state.userSignin);
  const { loading, userInfo, error } = userSignin;
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
    dispatch(signin(email, password));
  };
  return (
    <div  style={{'margin-top' : '20px'}} className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2 style={{'border-bottom' : '3px  #b0b435 solid ' , 'margin-bottom' : '20px'
            , 'font-weight' : '900'}}>SIGN-IN</h2>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="email" className='mb-0'>Email</label><span>*</span><br></br>
            <input
              style={{'backgroundColor':'#f7f2f2'}}
              type="email"
              name="email"
              id="email"
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
            ></input><br></br>
          </li>
          <li>
            <label htmlFor="password"  className='mb-0'>Password</label><span>*</span><br></br>
            <input
               style={{'backgroundColor':'#f7f2f2'}}
              type="password"
              id="password"
              name="password"
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
            ></input><br></br>
          </li>
          <li>
            <button type="submit" className="btn hvr-hover">
              <b style={{'color' : 'white'}}> Signin</b>
            </button>
          </li><br></br>
            Haven't registered yet?
         
            <Link style={{'margin-left':'55px' }}
              to={
                redirect === '/' ? 'register' : 'register?redirect=' + redirect
              }
              className="button secondary text-center"
            >
              <span style={{'color' : 'blue' , 'border-bottom':'1px blue solid'}}>Create your account</span>
            </Link>
        
        </ul>
      </form>
    </div>
  );
}
export default SigninScreen;
