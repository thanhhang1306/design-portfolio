const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; 
const https = require('https');
const { json } = require('body-parser');
const e = require('express');
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

// app.get('/success.html', (req, res) => {
//    res.sendFile(__dirname + '/success.html');
// });


// app.get('/failure.html', (req, res) => {
//    res.sendFile(__dirname + '/failure.html');
// });


app.post('/signup.html', (req, res) => {
   const name = req.body.name;
   const email = req.body.email;
   const message = req.body.message;

   const data = {
      members: [{
         email_address: email,
         status:'subscribed',
         merge_fields: {
            NAME: name, 
            MESSAGE: message
         }
      }
   ]};

   const jsonData = JSON.stringify(data);
   const url = 'https://us17.api.mailchimp.com/3.0/lists/72d2615dea';

   const options = {
      method: 'POST',
      auth: "hang:97fcc93952edbd443de59f891dd0e656-us17"
   }
   
   const request = https.request(url, options, (response) => {
      if(response.statusCode == 200) {
         res.sendFile(__dirname + '/success.html');
      }
      else {
         res.sendFile(__dirname + '/failure.html');
      }
      response.on('data', (d) => {
         console.log(JSON.parse(d));
      });
   });

request.write(jsonData);
request.end();

}); 

app.post('/failure.html',(req, res) => {
   res.redirect('/signup.html');
});

app.post('/success.html',(req, res) => {
   res.redirect('/index.html');
});

