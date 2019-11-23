import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.scss']
})
export class UserRecordComponent implements OnInit {

  @Input() user: User;
  @Output() deleteUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDelete(user) {
    this.deleteUser.emit(user);
  }

}
