// src/tickets/tickets.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { Ticket } from './schemas/tickets.schema';
import { CreateTicketDto } from './dto/create-ticket.dto';

@Controller('tickets')
export class TicketsController {
  constructor(private readonly ticketsService: TicketsService) {}

  @Get()
  findAll(): Promise<Ticket[]> {
    return this.ticketsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Ticket> {
    return this.ticketsService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createTicketDto: CreateTicketDto): Promise<Ticket> {
    return this.ticketsService.create(createTicketDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateTicketDto: Partial<CreateTicketDto>): Promise<Ticket> {
    return this.ticketsService.update(id, updateTicketDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.ticketsService.remove(id);
  }
}
