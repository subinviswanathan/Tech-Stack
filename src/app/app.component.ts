import { Component } from '@angular/core';
import { TechDataService } from './service/tech-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tech-stack';
  constructor(private _techService: TechDataService) {
    this._techService.getAllTechData();
  }
}
