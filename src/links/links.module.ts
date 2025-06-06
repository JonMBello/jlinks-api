import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinkSchema } from './entities/link.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Link } from './entities/link.entity';

@Module({
  controllers: [],
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  exports: [LinksService],
  providers: [LinksService],
})
export class LinksModule {}
