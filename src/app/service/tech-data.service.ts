import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TechModelWithCount, TechModel } from '../model/tech-model';

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  allTechData: TechModel[] = [];
  techList = [];
  private _url = 'https://my-json-server.typicode.com/subinviswanathan/tech-db/db';

  constructor(private _http: HttpClient) { }

  getAllTechData() {
    return this._http.get<TechModelWithCount>(this._url)
      .subscribe((res) => {
        this.allTechData = res.data || [];
        this.getTechList();
      });
  }

  getTechList() {
    return [... new Set(this.allTechData.map(data => data.type))];
  }

  getTechData() {
    return [...this.allTechData];
  }
}
