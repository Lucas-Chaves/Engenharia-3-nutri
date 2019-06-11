const db = require('../services/db');
const { createToken } = require('../middleware/token');

module.exports.login = (request, response) => {
  try {
  const {email, password} = request.body;
  const rawString = 'select u.pass from usuario u where u.email = ?';
  const queryGetString = db.format('select u.id_user from usuario u where u.email = ?', email);
  const query = db.format(rawString, email);
  db.query(query, async (err, results) => {
    if (err) throw err;
    const { pass } = results[0];
    if(pass === password) {
      db.query(queryGetString, (errQuery, resultsId) => {
        db.end();
        if (errQuery) throw errQuery;
        const { id_usuario } = resultsId[0];
        return response.status(200).json({
          message: 'LOGIN SUCESSFULLY',
          token: createToken(id_usuario)
        })
      })
    } else {
    return response.status(401).json({message: 'WRONG_EMAIL_PASSWORD'});
    }
  });
  } catch (error) {
    return response.status(505).json({error});
  }
}