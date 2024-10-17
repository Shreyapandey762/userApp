
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

const app = express();
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );
const route = require('./routes/route')

//Bodyparser middleware
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//DB config
const db = require('./config/keys').mongoURI;

//connect through mongoDB through mongoose
mongoose.connect(db).then(() => console.log('MongoDB  connected')).catch(err => console.log(err));


//use routes
app.use('/route',route);

const port =  5000;

app.listen(port,() => console.log(`Server running on port ${port}`));