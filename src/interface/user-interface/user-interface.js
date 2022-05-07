const { create, listAll } = require('../../infrastructure/repository/user-repository/user-registration-repository');
const httpStatusResponse = require('../../commons/http-response/http-status-response');
// const listAll = require('../../infrastructure/repository/user-repository/user-registration-repository');

const createUserInterface = async (firstName, lastName) => {
  try {
    const isUserCreated = await create(firstName, lastName);

    if (isUserCreated) {
      return httpStatusResponse(201, 'User created with successfully!');
    }

  } catch (error) {
    return httpStatusResponse(400, 'Failed to create user!', 'repository');
  }
};

const listAllInterface = async () => {
  try {
    const isUsers = await listAll();

    if (isUsers) {
      return httpStatusResponse(200, isUsers);
    }
  } catch (error) {
    return httpStatusResponse(400, 'Failed to list users!', 'repository');
  }
}

module.exports = { listAllInterface, createUserInterface };