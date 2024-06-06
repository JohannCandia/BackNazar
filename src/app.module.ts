import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TicketsModule } from './tickets/tickets.module';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://360royalcam:eyQ32HM0tLz3PUv4@cluster0.dmbkcrp.mongodb.net/Ticket"), TicketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
