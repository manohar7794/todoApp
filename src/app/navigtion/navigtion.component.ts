import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigtion',
  templateUrl: './navigtion.component.html',
  styleUrls: ['./navigtion.component.css']
})
export class NavigtionComponent implements OnInit {

  name = "Manohar !!"
  hobbies = ['playing Footbll', 'Reading', 'Coding', 'teaching', 'Driving'];
  constructor() { }

  ngOnInit() {

    
  }

}
