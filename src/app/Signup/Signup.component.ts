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

  profileInfo = {
    accounts: [{
      name: 'Checking',
      balance: '5M'
    },
    {
      name: 'Savings',
      balance: '5M'
    },{
      name: 'Credit cards',
      balance: '0000'
    }]
  }
  constructor() { }

  ngOnInit() {
  }

  signupForm() {
    console.log('sasasa', this.email);
    
    
  }

}
