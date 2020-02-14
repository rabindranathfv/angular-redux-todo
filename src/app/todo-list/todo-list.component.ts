import { ITodo } from './../todo.interface';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ADD_TODO , TOGGLE_TODO, REMOVE_TODO} from './../action';
import { IAppState } from './../store';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  model: ITodo = {
    id: 0,
    description: '',
    responsable: '',
    priority: 'low',
    isCompleted: false,
  };

  constructor( private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
  }

  /**
   * onSubmit
   */
  public onSubmit() {
    console.log(this.model);
    const action = {
      type: ADD_TODO, todo: this.model
    };
    this.ngRedux.dispatch(action);
  }

  /**
   * toggleTodo
   */
  public toggleTodo( todo: ITodo) {
    const action = {
      type: TOGGLE_TODO,
      id: this.todos.id
    };
    this.ngRedux.dispatch(action);
  }

  /**
   * removeTodo
   */
  public removeTodo( todo: ITodo) {
    const action = {
      type: REMOVE_TODO,
      id: todo.id
    };
    this.ngRedux.dispatch(action);
  }

}
