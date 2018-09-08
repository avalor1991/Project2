module.exports = function(sequelize, DataTypes) {
    var userCarInfo = sequelize.define("userCarInfo", {
      year: DataTypes.INTEGER,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      trim: DataTypes.STRING
    });
    return userCarInfo;
  };