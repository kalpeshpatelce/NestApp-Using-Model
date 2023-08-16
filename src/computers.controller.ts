import { Controller, Get, Post, Put, Delete, Body, Param ,Req } from '@nestjs/common';
import { ComputersService } from './computers.service';
import { Computer } from './computer.model';

@Controller('computers')
export class ComputersController {
  constructor(private readonly computersService: ComputersService) {}

  @Get()
  findAll(@Req() req): Promise<Computer[]> {
    
    console.log(req);
    return this.computersService.findAll();
  }

  @Get(':serialNo')
  findOne(@Param('serialNo') serialNo: string): Promise<Computer> {
    console.log(serialNo);
    return this.computersService.findOne(serialNo);
  }

  
// working Insert Controller
  @Post()
  async create(@Body() computer: Omit<Computer, 'createdAt' | 'updatedAt'>): Promise<Computer> {
    const createdComputer = await this.computersService.create(computer);
    // Exclude 'createdAt' and 'updatedAt' fields before sending the response
    const { createdAt, updatedAt, ...result } = createdComputer.toJSON();
    return result;
  }


  @Put(':serialNo')
  update(@Param('serialNo') serialNo: string, @Body() computer: Computer): Promise<[number, Computer[]]> {
    return this.computersService.update(serialNo, computer);
  }
  
  @Delete(':serialNo')
  remove(@Param('serialNo') serialNo: string): Promise<number> {
    return this.computersService.remove(serialNo);
  }
}
