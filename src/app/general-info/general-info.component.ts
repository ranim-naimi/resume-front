import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.css']
})
export class GeneralInfoComponent implements OnInit {

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
