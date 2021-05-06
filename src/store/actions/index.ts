import {TodoListActionTypes} from '../action-types/index';
import { Item } from '../reducers/todoReducer'

export interface AddTodoItem {
    type: TodoListActionTypes.ADD_ITEM,
    payload: Item
}

export interface RemoveTodoItem {
    type: TodoListActionTypes.REMOVE_ITEM,
    payload: Item
}

export interface UpdateTodoItem {
    type: TodoListActionTypes.UPDATE_ITEM,
    payload: Item
}


export interface ShowTodos {
    type: TodoListActionTypes.SHOW_TODOS
}