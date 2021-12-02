import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayPageComponent } from './display-page/display-page.component';
import { HomeComponent } from './home/home.component';
import { LoadDataComponent } from './load-data/load-data.component';
import { ReetailQ1Component } from './reetail-q1/reetail-q1.component';
import { ReetailQ2Component } from './reetail-q2/reetail-q2.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"display", component:DisplayPageComponent},
  {path:"loadData", component:LoadDataComponent},
  {path:"retailq1", component:ReetailQ1Component},
  {path:"retailq2", component:ReetailQ2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
