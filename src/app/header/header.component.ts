import { Component, OnInit } from '@angular/core';
import { TechDataService } from '../service/tech-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private _techService: TechDataService) { }
  techDataList$ = this._techService.techLists$;

}
