var express = require('express');
var request = require('request');

var router = express.Router();
var app = express();
var port = process.env.PORT || 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // unterstützt bodies im Format json
app.use(bodyParser.urlencoded({extended: true}));//unterstützt kodierte bodies

//ROUTES
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
/*app.use("/node_modules/angular-smart-table/src", express.static(__dirname + '/node_modules/angular-smart-table/src'));*/


// route middleware that will happen on every request
router.use(function(req, res, next) {

    // log each request to the console
    console.log(req.method, req.url);

    // continue doing what we were doing and go to the route
    next();
});

router.get('/login', function(req, res) {
  console.log('login');
  request('http://localhost:47040/rest/json/login', function(error, response, body) {
    if(error) {
      console.log('loginError'+ error);
    }
      else{
        console.log('successLogin');
        res.send(response);
      }
  });
});

router.get('/', function(req, res) {
  console.log(__dirname);
  //res.sendFile(__dirname+'/views/index.html');
});

/*router.get('/getartikel', function(req, res){
  request('http://localhost:47040/rest/json/artikel/5', function (error, response, body) {
        if(error){
        console.log(error);}
        if (!error && response.statusCode == 200) {
            console.log(body);
            res.send(response);
        }
    })
});*/

app.use('/',router);
app.use(express.static(__dirname))

app.listen(port);
console.log('WepApp runs on port' + port);