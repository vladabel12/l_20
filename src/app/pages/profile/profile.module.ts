import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileRepresentationComponent } from './profile-representation/profile-representation.component';
import { ProfileSidesComponent } from './profile-sides/profile-sides.component';
import { ProfileReportsComponent } from './profile-reports/profile-reports.component';


//обов'язкова константа
const routes: Routes = [
  { path: '', component: ProfileComponent }
];
//обов'язкова константа

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileRepresentationComponent,
    ProfileSidesComponent,
    ProfileReportsComponent
  ],
  imports: [
    CommonModule,

    //обов'язковий імпорт
    RouterModule.forChild(routes)
    //обов'язковий імпорт

  ],

  //обов'язковий експорт
  exports: []
  //обов'язковий експорт
  
})
export class ProfileModule { }
