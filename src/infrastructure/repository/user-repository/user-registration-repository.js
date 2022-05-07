const user = require('../../database/model/user-model/user-registration-model');
const generateUUID = require('../../../commons/generateUID/generate-uid');
const httpStatusResponse = require('../../../commons/http-response/http-status-response');

const listAll = async () => {
  try {
    const users = await user.findAll();

    return users;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User registry repository');
    return finalError;
  }
}

const deleteById = async (id) => {
  try {
      const userDeleted = await user.destroy({
        where: { 
          id: id
        }
      });

      return userDeleted;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User registry repository');
    return finalError;
  }
}

const create = async (firstName, lastName) => {
  try {
    const userCreated = await user.create({
      id: generateUUID(),
      firstName,
      lastName
    });

    return true;

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), 'User registry repository');
    return finalError;
  }
}

module.exports = { listAll, create, deleteById };