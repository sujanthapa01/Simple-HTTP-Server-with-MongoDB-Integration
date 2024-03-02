require('dotenv').config();
const express = require('express');
const router = require('./router/router');
const mongooseConnectionToDB  =  require('./connection');
const {Testusers} = require('./models/model');

const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(express.urlencoded({extended :false}));
// mongoose Database Connection 
const mongooseConnection = process.env.MONGOOSE_CONNECTION;  //Add your mongo Db server
mongooseConnectionToDB(mongooseConnection).then(() => console.log(`mongodb Connected!`))

app.use('/',router);

app.listen(port,()=>console.log(`port is listning at http://lochalhost:${port}`)); 

module.exports = {port};