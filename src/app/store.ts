import { ITodo } from './todo.interface';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from './action';

export interface IAppState {
    todos: ITodo[];
    lastUpdated: Date;
}

export const INITIAL_STATE: IAppState = {
    todos: [],
    lastUpdated: null
}

export function rootReducer(state, action) {
    switch (action.type) {
        case ADD_TODO: 
            action.todo.id = state.todo.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdate: new Date()
            });
        case TOGGLE_TODO:
            let todo = state.todos.find(t => t.id === action.id);
            let index = state.todos.indexOf(todo);
            todo.isCompleted = !todo.isCompleted;
            console.log('TODO INTO TOGGLE TODO', todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    todo
                ],
                lastUpdated: new Date()
            })
        case REMOVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdated: new Date()
            })
        case REMOVE_ALL_TODOS:
            return Object.assign({}, state, {
                todos: [],
                lastUpdated: new Date()
            });
        default:
            return state;
    }
}