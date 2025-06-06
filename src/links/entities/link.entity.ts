import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Link extends Document {
  @Prop({ required: true })
  originalUrl: string;

  @Prop({ required: true })
  shortLink: string;

  @Prop({ default: 0 })
  visits: number;
}

export const LinkSchema = SchemaFactory.createForClass(Link);
