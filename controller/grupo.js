const db = require('../services/db');

module.exports.getAllGrupo = (request, response) => {
    try {
      const rawString = 'select * from grupo';
      const query = db.format(rawString);
      db.query(query, (err, results) => {
        if (err) throw err
        return response.json(results);
      });
    } catch (error) {
      return response.status(505).json({error})
    }
}

module.exports.getGrupoById = (request, response) => {
    try {
      const rawString = 'select * from grupo where id_grupo = ?';
      const { grupoId } = request.params;
      const query = db.format(rawString, grupoId);
      db.query(query, (err, results) => {
        if (err) throw err;
        return response.json(results[0]);
      });
    } catch(error) {
      return response.status(505).json({error});
    }
}

module.exports.createGrupo = (request, response) => {
    try {
      const rawString = 'insert into grupo(nome, description) value (?,?);';
      const { nome, description } = request.body;
      const query = db.format(rawString, [nome, description]);
      db.query(query, (err, results) => {
        if (err) throw err;
        response.setHeader('id', results.insertId);
        return response.status(201).json({message: 'Grupo cadastrado com sucesso !'});
      });
    } catch (error) {
      return response.status(505).json({error});
    }
}

module.exports.deleteGrupo = (request, response) => {
    try {
      const { grupoId } = request.params;
      const rawString = 'delete from grupo where id_grupo = ?;';
      const query = db.format(rawString, grupoId);
      db.query(query, (err, results) => {
        if (err) throw err;
        return response.status(201).json({message: `Grupo com id ${grupoId} deletado com sucesso !`});
      });
    } catch (error) {
      return response.status(505).json({error});
    }
}