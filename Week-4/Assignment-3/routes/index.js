const express = require('express');
// const bcrypt = require('bcrypt'); 
const db = require("../database");
const router = express.Router();


function checkDuplicated(req, res, next) {
    const checkEmail = req.body.email;
    let sql = "SELECT email FROM assignment.user Where email = ?";
    db.query(sql, [checkEmail], (err, result) => {
        if (err) throw err;
        if (result[0]) {
            const errorMessage = 'This email has already been used!'
            res.render('user', { errorMessage })
        } else {
            next()
        }
    });
};

function checkValid(req, res, next) {
    const checkInfo = req.body;
    let sql = "SELECT email, password FROM assignment.user WHERE email = ? "
    db.query(sql, [checkInfo.email, checkInfo.password], (err, result) => {
        if (err) throw err;
        if (!result) {
            const errorMessage = 'This email is not exist!'
            res.render('user', { errorMessage })
        } else {
            if (checkInfo.password !== result[0].password) {
                const errorMessage = 'Wrong Password!'
                res.render('user', { errorMessage })
            }
            else {
                console.log('Login Valid')
                next()
            }
        }
    })
};

function register(req, res, next) {
    const { email, password } = req.body;
    let sql = "INSERT INTO assignment.user (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        next()
    });
};




router.get("/", (req, res) => {
    res.redirect('/home')
})

router.get("/home", (req, res) => {
    const email = req.cookies.email
    if (email) {
        res.redirect('/member')
    } else {
        console.log('go to login page')
        res.render('user')
    }
})

router.post("/signup", [checkDuplicated, register], (req, res) => {
    res.cookie('email', req.body.email)
    res.redirect('/member')

})


router.post("/login", checkValid, (req, res) => {
    res.cookie('email', req.body.email)
    res.redirect('/member')

})

router.get("/member", (req, res) => {
    const email = req.cookies.email;
    res.render('member', { email });
})

router.get("/logout", (req, res) => {
    res.clearCookie('email')
    res.redirect('/home')

})

module.exports = router