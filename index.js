const express = require("express");
const fs = require("fs");
const pug = require('pug');

const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

const compiledFunction = pug.compileFile('template.pug');
console.log(compiledFunction({name: 'Timothy'}));

app.use(express.static('views'));

app.listen(port, () =>{
  console.log(`example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.render('index', { title: 'Hey', message: 'hihi msg'})
});

// app.get('/', (req, res) => {
//   console.log(`request URL: ${req.url}`); 
//   res.end('index');  
// });

