import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller('/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Devuelve mensaje servidor funcionando' })
  @ApiResponse({ status: 200, description: 'Mensaje servidor funcionando' })
  @ApiResponse({ status: 400, description: 'Error servidor' })
  getHello(): string {
    return this.appService.getHello();
  }
}
