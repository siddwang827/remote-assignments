const express = require('express');
const bcrypt = require('bcrypt');
const db = require("../database");
const { render } = require('express/lib/response');
const router = express.Router();


function queryUserInfo() {

}

function checkDuplicated(req, res, next) {
    console.log("in checkDuplicated function")
    const userEmail = req.body.email;
    let sql = "SELECT email FROM assignment.user Where email = ?";
    db.query(sql, [userEmail], (err, result) => {
        if (err) throw err;
        if (result[0]) {
            const errorMessage = 'This email has already been used!'
            console.log(errorMessage);
            res.render('user', { errorMessage })
        } else {
            console.log('This email is unique.');
            next()
        }
    });

};




function checkMatch(userInfo) {
    let sql = "SELECT * FROM user "
};


function logIn(userInfo) {

};


function register(req, res, next) {
    let { email, password } = req.body;
    let sql = "INSERT INTO assignment.user (email, password) VALUES (?, ?)";
    db.query(sql, [email, password], (err, result) => {
        if (err) throw err;
        console.log(result)
        next()
    });


};












router.get("/", (req, res) => {
    console.log("root!")
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
    console.log("new email sign up success")
    res.cookie('email', req.body.email)
    res.redirect('/member')

})


router.post("/login", [], (req, res) => {
    const { email, password } = req.body
    console.log(req.body)
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