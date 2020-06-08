var express = require('express');
var router = express.Router();
console.log('INDEX.JS CHECK FFFUUUUUUU!!!!!');
// var user_controller = require('../controllers/userController');

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// /* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', {page:'Home', menuId:'home'});
// });

// GET catalog home page.
// router.get('/', user_controller.index);

/* GET about pageres.redirect. */
// router.get('/about', function(req, res, next) {
//     res.render('about', {page:'About', menuId:'about'});
// });

/* GET about pageres.redirect. */
// router.get('/callback', user_controller.callback);

/* GET ligin page. */
// router.get('/login', function(req, res, next) {
//
//     res.redirect('https://gitlab.roonyx.team/oauth/authorize' +
//         '?client_id=a5f8aeccbd2fa7778073007053869c49b83c4485684cee2d652bb14002d9318e' +
//         '&redirect_uri=http://localhost:3000/callback' +
//         '&response_type=code' +
//         '&state=39b76189fbe5d47dc6508ae8c530ff49495bfaebaaacb7a9365f563b83e1b29c' +
//         '&scope=api+read_user+read_repository');
// });

module.exports = router;
