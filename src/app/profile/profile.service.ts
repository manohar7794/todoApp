import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
  setTimeout(() => profile, 2000)
}



}
