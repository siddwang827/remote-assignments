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
        res.render('login', { username })
    }
})

// add cookie
router.get('/trackName', (req, res) => {
    console.log(req.query.username)
    res.cookie('username', req.query.username);
    res.redirect('/myName')

})

// clear cookie
router.post('/trackName', (req, res) => {
    res.clearCookie('username')
    res.redirect('/myName')
})

module.exports = router