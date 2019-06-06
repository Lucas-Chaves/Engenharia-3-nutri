const { decodeToken } = require('./token');

const isAuth = (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).json({message: 'NOT_AUTHORIZED'});
  }
  const token = request.headers.authorization.split(' ')[1];
  decodeToken(token)
    .then( response => {
      request.user = response;
      return next();
    })
    .catch(err => {
      response.status(err.status).send(err.message);
    });
}
module.exports = isAuth;