const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let number = req.query.number;

    if (!number) {
        res.send('Lack of Parameter');
    } else if (isNaN(number)) {
        res.send('The parameter should be a positive number');
    }

    number = parseInt(number)
    const numberSum = (1 + number) * number / 2

    res.send(`The result is ${numberSum}`)
})



module.exports = router







