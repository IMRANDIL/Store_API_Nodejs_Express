const Product = require('../models/product')


const getAllProductsStatic = async (req, res) => {
    throw new Error('testing async errors')
    res.status(200).json({ msg: 'products testing route' })
}



const getAllProducts = async (req, res) => {
    const data = await Product.find({})
    res.status(200).json(data)
}




module.exports = {
    getAllProducts,
    getAllProductsStatic
}