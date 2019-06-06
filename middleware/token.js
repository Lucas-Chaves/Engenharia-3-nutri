const jwt = require('jwt-simple');
const moment = require('moment');

const createToken = (usuarioId) => {
  const payload = {
    id: usuarioId,
    iat: moment().unix(),
    exp: moment().add(1, 'days').unix()
  }
  return jwt.encode(payload, 'APP_NUTRI');
}

const decodeToken = (token) => new Promise((resolve, reject) => {
  try {
    const payload = jwt.decode(token, 'APP_NUTRI');
    if (payload.exp <= moment().unix() ){
      return reject({
        status: 401,
        message: 'token_expired'
      });
    }
    return resolve(payload.id);
  } catch (error) {
    return reject({
      status: 500,
      message: 'invalid_token'
    })
  }
});

module.exports = {
  createToken,
  decodeToken
}