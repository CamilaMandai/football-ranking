'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('matches', 
    {   
      id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      home_team_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      home_team_goals: {
        type: Sequelize.INTEGER, 
        allowNull: false,
      },
      away_team_id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        references: {
          model: 'teams',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      away_team_goals: {
        type: Sequelize.INTEGER, 
        allowNull: false,
      },
      in_progress: {
        type: Sequelize.BOOLEAN, 
        allowNull: false,
      },
  },
  {
    timeStamps: false,
  }
  );
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('matches');
  }
};