const db = require('../services/db');

module.exports.getAll = (request, response) => {
  try {
    const rawString = 'select * from ingredientes left join alimentos a on ingredientes.id_alimento = a.id_alimento;'
    const query = db.format(rawString);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(500).json(error);  
  }
}

module.exports.getById = (request, response) => {
  try {
    const { ingredienteId } = request.params;
    const rawString = 'select * from ingredientes i left join alimentos a on i.id_alimento = a.id_alimento where i.id_ingredientes = ?';
    const query = db.format(rawString, ingredienteId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(500).json(error);  
  }
}
module.exports.getByReceitaId = (request, response) => {
  try {
    const { receitaId } = request.params;
    const rawString = 'select * from ingredientes i left join alimentos a on i.id_alimento = a.id_alimento left join receita r on i.id_receita = r.id_receita where i.id_receita = ?;';
    const query = db.format(rawString, receitaId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(500).json(error);  
  }
}
module.exports.deleteById = (request, response) => {
  try {
    const { ingredienteId } = request.params;
    const rawString = 'DELETE FROM ingredientes where id_ingredientes = ?;';
    const query = db.format(rawString, ingredienteId);
    db.query(query, (err, results) => {
      if (err) throw err;
      if(results.affectedRows <= 1) return response.status(412).json('NONE_TABLE_WITH_ID');
      return response.json(`INGREDIENTE COM ID: ${ingredienteId} APAGADO COM SUCESSO`);
    });
  } catch (error) {
    return response.status(500).json(error);  
  }
}
module.exports.createIngrediente = (request, response) => {
 try {
   const { alimentoId, receitaId } = request.body;
   const rawString = 'insert into ingredientes (id_alimento, id_receita) values (?, ?);';
   const query = db.format(rawString, [alimentoId, receitaId]);
   db.query(query, (err, results) => {
    if (err) throw err;
    response.setHeader('id', results.insertId)
    return response.json(`INGREDIENTE COM ID: ${results.insertId}CRIADO COM SUCESSO !`);
  });
 } catch (error) {
  return response.status(500).json(error);   
 }
}