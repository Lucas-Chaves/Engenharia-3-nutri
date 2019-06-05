const db = require('../services/db');

module.exports.getAllUsers = (request, response) => {
  try {
    const rawString = 'describe usuario';
    const query = db.format(rawString);
    db.query(query, (err, results) => {
      if (err) throw err
      return response.json(results);
    });
  } catch (error) {
    return response.status(505).json({error})
  }
}