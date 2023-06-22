const express = require('express');
const Category = require('../models/category');

const router = express.Router();

//Get all products
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Find one category by ID
router.get('/categories/:id', async (req, res) => {
  try {
    const category = await Category.findOne({_id: req.params.id});
    if (!category) {
      return res.status(404).send('Category not found');
    }
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Post category details
router.post('/categories', (req, res) => {
    const { category_name, category_description } = req.body;
    const category = new Category({ category_name, category_description });
  
    category.save()
      .then(() => {
        res.status(201).send('Created Category');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('Internal Server Error');
      });
  });

//Patch product details
router.patch('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;
  const { category_name, category_description } = req.body;

  Category.findById(categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send('Category not found');
      }

      if (category_name) {
        category.category_name = category_name;
      }

      if (category_description) {
        category.category_description = category_description;
      }

      // if (image_path) {
      //   category.image_path = image_path;
      // }

      return product.save();
    })
    .then(() => {
      res.send('Category updated successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

//Delete category
router.delete('/categories/:categoryId', (req, res) => {
  const categoryId = req.params.categoryId;

  Category.findByIdAndDelete(categoryId)
    .then((category) => {
      if (!category) {
        return res.status(404).send('Category not found');
      }

      res.send('Category deleted successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;