import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechDataService } from '../service/tech-data.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  techData = [];

  constructor(private _route: ActivatedRoute, private _techService: TechDataService) { }

  ngOnInit() {
    this._route.paramMap
      .subscribe(params => {
        let id = params.get('id');
        this.techData = this._techService.allTechData.filter(item => item.type === id);
      });
  }

}
