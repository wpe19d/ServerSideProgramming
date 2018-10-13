const express = require('express');

let app = express();

let bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('port', process.env.PORT || 3000 );

let instruments = require('./data/instruments.json');
let instructors = require('./data/instructors.json');

app.get('/', function(req, res){
    res.json({hi: 'there'});
});

app.get('/instruments', function(req, res) {
    res.json(instruments);
});

app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
})
app.listen(app.get('port'), function() {
    console.log("Express started on http://localhost:" + app.get('port'));
});