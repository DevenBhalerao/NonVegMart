import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import orderRoute from './routes/orderRoute';
import categoryRoute from './routes/categoryRoute';

const mongodbUrl = config.MONGODB_URL;

mongoose

  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());

app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/categories', categoryRoute);
app.use('/api/orders', orderRoute);
app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});

<<<<<<< HEAD
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  });
  app.listen(config.PORT, () => {
    console.log('Server started at heroku');
  });
} else {
  app.use(express.static(path.join(__dirname, '/../frontend/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`));
  });
  app.listen(config.PORT, () => {
    console.log('Server started at http://localhost:5000');
  });
}
=======
app.use(express.static(path.join(__dirname, '/../frontend/images')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/public/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000/');
});
>>>>>>> akshay
