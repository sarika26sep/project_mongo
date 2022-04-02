express = require('express');
var app = express();
require("./db/db_conn");
const PORT= process.env.port || 3000;

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(PORT, function () {
   var host = server.address().address;
   var port = server.address().port;
   console.log("Example app listening at http://%s:%s", host, port)
})