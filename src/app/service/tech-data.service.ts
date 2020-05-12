import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TechModelData } from '../model/tech-model';
import { BehaviorSubject } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  private _allTechData = new BehaviorSubject<TechModelData>({ totalRecords: [], data: [] });
  allTechData$ = this._allTechData.asObservable();

  private _techLists = new BehaviorSubject([]);
  techLists$ = this._techLists.asObservable();

  private _eachTechData = new BehaviorSubject([]);
  eachTechData$ = this._eachTechData.asObservable();

  private _url = 'https://my-json-server.typicode.com/subinviswanathan/tech-db/db';

  constructor(private _http: HttpClient) { }

  getAllTechData() {
    return this._http.get<TechModelData>(this._url)
      .subscribe(res => {
        let data = res.data || [];
        this._allTechData.next(res);
        this.getTechList(data);
      });
  }

  filterTechData(data, id) {
    let filteredData = data.filter(item => item.type === id);
    this._eachTechData.next(filteredData);
  }

  getTechList(data) {
    let uniqueTech = [... new Set(data.map(item => item.type))];
    this._techLists.next(uniqueTech);
  }

  getTechData(data) {
    this._allTechData.next(data);
  }
}
