const { decodeToken } = require('./token');

module.exports.isAuth = (request, response, next) => {
  if (!request.headers.authorization) {
    return response.status(401).json({message: 'NOT_AUTHORIZED'});
  }
  const token = request.headers.authorization.split(' ')[1];
  decodeToken(token)
    .then(response => {
      console.log(response)
      request.user = response;
      next();
    })
    .catch(err => {
      response.status(401).send(teste);
    });
}