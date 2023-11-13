import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {UserService} from "../../../user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../../../models/user";

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  constructor( private userService: UserService, private r:ActivatedRoute) {}
  id!: number;
  user!:User;
  ngOnInit(): void {
    this.id=this.r.snapshot.params['id'];
    this.userService.getUserById(this.id).subscribe(data=>this.user=data)


  }
  update(formUser: NgForm) {
    if (formUser.valid) {
      this.userService.updateUser(this.id,this.user).subscribe();
    }


  }



}
