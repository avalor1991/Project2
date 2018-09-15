module.exports = function(sequelize, DataTypes) {
    var userAppointmentInfo = sequelize.define("userAppointmentInfo", {
      year: DataTypes.INTEGER,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      trim: DataTypes.STRING,
      date: DataTypes.STRING,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      zipCode: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      serviceCost: DataTypes.STRING
    });
    return userAppointmentInfo;
  };