import { Component } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';
@Component({
  standalone: true,
  selector: 'app-task-list',
  imports: [DatePipe, UpperCasePipe],
  styleUrl: './task-list.scss',
  templateUrl: './task-list.html',
})
export class TaskList {

  tasks = [
    { id: 1, title: 'T1',dueDate: '2026-11-13' },
    { id: 2, title: 'T2',dueDate:'2026-11-14' },
    { id: 3, title: 'T3',dueDate:'2026-11-15' }
  ];

  
  viderListe() {
    this.tasks = [];
  }
}
