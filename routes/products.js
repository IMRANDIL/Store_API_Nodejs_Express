const router = require('express').Router();

require('../db/connection');

const { getAllProducts, getAllProductsStatic } = require('../controllers/products')

//products...Route.....

router.route('/').get(getAllProducts);
router.route('/static').get(getAllProductsStatic);




module.exports = router;