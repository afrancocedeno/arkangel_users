import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator";

export class CreateUserDto {

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Length(8)
  @ApiProperty()
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;

}

/* export interface ICreateProduct extends Omit<IBaseModel, 'id' | 'createdAd' | 'updatedAt' > {
  categoryId: ICategory['id']
}
 */
