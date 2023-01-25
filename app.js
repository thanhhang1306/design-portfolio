const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; 
const https = require('https');
const ejs = require('ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

app.listen(process.env.PORT || port, () => {
   console.log(`Newsletter app listening at http://localhost:${process.env.PORT}`);
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

app.post('/weather_null.html',(req, res) => {
   res.redirect('/project.html');
});

app.post('/project.html', (req, res) => {
   var query = req.body.cityName;
   const apiKey = "847b3862644bcb770a2b6546fe882c92";
   const unit = `metric`;
   const url = `https://api.openweathermap.org/data/2.5/forecast?appid=${apiKey}&q=${query}&units=${unit}`;
   
   https.get(url, (response) => {
      response.on("data", (d) => {
         if(response.statusCode == 200) {
            var data = JSON.parse(d);
            var weatherData = data.list[0].main.temp;
            var weatherDesc = data.list[0].weather[0].description;
            res.render('weather.html', {query:query, weatherData:weatherData, weatherDesc:weatherDesc, link:`http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png`});
         }
         else {
            res.sendFile(__dirname + '/weather_null.html');
         }
      }); 
   });
});

