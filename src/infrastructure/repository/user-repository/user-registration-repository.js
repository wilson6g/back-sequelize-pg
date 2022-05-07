const user = require('../../database/building-modeling-structure');
const generateUUID = require('../../../commons/generateUID/generate-uid');

const listAll = async () => {
  try {
    const users = await user.findAll();

    if (users.length > 0) return users;

  } catch (error) {
    console.log(error);
    return false;
  }
}

const create = async (firstName, lastName) => {
  try {
    const userCreated = await user.create({
      id: generateUUID(),
      firstName,
      lastName
    });

    if (userCreated != null) return true;

  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = { listAll, create };