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
            console.log(state);
            action.todo.id = state.todos.length + 1;
            return Object.assign({}, state, {
                todos: state.todos.concat(Object.assign({}, action.todo)),
                lastUpdated: new Date()
            });
        case TOGGLE_TODO:
            let todo = state.todos.find(t => t.id === action.id);
            let index = state.todos.indexOf(todo);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
                    ...state.todos.slice(index + 1)
                ],
                lastUpdated: new Date()
            });
        case REMOVE_TODO:
            const newTodos = state.todos.filter(t => t.id !== action.id);
            return {
                todos: state.todos.filter(t => t.id !== action.id),
                lastUpdated: new Date()
            };
        case REMOVE_ALL_TODOS:
            return {
                todos: [],
                lastUpdated: new Date()
            };
        default:
            return state;
    }
}