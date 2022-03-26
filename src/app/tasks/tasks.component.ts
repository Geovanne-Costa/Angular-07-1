import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: String[] = [];

  newTask: any;

  addToList() {
    if (this.newTask == '') {
    } else {
      this.tasks.push(this.newTask);
      this.newTask = '';
      localStorage.setItem('Lista', JSON.stringify(this.tasks));
    }
  }
  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {
    this.tasks = [JSON.parse(localStorage.getItem('Lista'))];
    
  }
}
