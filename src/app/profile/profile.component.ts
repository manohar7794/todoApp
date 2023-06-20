import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileInfo = {
    fn: '',
    ln: '',
    email: '',
    phone: '',
    accounts: [{
      name: 'Checking',
      balance: '1M'
    },
    {
      name: 'Savings',
      balance: '1M'
    },{
      name: 'Credit cards',
      balance: '000'
    }]
  }
  constructor() { }

  ngOnInit() {
  }

  onAccountselectedInfo(event: any) {
    console.log('event', event);
    alert(event.balance);
  }

}
