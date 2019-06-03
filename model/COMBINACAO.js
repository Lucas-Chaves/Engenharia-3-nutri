/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('COMBINACAO', {
    ID_COMBINACAO: {
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
    }
  }, {
    tableName: 'COMBINACAO'
  });
};
