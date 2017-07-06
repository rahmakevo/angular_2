import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <div *ngFor="let currentTask of tasks">
      <h3>{{ currentTask.description }}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
    <div>
    <div *ngIf="selectedTask">
    <h1>Edit Task</h1>
    <div>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
    </div>
    <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="selectedTask.id">
    </div>
      <button (click)="finishedEditing()">Done</button>
  </div>
      <p>Description: {{ selectedTask.description }}</p>
      <p>Task ID: {{ selectedTask.id }}</p>
    </div>
  </div>
  `
})
export class AppComponent {
	public tasks: Task[] = [
		new Task("Create To-Do List app.", 0),
		new Task("Learn Kung Fu.", 1),
		new Task("Rewatch all the Lord of the Rings movies.", 2),
		new Task("Do the laundry.", 3)
	];
	selectedTask: Task = this.tasks[0];
	showDetails(clickedTask: Task) {
		this.selectedTask = clickedTask;
	}
	finishedEditing() {
		this.selectedTask = null;
	}
}
export class Task {
	public done: boolean = false;
	constructor(public description: string, public id: number) {}
}
