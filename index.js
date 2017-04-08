var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var time = new Date();

    res.json(time);
});

app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'));