const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
    },

    product_description: {
        type: String,
        required: true,
    },

    price: {
        type: Number,
    },

    category_id: {
        type: String,
    },

    quantity: {
        type: Number,
    },

    image: {
        type: String,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;