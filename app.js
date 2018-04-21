const express = require('express')
const app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http)
const cors = require('cors');
const path = require('path');
var fs = require('fs');


app.use(cors());
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



var router = require('./routes/index')(express, fs,path,io);

app.use('/', router);




var port = process.env.PORT || 3131;
http.listen(3131); // 소켓이라서..
