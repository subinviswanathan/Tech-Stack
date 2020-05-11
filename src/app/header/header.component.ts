import { Component, OnInit } from '@angular/core';
import { TechDataService } from '../service/tech-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _techService: TechDataService) { }
  techDataList = [];

  ngOnInit() {
    this._techService.getAllTechData()
    //.subscribe()
    this.techDataList = this._techService.getTechList();
  }

}
