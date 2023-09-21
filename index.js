var http = require('http');
var dt = require('./r1');
var dt1 = require('./r2');
var dt2 = require('./r3');
var dt3 = require('./r4');
var dt4 = require('./r5');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("HomePage " + dt.myDateTime() + "<br> <br>" + 
            "medicoPage " + dt1.myDateTime1() + "<br> <br>" + 
            "planosPage " + dt2.myDateTime2() + "<br> <br>" +
            "loginPage "  + dt3.myDateTime3() + "<br> <br>" +
            "registerPage " + dt4.myDateTime4());
  res.end();
}).listen(5014);