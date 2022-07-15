const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('th home paasdfsfasfged!')
  });

  app.get('/cats', function(req, res) {
    res.send('ggyo cats  !')
  });



app.get('/api', function(req, res) {
    res.send('<h1>my apis - is a singing and dancing and i can do it a bit late later </h1>')
  });

  


module.exports=app;