const router = require('express').Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require("path")
let Product = require('../models/product');

//Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'images');
  },
  filename: function(req, file, cb) {
      cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if(allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
  } else {
      cb(null, false);
  }
}

let upload = multer({ storage, fileFilter });

//Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (err) {
    res.status(500).send(err);
  }
});

//Find one product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findOne({_id: req.params.id});
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.route('/products/add').post( upload.single('image'), (req, res) => {
  const product_name = req.body.product_name;
  const product_description = req.body.product_description;
  const price = req.body.price;
  const category_id = req.body.category_id;
  const quantity = req.body.quantity;
  const image = req.file.filename;

  const newProdData = {
    product_name,
    product_description,
    price,
    category_id,
    quantity,
    image
  }

  const newProd = new Product(newProdData);

  newProd.save()
          .then(() => res.json('Product Added'))
          .catch(err => res.status(400).json('Error: ' + err ));
});

router.route('/products/view').get((req, res) => {
  Product.find()
          .then(product => res.json(product))
          .catch(err => res.status(400).json('Error: ' + err));
});

//Patch product details
router.patch('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const { product_name, product_description, price, category_id, quantity } = req.body;

  Product.findById(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send('Product not found');
      }

      if (product_name) {
        product.product_name = product_name;
      }

      if (product_description) {
        product.product_description = product_description;
      }

      if (price) {
        product.price = price;
      }

      if (category_id) {
        product.category_id = category_id;
      }
      
      if (quantity) {
        product.quantity = quantity;
      }

      // if (image_path) {
      //   product.image_path = image_path;
      // }

      return product.save();
    })
    .then(() => {
      res.send('Product updated successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

//Delete product
router.delete('/products/:productId', (req, res) => {
  const productId = req.params.productId;

  Product.findByIdAndDelete(productId)
    .then((product) => {
      if (!product) {
        return res.status(404).send('Product not found');
      }

      res.send('Product deleted successfully');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Internal Server Error');
    });
});

module.exports = router;