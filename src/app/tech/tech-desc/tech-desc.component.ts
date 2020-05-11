import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-desc',
  templateUrl: './tech-desc.component.html',
  styleUrls: ['./tech-desc.component.css']
})
export class TechDescComponent implements OnInit {

  constructor() { }
  @Input('description') description;

  ngOnInit() {
  }

}
