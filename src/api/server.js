const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');	
const userRouter = require('../routes/usersRouter');
const productRouter = require('../routes/productRouter')

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/users', userRouter);

app.use('/products', productRouter)

module.exports = app