/* eslint-disable indent */
import multer from 'multer';
import express from 'express';
import Product from '../models/productModel';
import { isAuth, isAdmin } from '../util';
import { uploadFile } from '../upload_util';

const multerS3 = require('multer-s3');

const router = express.Router();

/* upload(req, res, (err) => {
    if (err) {
      return res.json({ success: false, err });
    }
    return res.json({
      success: true,
      images: res.req.file.path,
      fileName: res.req.file.filename,
    });
  });
  const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../frontend/build'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
*/

//router.post('/uploadImage', upload.array('file'), (req, res) => {});

const aws = require('aws-sdk');

const S3_BUCKET = 'nonvegmartbucket';

const s3config = new aws.S3();

const multerS3Config = multerS3({
  s3: s3config,
  bucket: S3_BUCKET,
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    //(file);
    cb(null, Date.now() + '-' + file.originalname);
  },
  onError: function (err) {
    console.log('error');
  },
});

const upload = multer({
  storage: multerS3Config,
}).single('file');

router.post('/uploadImage', (req, res) => {
  upload(req, res, (err) => {
    //console.log('uploadimage');
    //console.log(res.req.file);
    if (err) {
      return res.json({ success: false, err });
    }
    console.log(res.req.file.location);
    return res.json({
      success: true,
      images: res.req.file.location,
      fileName: res.req.file.key,
    });
  });
  /*const s3 = new aws.S3();
  console.log(req);
  const uploadFileObject = req.file;
  //console.log(uploadFile[0].originalname);
  //console.log(uploadFile[0].mimetype);
  const fileName = uploadFileObject.originalname;
  const fileType = uploadFileObject.mimetype;
  const s3Params = {
    Bucket: S3_BUCKET,
    Key: Date.now() + fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read',
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    //console.log('in signed');
    if (err) {
      console.log(err);
      return res.end();
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
    };
    //console.log(returnData);
    uploadFile(uploadFileObject, returnData.signedRequest, returnData.url);
  });*/
});

router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  // eslint-disable-next-line no-nested-ternary
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const products = await Product.find({ ...category, ...searchKeyword }).sort(
    // eslint-disable-next-line comma-dangle
    sortOrder
  );
  res.send(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findOne({ _id: req.params.id });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found.' });
  }
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await Product.findById(productId);
  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.categoryId = req.body.categoryId;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();
    if (updatedProduct) {
      return res
        .status(200)
        .send({ message: 'Product Updated', data: updatedProduct });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Product.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedProduct = await Product.findById(req.params.id);
  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({ message: 'Product Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

router.post('/',  async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    categoryId: req.body.categoryId,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newProduct = await product.save();
  if (newProduct) {
    return res
      .status(201)
      .send({ message: 'New Product Created', data: newProduct });
  }
  return res.status(500).send({ message: ' Error in Creating Product.' });
});

export default router;
