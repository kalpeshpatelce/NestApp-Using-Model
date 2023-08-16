import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Computer } from './computer.model';
import { ComputersController } from './computers.controller';
import { ComputersService } from './computers.service';




@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mssql',
      host: '172.16.12.236',
      port: 1433,
      database: 'Asset',
      username: 'sa',
      password: 'Pr0ject@123',
      models: [Computer],
    }),
    
    SequelizeModule.forFeature([Computer]),
  ],
  controllers: [ComputersController],
  providers: [ComputersService],
})

export class AppModule {}

