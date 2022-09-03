const express = require("express");
const app = express();
const path=require("path");
const hbs=require('hbs');
console.log(__dirname);
port = process.env.PORT || 8000;
const static_p=path.join(__dirname,"../public");

const temp_path=path.join(__dirname,"../templates/views");
const partial_path=path.join(__dirname,"../templates/partials");

app.set('view engine', 'hbs');
app.set('views',temp_path);

hbs.registerPartials(partial_path);

app.use(express.static(static_p));

app.get("/", (req, res) => {
  res.render('index');
});

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('*', (req, res) => {
  res.render('404error',{
    msg:'Oops! page not found'
});
});

app.listen(port, () => {
  console.log(`Its ${port} now`);
});
