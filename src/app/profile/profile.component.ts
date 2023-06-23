import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile, ProfileService } from './profile.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnChanges, OnDestroy {
  // life cycle hooks.
  profileInfo: any;
  constructor(private router: Router,
    public pService: ProfileService) { 
    // console.log('constructor');
    
  }
  ngOnChanges() {
    // console.log('Test in onchanges');
  }
 
  ngOnInit() { 
    // console.log('Test in ngOnInit');
    // this.profileInfo = this.pService.getProfile();
    
  }
   ngOnDestroy() {
    // console.log('Test in Destroty');
   }
  
  onAccountselectedInfo(event: any) {
    console.log('event', event);
    alert(event.balance);
  }

}
