const db = require('../services/db');

module.exports.getAllUsers = (request, response) => {
  try {
    const rawString = 'select * from usuario';
    const query = db.format(rawString);
    db.query(query, (err, results) => {
      if (err) throw err
      return response.json(results);
    });
  } catch (error) {
    return response.status(505).json({error})
  }
}

module.exports.getUserById = (request, response) => {
  try {
    const rawString = 'select * from usuario where id_user = ?';
    const { userId } = request.params;
    const query = db.format(rawString, userId);
    db.query(query, (err, results) => {
      if (err) throw err
      return response.json(results);
    });
  } catch(error) {
    return response.status(505).json({error});
  }
}