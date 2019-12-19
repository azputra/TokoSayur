'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn('Orders', 'status', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn('Orders', 'status');
  }
};
