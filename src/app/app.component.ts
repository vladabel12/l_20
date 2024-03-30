import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mobile';
  receiveDataFromChild(data: string){
    console.log('Data receivedfrom child:', data);
  }
  public inputText = ''
}
