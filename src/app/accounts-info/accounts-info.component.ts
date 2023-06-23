import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
export interface IAccountInfo {
  name: string;
  balance: string;
}
@Component({
  selector: 'app-accounts-info',
  templateUrl: './accounts-info.component.html',
  styleUrls: ['./accounts-info.component.css']
})
export class AccountsInfoComponent implements OnInit, OnChanges {
  @Input() accountInfo: IAccountInfo[] = [];

  @Output() onAccountSelect = new EventEmitter();

  constructor() {
    // console.log('constructor');
   }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('ngOnChanges');
    
  }
  ngOnInit() {
    // console.log('ngOnInit');
  }

  onAccountSelected(account : IAccountInfo) {
    console.log(account);
    this.onAccountSelect.emit(account);
  }

}
