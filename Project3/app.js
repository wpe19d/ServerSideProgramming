const express = require('express');

let app = express();

let bodyParser = require('body-parser');
let handlebars = require('express-handlebars')
    .create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000 );

let instruments = require('./data/instruments.json');
let instructors = require('./data/instructors.json');
let lessons = [];

app.get('/', function(req, res){
    res.render('home', { instruments: instruments });
});

app.get('/lessons/list', function(req, res) {
    console.log(lessons);
    res.render('lessons', { lessons: lessons });
});

app.get('/lessons/:instrumentCode', function(req, res) {
    let filteredInstructors = instructors.filter( (instructor) => {
        return instructor.instruments.find( (x) => {
            return x.code === req.params.instrumentCode;
        });
    });

    res.render('instructors', { instructors: filteredInstructors });
});

app.get('/lessons/schedule/:instructorId', function(req, res) {
    res.render('schedule', { instructorId: req.params.instructorId});
});

app.post('/lessons/schedule', function(req, res) {
    lessons.push(req.body);
    res.render('thankyou');
});

app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});

app.listen(app.get('port'), function() {
    console.log("Express started on http://localhost:" + app.get('port'));
});