import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks = [];

  public newTask;

  public addToList() {
    if (this.newTask == '') {
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
    }
  }
  public deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  NossaLista = localStorage;

  constructor() {}

  ngOnInit() {}
}
