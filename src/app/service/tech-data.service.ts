import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TechModelWithCount, TechModel } from '../model/tech-model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  private _allTechData = new BehaviorSubject([]);
  allTechData = this._allTechData.asObservable();

  private _techLists = new BehaviorSubject([]);
  techLists$ = this._techLists.asObservable();

  private _techDatas = new BehaviorSubject([]);
  techData$ = this._techDatas.asObservable();

  private _url = 'https://my-json-server.typicode.com/subinviswanathan/tech-db/db';

  constructor(private _http: HttpClient) { }

  getAllTechData() {
    return this._http.get<TechModelWithCount>(this._url)
    // .subscribe((res) => {
    //   this.allTechData = res.data || [];
    //   this._techLists.next(this.getTechList());
    //   this._techDatas.next(res.data);
    // });
  }

  filterTechData(data) {
    this._techDatas.next(data);
  }

  getTechList(data) {
    this._techLists.next(data);
    //[... new Set(this.allTechData.map(data => data.type))];
  }

  getTechData(data) {
    this._allTechData.next(data);
  }
}
