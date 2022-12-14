const express = require("express");
const fs = require("fs");
const path = require('path');
const members = require('./Members.js');


const app = express();
const PORT = process.env.PORT || 5000;



app.get('/api/members', (req, res) => {
  res.json(members);
})

// get static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>{
  console.log(`example app listening ${PORT}`);
});



// app.get('/', (req, res) => {
//   console.log(`request URL: ${req.url}`); 
//   res.end('index');  
// });

