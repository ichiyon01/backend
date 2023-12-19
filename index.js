const express = require("express");
const cors = require("cors");
const router = require('./routes/router');

const app = express();

app.use(cors());
app.use(router);
app.use(express.json())

app.listen(5000, ()=>
  console.log('app running')
)