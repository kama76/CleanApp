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
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // continue doing what we were doing and go to the route
    next();
});

router.post('/login', function(req, res) {
  let username = req.param('username');
  let password = req.param('password');
  console.log(username);
  console.log('login');
  request.get('http://localhost:8001/rest/json/login/knapp', {form:{id : 'knapp'}}, function(error, response, body) {
    if(error) {
      console.log('loginError'+ error);
      res.send(error);
    }
    else{
      console.log('successLogin');
      console.log('NodeDaten: '+ body);
      res.send(body);
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
