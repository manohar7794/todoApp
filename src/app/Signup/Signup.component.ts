import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {
  email= '';
  pwd = '';
  rpwd = '';
  constructor() { }

  ngOnInit() {
  }

  signupForm() {
    console.log('sasasa', this.email);
    
    
  }

}
