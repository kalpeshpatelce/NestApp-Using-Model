import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Computer } from './computer.model';

@Injectable()
export class ComputersService {
  constructor(
    @InjectModel(Computer)
    private computerModel: typeof Computer,
  ) {}

  async findAll(): Promise<Computer[]> {
    return this.computerModel.findAll({
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
  }

  async findOne(serialNo: string): Promise<Computer> {
    return this.computerModel.findByPk(serialNo, {
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
  }

  async create(computer: Omit<Computer, 'createdAt' | 'updatedAt'>): Promise<Computer> {
    return this.computerModel.create(computer);
  }

  async update(serialNo: string, computer: Partial<Computer>): Promise<[number, Computer[]]> {
    const [affectedCount, updatedComputers] = await this.computerModel.update(computer, { where: { PCSerialNo: serialNo }, returning: true });
    
    if (updatedComputers) {
      return [affectedCount, updatedComputers];
    } else {
      // Handle the case where updatedComputers is undefined
      throw new Error('Failed to update computer');
    }
  }

  async remove(serialNo: string): Promise<number> {
    return this.computerModel.destroy({ where: { PCSerialNo: serialNo } });
  }
}
