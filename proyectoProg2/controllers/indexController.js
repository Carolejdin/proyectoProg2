var main = require('../db/dataProducts');

const main = {
    index: function(req, res) {
        res.render('index', { title: 'Index'});
    },
    login: function(req, res) {
        res.render('login', { title: 'Login'});
    },
    register: function(req, res) {
        res.render('register');
    }
}

module.exports = main;