'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Matches', [{
        playerA: 'CSK',
        playerB: 'RCB',
        scheduledAt: new Date('2019-03-23T20:00:00+00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        playerA: 'KKR',
        playerB: 'SRH',
        scheduledAt: new Date('2019-03-24T16:00:00+00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        playerA: 'MI',
        playerB: 'DC',
        scheduledAt: new Date('2019-03-24T20:00:00+00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        playerA: 'RR',
        playerB: 'KXIP',
        scheduledAt: new Date('2019-03-25T20:00:00+00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        playerA: 'DC',
        playerB: 'CSK',
        scheduledAt: new Date('2019-03-26T20:00:00+00:00'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
