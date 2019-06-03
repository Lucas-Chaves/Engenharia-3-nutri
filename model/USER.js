/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    ID_USER: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    tableName: 'USER'
  });
};
