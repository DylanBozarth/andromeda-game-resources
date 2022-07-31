/* 
take a string and a difficulty parameter
IE: ('cheeseburger', easy)
run that string through a random function of that difficulty. 
Return the encrypted string
*/ 
const express = require('express');
const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
};


export const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  
  res.send('yeah')
})

  
app.listen(port, () => {
  console.log(`port is on: ${port}`)
})