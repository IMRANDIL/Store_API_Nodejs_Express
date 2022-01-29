//populate the data using ...products.json....

require('dotenv').config();




const Product = require('./models/product');

const jsonProducts = require('./products.json');


const start = async () => {
    try {
        require('./db/connection');
        await Product.deleteMany();
        await Product.create(jsonProducts);
        process.exit(0)
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

start();

