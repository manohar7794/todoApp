import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  // life cycle hooks.
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
  constructor(private router: Router) { 
    // console.log('constructor');
    
  }
  ngOnChanges() {
    // console.log('Test in onchanges');
  }
 
  ngOnInit() { 
    // console.log('Test in ngOnInit');
    
    
  }
   ngOnDestroy() {
    // console.log('Test in Destroty');
   }
  
  onAccountselectedInfo(event: any) {
    console.log('event', event);
    alert(event.balance);
  }

}
