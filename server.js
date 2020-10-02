const express = require('express')
const bodyParser = require('body-parser');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname+'/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

 
app.get('/',  (req, res) => {
  res.render('home.hbs', {});
});

 
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});