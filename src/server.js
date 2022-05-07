const express = require('express');
const userRoutes = require('./routes/router');
const app = express();
const dbInit = require('./infrastructure/database/building-modeling-structure');

const port = 3000;

app.use(express.json());
app.use(userRoutes);

dbInit();

app.listen(port, () => console.log("✔️  Server is running in port " + port))