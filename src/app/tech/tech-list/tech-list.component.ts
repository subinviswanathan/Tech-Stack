import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-list',
  templateUrl: './tech-list.component.html',
  styleUrls: ['./tech-list.component.css']
})
export class TechListComponent implements OnInit {

  constructor() { }
  @Input('data') datas;
  toggle = {};

  ngOnInit() {
  }

}
