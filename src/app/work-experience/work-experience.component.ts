import { Component, OnInit } from '@angular/core';
import {User} from "../User";
import {HttpErrorResponse} from "@angular/common/http";
import {UserService} from "../user.service";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
// @ts-ignore
public users: User [];

constructor( private userService: UserService) { }

ngOnInit(): void {
  this.getUsers();
  console.log(this.users);
}

public getUsers(): void {
  this.userService.getUsers().subscribe(
    (response: User[] ) => {
      this.users = response;
    },
    (error: HttpErrorResponse) =>
    {
      alert(error.message)
    }

  );
}

}
