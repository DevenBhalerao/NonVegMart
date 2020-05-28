import express from 'express';
import Category from '../models/categoryModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();


router.get('/:id', async (req, res) => {
  const category = await Category.findOne({ _id: req.params.id });
  if (category) {
    res.send(category);
  } else {
    res.status(404).send({ message: 'Category Not Found.' });
  }
});
router.get('/', async (req, res) => {
  const category = await Category.find({ });
    res.send(category);
});

router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const categoryId = req.params.id;
  const category = await Category.findById(categoryId);
  if (category) {
    category.name = req.body.name;
    category.description = req.body.description;
    const updatedCategory = await category.save();
    if (updatedCategory) {
      return res
        .status(200)
        .send({ message: 'Category Updated', data: updatedCategory });
    }
  }
  return res.status(500).send({ message: ' Error in Updating Category.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedCategory = await Category.findById(req.params.id);
  if (deletedCategory) {
    await deletedCategory.remove();
    res.send({ message: 'Category Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

router.post('/', isAuth, isAdmin, async (req, res) => {
  const category = new Category({
    name: req.body.name,
    
    description: req.body.description,
    
  });
  const newCategory = await category.save();
  if (newCategory) {
    return res
      .status(201)
      .send({ message: 'New Category Created', data: newCategory });
  }
  return res.status(500).send({ message: ' Error in Creating Category.' });
});

export default router;
