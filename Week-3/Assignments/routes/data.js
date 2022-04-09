const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const { number } = req.query
    if (!number) {
        res.send('<h1>Lack of Parameter</h1>');
    } else if (isNaN(number)) {
        res.send('<h1>The parameter should be a positive number</h1>');
    } else if (!isNaN(number)) {
        let numberSum = 0;
        for (i = 1; i <= number; i++) {
            numberSum += i;
        }
        res.send(`<h1>the result is ${numberSum}</h1>`)
    }

})





module.exports = router







