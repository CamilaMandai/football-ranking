import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Team extends Model {
  declare readonly id: number;
  declare teamName: string;
}

Team.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  teamName: {
    type: STRING(255),
    allowNull: false,
    field: 'team_name',
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  // modelName: 'example',
  timestamps: false,
});

export default Team;
