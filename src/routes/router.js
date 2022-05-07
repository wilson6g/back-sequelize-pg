const express = require('express');
const { createUserInterface, listAllInterface, deleteUserInterface } = require('../interface/user-interface/user-interface');
const router = express.Router();

router.get('/user', async (request, response) => {
  const listAll = await listAllInterface();

  return response.json({ data: listAll });
});

router.delete('/user/:id', async (request, response) => {
  const { id } = request.params;

  const deletedUser = await deleteUserInterface(id);

  return response.status(204).json({ data: deletedUser });
})

router.post('/user', async (request, response) => {
  const { firstName, lastName } = request.body;

  const newUser = await createUserInterface(firstName, lastName);

  return response.status(201).json({ data: newUser });
});

module.exports = router;