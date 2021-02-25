import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-some-info',
  templateUrl: './some-info.component.html',
  styleUrls: ['./some-info.component.scss'],
})
export class SomeInfoComponent implements OnInit {

  @Input()
  gotInfo: any;

  constructor() {
  }

  ngOnInit() {
  }

}
