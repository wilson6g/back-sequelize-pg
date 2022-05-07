const { create, listAll, deleteById } = require('../../infrastructure/repository/user-repository/user-registration-repository');

const createUserInterface = async (firstName, lastName) => {
  const isUserCreated = await create(firstName, lastName);

  return isUserCreated;
};

const deleteUserInterface = async (id) => {
  const isDeleted = await deleteById(id);

  return isDeleted;
};

const listAllInterface = async () => {
  const isUsers = await listAll();

  return isUsers;
}

module.exports = { listAllInterface, createUserInterface, deleteUserInterface };