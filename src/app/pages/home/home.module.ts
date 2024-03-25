import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomeDailyTasksComponent } from './home-daily-tasks/home-daily-tasks.component';
import { HomeProgressComponent } from './home-progress/home-progress.component';


//обов'язкова константа
const routes: Routes = [
  { path: '', component: HomeComponent }
];
//обов'язкова константа


@NgModule({
  declarations: [
    HomeComponent,
    HomeNewsComponent,
    HomeDailyTasksComponent,
    HomeProgressComponent
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
export class HomeModule { }
