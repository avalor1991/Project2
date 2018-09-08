module.exports = function(sequelize, DataTypes) {
    var car_service= sequelize.define("car_service", {
      car_make:DataTypes.STRING,
      oil_price:DataTypes.INTEGER,
      brake_price:DataTypes.INTEGER,
      tire_rotation_price:DataTypes.INTEGER,
      transmission_price:DataTypes.INTEGER,
      gasket_price:DataTypes.INTEGER
      });
    return car_service;
  };