const express = require('express');

const app = express();

const path = require('path');

const mongoose = require('./database/mongoose');

app.use('/uploads', express.static('uploads'));

app.use(express.json());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE, TRACE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);

	next();
});

app.use(express.static('uploads'));

app.use('/api/users', require('./api/users'));
app.use('/api/product', require('./api/product/product'));
app.use('/api/product-category', require('./api/product/product-category'));
app.use('/api/user-group', require('./api/user-group'));

// index.html for all page routes
app.get('/start', (req, res) => {
	res.sendFile(path.join(__dirname, '..', 'frontend', 'src', 'index.js'));
});

//login

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/backendlogin', (req, res) => {
	res.render('index.ejs', {
		name: 'xyz',
	});
});
app.get('/backendlogin/login', (req, res) => {
	res.render('login.ejs');
});

app.post('/backendlogin/login');

app.get('/backendlogin/register', (req, res) => {
	res.render('register.ejs');
});

app.post('/backendlogin/register', async (req, res) => {
	try {
		const hashPassword = await bcrypt.hash(req.body.password, 10);
		res.redirect('/backendlogin/login');
	} catch {
		res.redirect('/backendlogin/register');
	}
});

app.listen(2000, () => console.log('Server connected on port 2000'));
