var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/projects/:projectname', function (req, res) {
  var projectName = req.params.projectname;
  res.sendFile(path.join(__dirname + '/public/projects/' + projectName + '/index.html'));
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});

// Reminder for basic express setup
// mkdir myapp
// cd myapp
// npm init

// npm install express --save

// copy app.js
// copy index.html
// copy public folder structure

// run 'node app.js' to start app
