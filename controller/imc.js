const db = require('../services/db');

module.exports.getAllImc = (request, response) => {
    try {
      const rawString = 'select * from imc where id_user = ?';
      const { userId } = request.params;
      const query = db.format(rawString, userId);
      db.query(query, (err, results) => {
        if (err) throw err
        return response.json(results);
      });
    } catch (error) {
      return response.status(505).json({error})
    }
}

module.exports.getImcById = (request, response) => {
    try {
      const rawString = 'select * from imc where id_user = ? and id_imc = ?';
      const { userId } = request.params;
      const { imcId } = request.params;
      const query = db.format(rawString, [userId , imcId]);
      db.query(query, (err, results) => {
        if (err) throw err;
        return response.json(results[0]);
      });
    } catch(error) {
      return response.status(505).json({error});
    }
}

module.exports.createImc = (request, response) => {
    try {
      const rawString = 'insert into imc(id_user, valor_imc) value (?,?);';
      const {user} = request;
      const { valorImc } = request.body;
      const query = db.format(rawString, [user, valorImc]);
      db.query(query, (err, results) => {
        if (err) throw err;
        response.setHeader('id', results.insertId);
        return response.status(201).json({message: 'IMC cadastrado com sucesso !'});
      });
    } catch (error) {
      return response.status(505).json({error});
    }
}

module.exports.deleteImc = (request, response) => {
    try {
        const { userId, imcId } = request.params;
      const rawString = 'delete from imc where id_user = ? and id_imc = ?;';
      const query = db.format(rawString, [userId, imcId]);
      db.query(query, (err, results) => {
        if (err) throw err;
        return response.status(201).json({message: `IMC com id ${imcId} deletado com sucesso !`});
      });
    } catch (error) {
      return response.status(505).json({error});
    }
}