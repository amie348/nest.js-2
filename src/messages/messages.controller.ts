import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessageService } from './messages.service';

@Controller('messages')
export class MessagesController {

  constructor(public messageService: MessageService){}

  @Get()
  getAllListOfMessages() {

    return this.messageService.findAll()

  }

  @Get("/:id")
  getSpecificMessage(@Param() id: string) {

    return this.messageService.findOne(id)

  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {

    return this.messageService.createMessage(body.content)

  }

}