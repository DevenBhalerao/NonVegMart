import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';
import './css/style.css';

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
    <div className="signin__form">
      <form onSubmit={submitHandler}>
        <div className="form-container">
          <div>
            <h4 className="signin-title">Create Account</h4>
          </div>
          <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </div>
          <div className="signin__input">
            <label htmlFor="name">Name</label><span>*</span>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="signin__input">
            <label htmlFor="email">Email</label><span>*</span>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div className="signin__input">
            <label htmlFor="password">Password</label><span>*</span>
            <input
              type="password"
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <div className="signin__input">
            <label htmlFor="rePassword">Re-Enter Password</label><span>*</span>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            ></input>
          </div>
          <div>
            <button type="submit" className="site-btn signin__button">
              Register
            </button>
          </div>
          <div>
            Already have an account?
            <Link
              to={redirect === '/' ? 'signin' : 'signin?redirect=' + redirect}
              className="button secondary text-center"
            >
              Signin
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default RegisterScreen;
