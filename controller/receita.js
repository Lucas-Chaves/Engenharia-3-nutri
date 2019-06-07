const db = require('../services/db');

module.exports.getAllReceita = (request, response) => {
  try {
    const rawString = 'select * from receita';
    const query = db.format(rawString);
    db.query(query, (err, results) => {
      if (err) throw err
      return response.json(results);
    });
  } catch (error) {
    return response.status(505).json({error})
  }
}

module.exports.getReceitaById = (request, response) => {
  try {
    const rawString = 'select * from receita where id_receita = ?';
    const { receitaId } = request.params;
    const query = db.format(rawString, receitaId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.json(results[0]);
    });
  } catch(error) {
    return response.status(505).json({error});
  }
}

module.exports.createReceita = (request, response) => {
  try {
    const rawString = 'insert into receita(nome, descricao) value (?,?);';
    const { nome, descricao, alimentos } = request.body;
    const query = db.format(rawString, [nome, descricao]);
    db.query(query, (err, results) => {
      if (err) throw err;
      response.setHeader('id', results.insertId);
      let receitaId = results.insertId;
      alimentos.forEach(obj => {
        const newQuery = db.format('insert into ingredientes(id_alimento, id_receita) values ( ?, ?);', [obj, receitaId]);
      });
      return response.status(201).json({message: 'Receita cadastrado com sucesso !'});
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}
module.exports.deleteReceita = (request, response) => {
  try {
    const { receitaId } = request.params;
    const rawString = 'delete from receita where id_receita = ?;';
    const query = db.format(rawString, receitaId);
    db.query(query, (err, results) => {
      if (err) throw err;
      return response.status(201).json({message: `Receita com id ${receitaId} deletado com sucesso !`});
    });
  } catch (error) {
    return response.status(505).json({error});
  }
}