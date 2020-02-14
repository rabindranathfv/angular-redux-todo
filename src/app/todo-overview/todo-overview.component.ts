import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { REMOVE_ALL_TODOS } from '../action';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.scss']
})
export class TodoOverviewComponent implements OnInit {

  @select() todos;
  @select() lastUpdated;
  constructor( private ngRedux: NgRedux<IAppState>) {

  }

  ngOnInit(): void {
  }

  /**
   * cleanTodos
   */
  public cleanTodos() {
    const action = { type: REMOVE_ALL_TODOS};
    this.ngRedux.dispatch(action);
  }

}
