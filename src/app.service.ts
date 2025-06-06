import { Injectable, Logger } from '@nestjs/common';
import { LinksService } from './links/links.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private readonly logger = new Logger('AppService');

  constructor(
    private readonly linksService: LinksService,
    private readonly configService: ConfigService,
  ) {}

  async getOriginalUrl(shortLink: string): Promise<string> {
    try {
      const link = await this.linksService.findOne(shortLink);
      if (!link) {
        return this.configService.get('REGISTER_URL');
      }
      await this.linksService.updateVisits(shortLink);
      return link.originalUrl;
    } catch (err) {
      this.logger.error(err.message || 'Error getting original URL');
      return this.configService.get('REGISTER_URL');
    }
  }
}
