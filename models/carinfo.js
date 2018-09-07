module.exports = function(sequelize, DataTypes) {
    var CarInfo= sequelize.define("CarInfo", {
      make: DataTypes.STRING,
      model:DataTypes.STRING,
      year: DataTypes.STRING,
      package: DataTypes.TEXT
      });
    return CarInfo;
  };



