import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'Computers', timestamps: false })
export class Computer extends Model {
@Column({ primaryKey: true, type: DataType.STRING }) PCSerialNo: string;
@Column(DataType.STRING) Model: string;
@Column(DataType.STRING) Make: string;
@Column(DataType.STRING) ProcessorDetails: string;
@Column(DataType.STRING) ProcessorClockSpeed: string; 
@Column(DataType.STRING) ProcessorCores: string;  
@Column(DataType.STRING) ProcessorLogicalProcessor: string;  
@Column(DataType.STRING) HardDriveSize: string;  
@Column(DataType.STRING) HardDriveSerialNo: string;  
@Column(DataType.STRING) TotalRAMSize: string;  
@Column(DataType.STRING) AvailableRAMSlot: string;  
@Column(DataType.STRING) Slot1Size: string;  
@Column(DataType.STRING) Slot1Type: string;  
@Column(DataType.STRING) Slot1Speed: string;  
@Column(DataType.STRING) Slot2Size: string;  
@Column(DataType.STRING) Slot2Type: string;  
@Column(DataType.STRING) Slot2Speed: string;  
@Column(DataType.STRING) Slot3Size: string;  
@Column(DataType.STRING) Slot3Type: string;  
@Column(DataType.STRING) Slot3Speed: string;  
@Column(DataType.STRING) Slot4Size: string;  
@Column(DataType.STRING) Slot4Type: string;  
@Column(DataType.STRING) Slot4Speed: string;  
@Column(DataType.STRING) Hostname: string;  
@Column(DataType.STRING) LanMACID: string;  
@Column(DataType.STRING) LanIPv4ADDR: string;  
@Column(DataType.STRING) LanIPv6ADDR: string;  
@Column(DataType.STRING) LanAdapterName: string;  
@Column(DataType.STRING) WiFiMacID: string;  
@Column(DataType.STRING) WiFiIPv4ADDR: string;  
@Column(DataType.STRING) WiFiIPv6ADDR: string;  
@Column(DataType.STRING) WiFiAdapterName: string;  
@Column(DataType.STRING) OperatingSystem: string;  
@Column(DataType.STRING) OSArch: string;
}
