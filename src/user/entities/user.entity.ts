import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity({ name: 'user' })
// export class User extends DefaultEntity {
export class User {

  @PrimaryGeneratedColumn('uuid')
  id: number

  @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
  createDate: string

  @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
  updateDate: string

  @Column({ type: 'varchar', length: 255, unique: false })
  name: string

  @Exclude() // psw is not a value I want to return in a request
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar' })
  files: string[]

  @Column({ type: 'varchar', length: 100 })
  role: string;

  @Column({ type: 'boolean', default: true })
  visible: boolean

}
