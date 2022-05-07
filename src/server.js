const express = require('express');
const userRoutes = require('./routes/router');
const user = require('./infrastructure/database/building-modeling-structure');
const app = express();

const port = 3000;

app.use(express.json());
app.use(userRoutes);
user.sync();

app.listen(port, () => console.log("✔️  Server is running in port " + port))