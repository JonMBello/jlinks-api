import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Link } from './entities/link.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectModel(Link.name)
    private linkModel: Model<Link>,
  ) {}

  async findOne(shortLink: string): Promise<Link | null> {
    return this.linkModel.findOne({ shortLink });
  }
  async updateVisits(shortLink: string): Promise<Link | null> {
    return this.linkModel.findOneAndUpdate(
      { shortLink },
      { $inc: { visits: 1 } },
    );
  }
}
