'use strict';
var os = require('os');
const express = require('express');
const request = require('request');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(express.static("public"));

app.get('/index', (req, res) => {
  res.send(__dirname + "/" + "index.html");
});
// api ------------------------------------------------------------
app.get('/api/getMessage', function (req, res) {
  

  

  // Invoke service
  request('http://ignite-webapi:5000/api/values', function (error, response, body) {
      if(error) console.log(error);
<<<<<<< HEAD
      res.send('Hello from WebAPP running on ' + os.hostname() + ' and ' + body );
      console.log('Hello from WebAPI running on ' + os.hostname() + ' and ' + body );
=======
      res.send('Hello from WebAPP running on ' + os.hostname() + ' and ' + body + ' at ' + new Date().toLocaleTimeString());
      console.log('Hello from WebAPI running on ' + os.hostname() + ' and ' + body + ' at ' + new Date().toLocaleTimeString());
>>>>>>> 1d6596554a1159a6e273b3868dff0b762c9e4012
  });
}); 

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
