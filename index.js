const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.use(express.static('views'));

app.listen(port, () =>{
  console.log(`example app listening at http://localhost:${port}`);
});

app.get()

app.get('/', (req, res) => {
  console.log(`request URL: ${req.url}`); 
  res.end('index');  
});
// hi
