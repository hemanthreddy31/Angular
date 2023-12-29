import {User} from "../Models/User";
export class UserService{
    users: User[]=[
        new User('Steve Smith','Male','Monthly','Active'),
        new User('Steve Smith1','Male','Monthly','Active'),
        new User('Steve Smith2','Male','Monthly','Active')
    ];
    GetAllUsers(){
        return this.users;
    }
    CreateUser(name:string, gender: string, subType:string, status:string){
        let user = new User(name,gender,subType,status);
        this.users.push(user);
    }
}