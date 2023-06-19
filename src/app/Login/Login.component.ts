import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo = {
    email: '',
    pwd: ''
  }
  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    console.log('Email', this.loginInfo.email);
    
  }
}
