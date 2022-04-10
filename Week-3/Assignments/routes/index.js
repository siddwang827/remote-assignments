const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('<h1>Hello My Server</h1>')
})

router.get('/myName', (req, res) => {
    const username = req.cookies.username;
    if (!username) {
        res.render('index')
    } else {
        res.send(`<h1>Hi, ${username}!</h1>`)
    }
})

router.post('/trackName', (req, res) => {
    console.log(req.body);
    res.cookie('username', req.body.username);
    res.redirect('/myName')

})

module.exports = router