import {AddTodoItem, RemoveTodoItem, UpdateTodoItem} from '../actions/index';
import {TodoListActionTypes} from '../action-types/index';
import {Item} from '../reducers/todoReducer';

export const storeTodo = (item: Item):AddTodoItem => {
    console.log("in Store Action");
    return {
        type:TodoListActionTypes.ADD_ITEM,
        payload: item
    }
}

export const removeTodo = (item:Item):RemoveTodoItem => {
    return {
        type: TodoListActionTypes.REMOVE_ITEM,
        payload: item
    }
}

export const updatedTodo = (item:Item):UpdateTodoItem => {
    return {
        type: TodoListActionTypes.UPDATE_ITEM,
        payload: item
    }
}

