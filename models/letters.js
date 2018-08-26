module.exports = function(sequelize, DataTypes) {
  var Letter = sequelize.define("Letter", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    letter: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1, 1000]
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Personal"
    }
  });

  Letter.associate = function(models) {
    // every Letter belongs to an User
    // Foreign key means a Letter can't be created without an User
    models.Letter.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Letter;
};
