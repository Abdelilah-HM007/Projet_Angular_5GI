import { Component, signal, computed } from '@angular/core';
import { DatePipe, UpperCasePipe } from '@angular/common';

interface Task {
  id: number;
  title: string;
  dueDate: string;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [DatePipe, UpperCasePipe],
  templateUrl: './task-list.html',
  
})
export class TaskList {
  // Creation Dyal signal 
  tasks = signal<Task[]>([
    { id: 1, title: 'PC HP', dueDate: '2026-11-13' },
    { id: 2, title: 'IPHONE 18', dueDate: '2026-11-14' },
    { id: 3, title: 'Tablette', dueDate: '2026-11-15' }
  ]);

  // Signal
  count = computed(() => this.tasks().length);

  
  add(task: Task) {
    this.tasks.update(items => [...items, task]);
  }

  // Methode BACH TZID TACHE
  ajouterTache() {
    const nouvelleTache: Task = {
      id: Date.now(),
      title: 'Nouvelle tâche',
      dueDate: '2026-11-21'
    };
    this.add(nouvelleTache);
  }

  // KHAWI TAB
  clear() {
    this.tasks.set([]);
  }
}