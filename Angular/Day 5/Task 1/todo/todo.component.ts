import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todos:Todo[] = [];
todoInput:string="";
todoUpdate:string="";
isEditButtonVisible:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  addTask() {
    this.todos.push({title:this.todoInput,done:false,isEditMode:false});
  }

  onCheckboxChange(index:number,isDone:boolean) {
    console.log(isDone);
    
    this.todos[index].done = isDone;
    
  }

  toggleEdit(index:number,isEditMode:boolean,editVal?:string) {
    if(editVal) {
      console.log(editVal);
      
      this.todoUpdate = editVal;
    }
    this.todos[index].isEditMode = isEditMode;
    this.isEditButtonVisible = !isEditMode;
    
    
  }

  update(index:any) {
    this.todos[index].title = this.todoUpdate;
    this.isEditButtonVisible = true;
    this.todos[index].isEditMode = false;
  }

  delete(index?:number) {
    console.log(index);
    
    if(index!=undefined) {
      this.todos.splice(index,1);
    }
    else {
      this.todos = [];
    }
  }

  deleteSelectedTasks() {
    let filteredArray:Todo[] = this.todos.filter(item=>!item.done);
    this.todos = filteredArray;
  }
}
