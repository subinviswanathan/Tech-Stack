import { Component, OnInit } from '@angular/core';
import { TechDataService } from '../service/tech-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _techService: TechDataService) { }
  techDataList$ = this._techService.techLists$;

  ngOnInit() {
    this._techService.getAllTechData()
      .subscribe(res => {
        let data = res.data || [];
        let uniqueTech = [... new Set(data.map(item => item.type))];
        this._techService.getTechList(uniqueTech);
      });
  }

}
