const express = require('express');

require('dotenv').config();

const app = express();
const router = require('./routes/products')
//MIDDLEWARE.......

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/', router)













app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port:${process.env.PORT || 3000}...`);
})