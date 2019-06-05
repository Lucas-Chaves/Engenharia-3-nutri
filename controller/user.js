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
      if (err) throw err;
      return response.json(results[0]);
    });
  } catch(error) {
    return response.status(505).json({error});
  }
}

module.exports.createUser = (request, response) => {
  try {
    const rawString = 'insert into usuario(email, pass) value (?,?);';
    const { email, password } = request.body;
    const query = db.format(rawString, [email, password]);
    db.query(query, (err, results) => {
      if (err) throw err;
      response.setHeader('id', results.insertId);
      return response.status(201).json({message: 'usuario cadastrado com sucesso !'});
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.deleteUser = (request, response) => {
  try {
    const { userId } = request.params;
    const rawString = 'delete from usuario where id_user = ?;';
    const query = db.format(rawString, userId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.status(201).json({message: `usuario com id ${userId} deletado com sucesso !`});
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}