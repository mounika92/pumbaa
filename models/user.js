'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.MatchChoice, {
          foreignKey: 'user_id',
          as: 'matchChoices'
        });
      }
    }
  });
  return User;
};
