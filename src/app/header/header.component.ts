import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showText: any;
  isLogin = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showText = !this.showText;
    
  }
}
