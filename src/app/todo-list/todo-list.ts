import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
tasks:string[] = [];
newTask: string = "";
addNewTask(){
  if (this.newTask.trim()===''){
    return
  }
  this.tasks.push(this.newTask.trim());
  this.newTask = '';
}
removeTask(index:number){
  this.tasks.splice(index, 1);

}
}
