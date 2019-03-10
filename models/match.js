'use strict';
module.exports = (sequelize, DataTypes) => {
  var Match = sequelize.define('Match', {
    playerA: DataTypes.STRING,
    playerB: DataTypes.STRING,
    winner: DataTypes.STRING,
    scheduledAt: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Match;
};
