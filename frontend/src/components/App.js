import React from 'react';
import { Route, Switch } from 'react-router-dom';

// pages for this product
import LandingPage from './views/LandingPage/LandingPage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
import RegisterPage from './views/RegisterPage/RegisterPage.js';
import Footer from './views/Footer/Footer';
import UploadProductPage from './views/UploadProduct/UploadProductPage';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
	return (
		<div>
			<div>
				<Switch>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/uploadProduct" component={UploadProductPage} />
				</Switch>
			</div>
			<Footer />
		</div>
	);
}

export default App;
