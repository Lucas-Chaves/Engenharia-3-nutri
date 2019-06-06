const db = require('../services/db');

module.exports.getAlimentos = (request, response) => {
  try {
    const rawString = 'select * from alimentos';
    db.query(rawString, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(500).json({error});
  }
}

module.exports.getAlimentoById = (request, response) => {
  try {
    const rawString = 'select * from alimentos a where a.id_alimento = ?'
    const { alimentoId } = request.params;
    const query = db.format(rawString, alimentoId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results[0]);
    });
  } catch (error) {
    return response.status(500).json({error})
  }
}
module.exports.getAlimentosByUserId = (request, response) => {
  try {
    const rawString = 'select * from alimentos a where a.id_user = ?';
    const { user } = request;
    console.log('user::', user)
    const query = db.format(rawString, user);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.createAlimentos = (request, response) => {
  try {
    const rawString = 'insert into alimentos (id_user, id_grupo, nome, proteina, carboidrato, valor_energetico) values (?, ?, ?, ?, ?, ?);';
    const { user } = request;
    const {grupoId, nome, proteina, carboidrato, energetico } = request.body;
    const query = db.format(rawString, [user, grupoId, nome, proteina, carboidrato, energetico]);
    db.query(query, (err, results) => {
      if (err) throw err;
      response.setHeader('alimento_id', results.insertId);
      return response.json('ALIMENTO_CREATED_SUCESSFULLY');
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}

module.exports.deleteAlimento = (request, response) => {
  try {
    const rawString = 'delete from alimentos where id_alimentos = ?';
    const { alimentoId } = request.params;
    const query = db.format(rawString, alimentoId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(`ALIMENTO COM ID: ${alimentoId} DELETADO COM SUCESSO `);
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}