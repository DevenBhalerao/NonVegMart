const express = require('express');
const router = express.Router();
const multer = require('multer');

const product = require('../../database/models/Product');

//Upload images

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads/');
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}_${file.originalname}`);
	},
	fileFilter: (req, file, cb) => {
		const ext = path.extname(file.originalname);
		if (ext !== '.jpg' || ext !== '.png') {
			return cb(res.status(400).end('only jpg, png are allowed'), false);
		}
		cb(null, true);
	},
});

var upload = multer({ storage: storage }).single('file');

// Product

router.get('/', (req, res) => {
	product
		.find({})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
router.get('/:product_id', (req, res) => {
	product
		.findOne({
			_Product_Category_id: req.body.product_category_id,
			_id: req.params.product_id,
		})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});
router.post('/', (req, res) => {
	new product({
		_Product_Category_id: req.body.product_category_id,
		name: req.body.name,
		description: req.body.description,
		cost: req.body.cost,
		images: req.body.images,
	})
		.save()
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});

router.patch('/:product_id', (req, res) => {
	product
		.findOneAndUpdate(
			{
				_id: req.params.product_id,
			},
			{ $set: req.body }
		)
		.then((Product) => res.send(Product))
		.catch((error) => console.log(error));
});
router.delete('/:product_id', (req, res) => {
	product
		.findOneAndDelete({
			_id: req.params.product_id,
		})
		.then((product) => res.send(product))
		.catch((error) => console.log(error));
});

router.post('/uploadImage', (req, res) => {
	console.log('in ackend');
	upload(req, res, (err) => {
		if (err) {
			return res.json({ success: false, err });
		}
		return res.json({
			success: true,
			image: res.req.file.path,
			fileName: res.req.file.filename,
		});
	});
});

module.exports = router;
