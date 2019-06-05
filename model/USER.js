/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
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
