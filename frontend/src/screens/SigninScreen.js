import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signin } from '../actions/userActions';
import './css/style.css'
// import '../css/bootstrap-min.css'

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
    <div className="signin__form">
      <form onSubmit={submitHandler}>
        <div className=" col-lg-12 form-container">
          <div>
            <h4 className="signin-title">Sign-In</h4>
          </div>
          <span>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </span>
          <div className="signin__input">
            <p htmlFor="email">Email<span>*</span></p>
            <input
              
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="signin__input">
            <label htmlFor="password">Password<span>*</span></label><br></br>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div class="button">
            <button type="submit" className="site-btn signin__button">
              Signin
            </button>
          </div><br></br>
          <span>Haven't created an account?</span>
          <span>
            <Link
              to={
                redirect === '/' ? 'register' : 'register?redirect=' + redirect
              }
              className="button secondary text-center"
            >
              register
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
export default SigninScreen;
