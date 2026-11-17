import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  title = 'TaskFlow';
  canDelete = false;

  rename() {
    this.title = 'Mes tâches';
    this.canDelete = true;
    
  }
  delete() {
    this.title = ' ';
  }
}