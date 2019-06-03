/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('IMC', {
    IMC_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    ID_USER: {
      type: DataTypes.STRING(45),
      allowNull: false,
      references: {
        model: 'USER',
        key: 'ID_USER'
      }
    },
    valor_imc: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'IMC'
  });
};
