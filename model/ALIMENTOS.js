/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ALIMENTOS', {
    ID_ALIMENTO: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    ID_USER: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    ID_GRUPO: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'GRUPO',
        key: 'ID_GRUPO'
      }
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    quatidade: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    valor: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    proteina: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    carboidrato: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    valor_energetico: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'ALIMENTOS'
  });
};
