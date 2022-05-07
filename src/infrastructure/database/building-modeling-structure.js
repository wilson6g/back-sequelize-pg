const user = require('./model/user-model/user-registration-model');

const dbInit = () => {
    user.sync();
}

module.exports = dbInit;