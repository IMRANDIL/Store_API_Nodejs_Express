const express = require('express');

require('dotenv').config();

//async errors...
require('express-async-errors')

const app = express();
const router = require('./routes/products');
const notFountMiddleWare = require('./middleware/not-found');
const errorHandler = require('./middleware/error-handler')
//MIDDLEWARE.......

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//home route...
app.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="http://localhost:5000/api/v1/products">Go To Product</a>`)
})




app.use('/api/v1/products', router)



app.use(notFountMiddleWare)

app.use(errorHandler)





app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port:${process.env.PORT || 3000}...`);
})