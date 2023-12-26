import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

export class BaseModel {

  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'investment_type', type: 'varchar', length: 255, unique: false })
  invType: string

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createDate: string

  @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updateDate: string

}
