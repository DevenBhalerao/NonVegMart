'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _express = _interopRequireDefault(require('express'));

var _categoryModel = _interopRequireDefault(require('../models/categoryModel'));

var _util = require('../util');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const router = _express.default.Router();

router.get('/:id', async (req, res) => {
  const category = await _categoryModel.default.findOne({
    _id: req.params.id,
  });

  if (category) {
    res.send(category);
  } else {
    res.status(404).send({
      message: 'Category Not Found.',
    });
  }
});
router.get('/', async (req, res) => {
  const category = await _categoryModel.default.find({});
  res.send(category);
});
router.put('/:id', _util.isAuth, _util.isAdmin, async (req, res) => {
  const categoryId = req.params.id;
  const category = await _categoryModel.default.findById(categoryId);
  //console.log(category);

  if (category) {
    category.name = req.body.name;
    category.description = req.body.description;
    const updatedCategory = await category.save();

    if (updatedCategory) {
      return res.status(200).send({
        message: 'Category Updated',
        data: updatedCategory,
      });
    }
  }

  return res.status(500).send({
    message: ' Error in Updating Category.',
  });
});
router.delete('/:id', _util.isAuth, _util.isAdmin, async (req, res) => {
  const deletedCategory = await _categoryModel.default.findById(req.params.id);

  if (deletedCategory) {
    await deletedCategory.remove();
    res.send({
      message: 'Category Deleted',
    });
  } else {
    res.send('Error in Deletion.');
  }
});
router.post('/', _util.isAuth, _util.isAdmin, async (req, res) => {
  const category = new _categoryModel.default({
    name: req.body.name,
    description: req.body.description,
  });
  const newCategory = await category.save();

  if (newCategory) {
    return res.status(201).send({
      message: 'New Category Created',
      data: newCategory,
    });
  }

  return res.status(500).send({
    message: ' Error in Creating Category.',
  });
});
var _default = router;
exports.default = _default;
