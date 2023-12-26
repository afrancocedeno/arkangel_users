import { Exclude } from "class-transformer";
import { BaseModel } from "src/common/models/base.model"
import { Column } from "typeorm"

export class User extends BaseModel {

  @Column({ type: 'varchar', length: 255, unique: false })
  name: string

  @Exclude()
  @Column({ type: 'varchar', length: 255 })
  password: string;

  @Column({ type: 'varchar' })
  files: string[]

  @Column({ type: 'varchar', length: 100 })
  role: string;

  @Column({ type: 'boolean', default: true })
  visible: boolean

}
