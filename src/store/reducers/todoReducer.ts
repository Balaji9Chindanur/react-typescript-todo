import {TodoListActionTypes} from '../action-types/index';
import {AddTodoItem,RemoveTodoItem,UpdateTodoItem, ShowTodos} from '../actions/index';

export interface Item  {
    id:number,
    text: string
}

export interface ItemState {
    readonly data: Item[]
}

const initialState: ItemState = {
    data: [{
        text: 'test',
        id: 2
    }]
}

const todoReducer = (state:ItemState = initialState, action:AddTodoItem |
                                                            RemoveTodoItem |
                                                            UpdateTodoItem | ShowTodos ) => {

    switch(action.type) {

        case TodoListActionTypes.ADD_ITEM:console.log("in reducer"); 
                                          return {
                                                data: [
                                                    ...state.data,
                                                    {
                                                        id:action.payload.id,
                                                        text:action.payload.text
                                                    }
                                                ]
                                            }
        
        case TodoListActionTypes.REMOVE_ITEM: const deletedItemArray = state.data.map((item) => item.id === action.payload.id);
                                              return {
                                                  ...state,
                                                  data: deletedItemArray
                                              }

        case TodoListActionTypes.UPDATE_ITEM: return {
                                                data: state.data.map((item) => {
                                                    if(item.id === action.payload.id){
                                                       return item.text = action.payload.text;
                                                    } else {
                                                        return item;
                                                    }
                                                })
                                            }
        case TodoListActionTypes.SHOW_TODOS: return {
                                                data:state.data
                                             };
        default: return state
    }   
}

export default todoReducer;