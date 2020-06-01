"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _productModel = _interopRequireDefault(require("../models/productModel"));

var _util = require("../util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable indent */
const router = _express.default.Router();

const storage = _multer.default.diskStorage({
  destination: (req, file, cb) => {
    cb(null, _path.default.join(__dirname, '../../frontend/images'));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = (0, _multer.default)({
  storage
}).single('file');
router.post('/uploadImage', (req, res) => {
  upload(req, res, err => {
    if (err) {
      return res.json({
        success: false,
        err
      });
    }

    return res.json({
      success: true,
      images: res.req.file.path,
      fileName: res.req.file.filename
    });
  });
});
router.get('/', async (req, res) => {
  const category = req.query.category ? {
    category: req.query.category
  } : {};
  const searchKeyword = req.query.searchKeyword ? {
    name: {
      $regex: req.query.searchKeyword,
      $options: 'i'
    }
  } : {}; // eslint-disable-next-line no-nested-ternary

  const sortOrder = req.query.sortOrder ? req.query.sortOrder === 'lowest' ? {
    price: 1
  } : {
    price: -1
  } : {
    _id: -1
  };
  const products = await _productModel.default.find({ ...category,
    ...searchKeyword
  }).sort( // eslint-disable-next-line comma-dangle
  sortOrder);
  res.send(products);
});
router.get('/:id', async (req, res) => {
  const product = await _productModel.default.findOne({
    _id: req.params.id
  });

  if (product) {
    res.send(product);
  } else {
    res.status(404).send({
      message: 'Product Not Found.'
    });
  }
});
router.put('/:id', _util.isAuth, _util.isAdmin, async (req, res) => {
  const productId = req.params.id;
  const product = await _productModel.default.findById(productId);

  if (product) {
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.brand = req.body.brand;
    product.category = req.body.category;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    const updatedProduct = await product.save();

    if (updatedProduct) {
      return res.status(200).send({
        message: 'Product Updated',
        data: updatedProduct
      });
    }
  }

  return res.status(500).send({
    message: ' Error in Updating Product.'
  });
});
router.delete('/:id', _util.isAuth, _util.isAdmin, async (req, res) => {
  const deletedProduct = await _productModel.default.findById(req.params.id);

  if (deletedProduct) {
    await deletedProduct.remove();
    res.send({
      message: 'Product Deleted'
    });
  } else {
    res.send('Error in Deletion.');
  }
});
router.post('/', _util.isAuth, _util.isAdmin, async (req, res) => {
  const product = new _productModel.default({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews
  });
  const newProduct = await product.save();

  if (newProduct) {
    return res.status(201).send({
      message: 'New Product Created',
      data: newProduct
    });
  }

  return res.status(500).send({
    message: ' Error in Creating Product.'
  });
});
var _default = router;
exports.default = _default;