import { Controller, Post, Body } from '@nestjs/common';
import { CreateRegisterDTO } from './dto/createRegister.dto';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  async createRegister(@Body() req: CreateRegisterDTO) {
    return this.registerService.createRegister(req);
  }
}
