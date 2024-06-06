// src/tickets/tickets.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './schemas/tickets.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Injectable()
export class TicketsService {
  constructor(
    @InjectModel(Ticket.name) private ticketModel: Model<Ticket>,
  ) {}

  async findAll(): Promise<Ticket[]> {
    return this.ticketModel.find().exec();
  }

  async findOne(id: string): Promise<Ticket> {
    return this.ticketModel.findById(id).exec();
  }

  async create(createTicketDto: CreateTicketDto): Promise<Ticket> {
    const newTicket = new this.ticketModel(createTicketDto);
    return newTicket.save();
  }

  async update(id: string, updateTicketDto: Partial<CreateTicketDto>): Promise<Ticket> {
    return this.ticketModel.findByIdAndUpdate(id, updateTicketDto, { new: true }).exec();
  }

  async remove(id: string): Promise<void> {
    await this.ticketModel.findByIdAndDelete(id).exec();
  }
}
