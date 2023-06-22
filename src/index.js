require('dotenv').config()
const express = require('express')
const path = require('path')
const mysql = require("mysql2");

//Initializations
const app = require('./app')


//Static files
app.use(express.static(path.join(__dirname, "public")));


//Starting the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})

//Starting DB 
/* const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");
connection.end(); */