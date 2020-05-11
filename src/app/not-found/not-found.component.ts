import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `<p style="padding: 1.5rem">
  OOps Page you looking could not be found!....
  </p>`,
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
