import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ticket extends Document {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  createdAt: string;

  @Prop({ required: true })
  priority: string;

  @Prop({ required: true })
  status: string;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
