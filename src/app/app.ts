import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header';
import { TaskList } from './task-list/task-list';

@Component({
  imports: [HeaderComponent, TaskList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('projetI-projet-angular');
}
