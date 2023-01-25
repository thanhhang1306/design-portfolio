const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; 
const https = require('https');
// const { allowedNodeEnvironmentFlags } = require('process');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.listen(port, () => {
   console.log(`Newsletter app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

app.get('/signup.html', (req, res) => {
   res.sendFile(__dirname + '/signup.html');
});

app.get('/project.html', (req, res) => {
   res.sendFile(__dirname + '/project.html');
});

app.post('/signup.html', (req, res) => {
   var name = req.body.name;
   var email = req.body.email;
   var message = req.body.message;

   console.log(`Name: ${name} + Email: ${email} + Message: ${message}`);
});

//API KEY 
// 97fcc93952edbd443de59f891dd0e656-us17