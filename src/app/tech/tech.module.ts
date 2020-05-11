import { NgModule } from '@angular/core';
import { TechComponent } from './tech.component';
import { TechListComponent } from './tech-list/tech-list.component';
import { TechDetailComponent } from './tech-detail/tech-detail.component';
import { TechDescComponent } from './tech-desc/tech-desc.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TechComponent,
    TechListComponent,
    TechDetailComponent,
    TechDescComponent
  ],
  imports: [
    SharedModule
  ]
})
export class TechModule { }
