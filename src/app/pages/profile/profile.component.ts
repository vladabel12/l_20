import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  //Команда для зміни title в header
  constructor(global: GlobalService){
    global.pageTitle = 'Profile'
  }
  //Команда для зміни title в header
  
}
