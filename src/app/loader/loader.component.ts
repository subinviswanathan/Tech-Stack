import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from './loader.service';
import { LoaderState } from '../model/loader-model';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  constructor(private _loader: LoaderService) { }
  show = false;
  private subscription: Subscription;

  ngOnInit() {
    this.subscription = this._loader.loader$
      .subscribe((state: LoaderState) => this.show = state.show);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
