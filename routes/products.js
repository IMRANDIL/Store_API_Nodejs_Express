const router = require('express').Router();

require('../db/connection')

//home route...
router.get('/', (req, res) => {
    res.send(`<h1>Store API</h1><a href="/api/v1/porducts">Go To Product</a>`)
})





module.exports = router;