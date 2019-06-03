/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GRUPO', {
    ID_GRUPO: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(75),
      allowNull: true
    }
  }, {
    tableName: 'GRUPO'
  });
};
