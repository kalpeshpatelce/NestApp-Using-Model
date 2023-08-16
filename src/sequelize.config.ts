import { Sequelize } from 'sequelize-typescript';
import { Computer } from './computer.model';

export const sequelize = new Sequelize({
  dialect: 'mssql',
  host: '172.16.12.236',
  port: 1433,
  database: 'Asset',
  username: 'sa',
  password: 'Pr0ject@123',
  models: [Computer],
  define: {
    timestamps: false     // Exclude createdAt and updatedAt columns
  },
});
