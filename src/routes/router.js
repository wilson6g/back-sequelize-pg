const express = require('express');
const { createUserInterface, listAllInterface } = require('../interface/user-interface/user-interface');
const router = express.Router();

router.get('/user', async (req, res) => {
  const listAll = await listAllInterface(req);

  res.status(listAll.statusCode).json(listAll).send();
});

router.post('/user', async (req, res) => {
  const { firstName, lastName } = req.body;
  res.setHeader('Content-Type', 'application/json');

  const newUser = await createUserInterface(firstName, lastName);

  res.status(newUser.statusCode).json(newUser).send();
});

module.exports = router;