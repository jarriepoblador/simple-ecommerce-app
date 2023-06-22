const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express()

//importing all routes
const auth = require('./src/routes/auth')
const admin = require('./src/routes/admin')
const user = require('./src/routes/user')
const product = require('./src/routes/product')
const category = require('./src/routes/category')

const cors = require('cors');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())

//mongodb connection
mongoose.connect('mongodb://localhost/e-commerce-database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
}).then(() => {
  console.log('Connected to MongoDB database');
}).catch((err) => {
  console.log('Failed to connect to MongoDB database', err);
});

const db = mongoose.connection

//check if mongodb connected
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());

//Routes
app.use(auth);
app.use(admin);
app.use(user);
app.use(product);
app.use(category);

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(5000, () => {
  console.log('Server started on port 5000');
});
