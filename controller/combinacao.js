const db = require('../services/db');

module.exports.getAllCombinations = (request, response) => {
  try {
    const rawString = 'select * from combinacao';
    db.query(rawString, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });
  } catch (error) {
    return response.status(505).json({error});    
  }
}
module.exports.getCombinationsById = (request,response) => {
  try {
    const rawString = 'select * from combinacao where id_combinacao = ?';
    const { combinacaoId } = request.params;
    const query = db.format(rawString, [combinacaoId]);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results[0]);
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.getCombinationsByIngredient = (request, response) => {
  try {
    const rawString = 'select * combinacao where id_ingredientes = ?;';
    const { ingredienteId } = request.params;
    const query = db.format(rawString, ingredienteId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results);
    });  
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.deleteCombinations = (request, response) => {
  try {
    const rawString = 'delete from combicao where id_combinacao = ?';
    const { combinacaoId } = request.params;
    const query = db.format(rawString, [combinacaoId]);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.status(200).json({message: `Grupo com id ${grupoId} deletado com sucesso !`});
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.createCombinations = (request, response) => {
  try {
    const {combinacaoNome, ingredienteId, combinacaoDescricao} = request.body;
    const rawString = 'insert into combinacao (nome, id_ingredientes, descricao) values (?,?,?);';
    const query = db.format(rawString, [combinacaoNome, ingredienteId, combinacaoDescricao]);
    db.query(query, (err, results) => {
      if (err) throw err;
      response.setHeader('id', results.insertId);
      return response.status(201).json({message: 'Grupo cadastrado com sucesso !'});
    });
  } catch (error) {
    return response.status(505).json({error});    
  }
}