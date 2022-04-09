const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('<h1>Hello My Server</h1>')
})

router.get('/myName', (req, res) => {

})

router.get('/trackName', (req, res) => {
    const { name } = req.query

})

module.exports = router