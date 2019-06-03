/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RECEITAS', {
    ID_RECEITA: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    ID_ALIMENTO: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ALIMENTOS',
        key: 'ID_ALIMENTO'
      }
    },
    ID_USER: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ALIMENTOS',
        key: 'ID_USER'
      }
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ingredientes: {
      type: DataTypes.ENUM(''),
      allowNull: false
    },
    duracao: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'RECEITAS'
  });
};
