'use strict';
module.exports = (sequelize, DataTypes) => {
  var MatchChoice = sequelize.define('MatchChoice', {
    userId: DataTypes.INTEGER,
    matchId: DataTypes.INTEGER,
    choice: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return MatchChoice;
};
