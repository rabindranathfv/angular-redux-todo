import { ITodo } from './../todo.interface';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { ADD_TODO , TOGGLE_TODO, REMOVE_TODO} from './../action';
import { IAppState } from './../store';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  model: ITodo = {
    id: 0,
    description: 'todo 1',
    responsable: 'Rabindranath',
    priority: 'low',
    isCompleted: false,
  };

  modelTodo = [];

  constructor( private ngRedux: NgRedux<IAppState>) { }

  ngOnInit(): void {
    this.getModelTodo();
  }

  /**
   * getModelTodo
   */
  public getModelTodo() {
    this.modelTodo = Object.keys(this.model);
    this.modelTodo.push(`actions`);
    const index = this.modelTodo.indexOf('isCompleted');
    this.modelTodo[index] = `Completado`;
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
    console.log(todo);
    const action = {
      type: TOGGLE_TODO,
      id: todo.id
    };
    this.ngRedux.dispatch(action);
  }

  /**
   * removeTodo
   */
  public removeTodo( todo: ITodo) {
    console.log('remove this todo', todo);
    const action = {
      type: REMOVE_TODO,
      id: todo.id
    };
    this.ngRedux.dispatch(action);
  }

}
