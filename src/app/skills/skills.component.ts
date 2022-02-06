import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

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
