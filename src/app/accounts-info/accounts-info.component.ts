import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
interface IAccountInfo {
  name: string;
  balance: string;
}
@Component({
  selector: 'app-accounts-info',
  templateUrl: './accounts-info.component.html',
  styleUrls: ['./accounts-info.component.css']
})
export class AccountsInfoComponent implements OnInit {
  @Input() accountInfo: IAccountInfo[] = [];

  @Output() onAccountSelect = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAccountSelected(account : IAccountInfo) {
    console.log(account);
    this.onAccountSelect.emit(account);
  }

}
