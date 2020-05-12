import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { LoaderState } from '../model/loader-model';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }

  private _loader = new BehaviorSubject<LoaderState>({ show: false });
  loader$ = this._loader.asObservable();

  showLoader() {
    this._loader.next({ show: true });
  }

  hideLoader() {
    this._loader.next({ show: false });
  }
}
