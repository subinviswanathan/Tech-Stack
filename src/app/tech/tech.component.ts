import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechDataService } from '../service/tech-data.service';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  techDatas$ = this._techService.techData$;
  getAllData$ = this._techService.getAllTechData();
  routeParam$ = this._route.paramMap;

  constructor(private _route: ActivatedRoute, private _techService: TechDataService) { }

  ngOnInit() {
    combineLatest(this.getAllData$, this.routeParam$).
      subscribe(([res, params]) => {
        let id = params.get('id');
        let data = res.data || [];
        let filteredData = data.filter(item => item.type === id);
        this._techService.filterTechData(filteredData);
      });
  }

}
