import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechComponent } from './tech.component';
import { TechModule } from './tech.module';

const routes: Routes = [
    {
        path: ':id', component: TechComponent
    }
];

@NgModule({
    imports: [
        TechModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class TechRoutingModule { }
