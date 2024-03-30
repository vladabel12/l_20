import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent {
  @Input() progress: number = 0;
  @Output() sendDataToParent: EventEmitter<string> = new EventEmitter<string>();
  sendData() {
    this.sendDataToParent.emit('Data from child to parent');
  }
}
