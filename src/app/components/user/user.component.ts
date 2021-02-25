import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../Service/user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input()
  gotCharacter: any;

  constructor() {
  }

  ngOnInit() {
  }
}
