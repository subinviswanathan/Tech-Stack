import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tech-detail',
  templateUrl: './tech-detail.component.html',
  styleUrls: ['./tech-detail.component.css']
})
export class TechDetailComponent implements OnInit {

  constructor() { }
  @Input('techDetail') techDetail;

  ngOnInit() {
  }

}
