import { Component } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.scss'
})
export class HomeNewsComponent {

  //компонент для приходу інформації з BackEnd
  public news = [
    {
      id: Date.now(),
      title: 'Short news title will be here'
    },

    {
      id: Date.now(),
      title: 'Short news title will be here'
    }
  ]
  //компонент для приходу інформації з BackEnd

}
