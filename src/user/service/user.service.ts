import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {

  constructor(

    @InjectRepository(User) private userRepo: Repository<User>,

  ) {}

  async create(payload: CreateUserDto) {

    const newUser = this.userRepo.create(payload)

    // 10 iterations
    const hashedPassword = await bcrypt.hash(newUser.password, 10)
    newUser.password = hashedPassword

    return this.userRepo.save(newUser)
  }


  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
