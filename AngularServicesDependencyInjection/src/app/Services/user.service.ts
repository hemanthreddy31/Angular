import {Injectable} from '@angular/core';
import {User} from "../Models/User";
import { LoggerService } from "./logger.service";

@Injectable()
export class UserService{
    users: User[]=[
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Steve Smith1','Male','Monthly','Active'),
        new User('Steve Smith2','Male','Monthly','Active')
    ];
    constructor(private logger:LoggerService){

    }
    GetAllUsers(){
        return this.users;
    }
    CreateUser(name:string, gender: string, subType:string, status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
        this.logger.LogMessage(name,status);
    }
}