import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-info',
  templateUrl: './accounts-info.component.html',
  styleUrls: ['./accounts-info.component.css']
})
export class AccountsInfoComponent implements OnInit {

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
      balance: '0'
    },{
      name: 'Credit cards',
      balance: '10000'
    }]
  }
  constructor() { }

  ngOnInit() {
  }

}
