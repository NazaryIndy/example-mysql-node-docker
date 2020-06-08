var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var db = require('./models');
var apiRoutes = require('./routes/apiRoutes.js');

// var indexRouter = require('./routes/index');

// app.use(bodyParser.urlencoded({
//     extended: false
// }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api + json'}));
app.use(express.static(path.join(__dirname, 'public')));

//routes setup
// app.use('/', indexRouter);
// app.use('/', apiRoutes);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

apiRoutes(app, db);
// db.sequelize.sync().then(function () {
//     console.log('DB SYNC -----------------------------------!!!');
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    // res.render('error');
    res.json({ error: err })
});

module.exports = app;
