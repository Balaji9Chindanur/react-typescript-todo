import { TodoListActionTypes } from "../action-types/index";
import {
  AddTodoItem,
  RemoveTodoItem,
  UpdateTodoItem,
  ShowTodos,
} from "../actions/index";

export interface Item {
  id: number;
  text: string;
}

export interface ItemState {
  data: Item[];
}

const initialState: ItemState = {
  data: [
    {
      text: "Wamika",
      id: 1,
    },
    {
      text: "Aavery",
      id: 2,
    },
  ],
};

const todoReducer = (
  state: ItemState = initialState,
  action: AddTodoItem | RemoveTodoItem | UpdateTodoItem | ShowTodos
) => {
  switch (action.type) {
    case TodoListActionTypes.ADD_ITEM:
      return {
        ...state,
        data: [
          ...state.data,
          { text: action.payload.text, id: action.payload.id },
        ],
      };

    case TodoListActionTypes.REMOVE_ITEM:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload.id),
      };

    case TodoListActionTypes.UPDATE_ITEM:
      const objIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (objIndex != -1) {
        state.data[objIndex].text = "Edited " + action.payload.text; //action.payload.text;
      }
      return {
        ...state,
        data: [...state.data],
      };
    case TodoListActionTypes.SHOW_TODOS:
      return {
        ...state,
        data: [...state.data],
      };
    default:
      return {
        ...state,
        data: [...state.data],
      };
  }
};

export default todoReducer;
