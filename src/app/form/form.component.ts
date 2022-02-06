import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import {User} from "../User";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private apiServerUrl = environment.apiBaseUrl;

  user: User = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    city: '',
    country: '',
    phone: '',
    email: '',
    address: '',
    graduation: '',
    university: '',
    degree: '',
    companyName: '',
    jobPosition: '',
    fromDate: '',
    toDate: '',
    skills: '',
    motivation: ''
  };
  submitted = false;

  constructor( private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser() : void {
    const user = {
      firstName: this.user.firstName,
    lastName: this.user.lastName,
    dateOfBirth: this.user.dateOfBirth,
    city: this.user.city,
    country: this.user.country,
    phone: this.user.phone,
    email: this.user.email,
    address: this.user.address,
    graduation: this.user.graduation,
    university: this.user.university,
    degree: this.user.degree,
    companyName: this.user.country,
    jobPosition: this.user.jobPosition,
    fromDate: this.user.fromDate,
    toDate: this.user.toDate,
    skills: this.user.skills,
    motivation: this.user.motivation
 };
 this.userService.addUser(user).subscribe(
   {
     next: (res) => {
       console.log(res);
       this.submitted = true;
     } ,
     error: (e) => console.error(e)
   }
 );
  }

 

}
