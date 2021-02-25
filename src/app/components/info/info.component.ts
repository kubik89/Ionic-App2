import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Service/user-service.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  info: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getInfo().subscribe(value => this.info = value);
  }

}
