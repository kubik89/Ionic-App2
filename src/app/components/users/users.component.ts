import {Component, OnInit} from '@angular/core';
import {UserService} from '../../Service/user-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {

  characters: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCharacters().subscribe(characters => this.characters = characters);
  }

}
