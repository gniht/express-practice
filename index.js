const express = require("express");
const fs = require("fs");
const path = require('path');
const members = require('./Members.js');


const app = express();
const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => res.send('<h1>hihi</h1>') );

// get static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members/:id', (req, res) => {
  let result;

  members.forEach( member => {
    if(member.id === parseInt(req.params.id)){
    result =  member;
  }});

  if(result){
    res.json(result);
  }else{
    res.status(400).json({ msg: `Error - no member with id: ${req.params.id} was found` });
  }
});

app.listen(PORT, () =>{
  console.log(`example app listening ${PORT}`);
});



