var express = require('express');
var exphbs  = require('express-handlebars');
var path = require('path');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('home');
});

var port = process.env.PORT || 23000;
app.listen(port, function(){
    console.log("Listening on " + port + ". CTL+C to exit.");
});
