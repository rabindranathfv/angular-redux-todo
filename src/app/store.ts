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
            return {
                ...state,
                todos: state.todos
            }
        case TOGGLE_TODO:
            break;
        case REMOVE_TODO:
            break;
        case REMOVE_ALL_TODOS:
            break;
        default:
            return state;
    }
}