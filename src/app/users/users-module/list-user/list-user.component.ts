import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../user.service";
import {User} from "../../../models/user";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit{
  userList:User[]=[];
  userListApi:User[]=[];
  nombre!:number;

  constructor(private userservice:UserService) {
  }

  ngOnInit(): void {
    this.userList=this.userservice.getAllUsers();
    this.userservice.getAllUsersApi().subscribe(users =>this.userListApi=users );

  }

  filteruser(user:User){
   this.nombre = this.userservice.fetchNbInList(this.userList,'profession',user.profession);
  }
  deleteUser(user:User)
  {
    return this.userservice.deleteUser(user).subscribe();

  }

  add(formUser: NgForm)
  {
    this.userservice.addUser(formUser.value).subscribe();
  }
}
