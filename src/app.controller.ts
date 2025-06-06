import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  @Redirect()
  redirectToRegister() {
    return { url: this.configService.get('REGISTER_URL') };
  }

  @Get(':id')
  @Redirect()
  async getOriginalUrl(@Param('id') id: string) {
    const url = await this.appService.getOriginalUrl(id);
    return { url };
  }
}
