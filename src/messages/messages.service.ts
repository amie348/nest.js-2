import { MessagesRepository } from "./messages.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MessageService{


  constructor(public messagerepository: MessagesRepository){}

  findAll() {
    return this.messagerepository.findAll()
  }

  findOne(id: string) {

    return this.messagerepository.findOne(id)

  }

  async createMessage(conetnt: string){
    
   return await this.messagerepository.addMessage(conetnt)

  }



}