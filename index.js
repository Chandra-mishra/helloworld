var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.set('view engine','ejs');
app.get('/hello',function(req,res){
    res.render('cpm');
});
app.listen(port, function() {
    console.log("App is running on port " + port);
});