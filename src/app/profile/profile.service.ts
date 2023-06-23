import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { IAccountInfo } from '../accounts-info/accounts-info.component';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private http: HttpClient) { 
}
getProfile() {
  const profile = {
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
  };
  console.log('in Service');
  
  return of<IProfile>(profile)
}



}

export interface IProfile {
  fn: string;
  ln: string;
  email: string;
  phone: string;
  accounts: IAccountInfo[]
}
