module.exports = function(sequelize, DataTypes) {
  const LocationInfo = sequelize.define("LocationInfo", {
    zipcode: DataTypes.INTEGER
  });
  return LocationInfo;
};