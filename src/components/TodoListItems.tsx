import React, { Dispatch } from "react";
import { connect } from "react-redux";
import {
  removeTodo,
  showTodos,
  updatedTodo,
} from "../store/action-creators/index";
import {
  RemoveTodoItem,
  ShowTodos,
  UpdateTodoItem,
} from "../store/actions/index";
import { Item, ItemState } from "../store/reducers/todoReducer";

interface Props {
  data: Item[];
  showTodos(): void;
  removeTodo(item: Item): void;
  updatedTodo(item: Item): void;
}
class TodoListItems extends React.Component<Props> {
  render() {
    return (
      <div>
        <ol>
          {this.props.data.map((item, index) => {
            return (
              <div key={item.id}>
                <li>
                  {item.text}
                  <a
                    style={{ padding: "2px" }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.updatedTodo(item);
                    }}
                  >
                    Edit
                  </a>
                  <a
                    style={{ padding: "2px" }}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      this.props.removeTodo(item);
                    }}
                  >
                    Delete
                  </a>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any = {}) => ({
  data: state.todoReducer.data,
});

const mapDispatchToProps = (
  dispatch: Dispatch<ShowTodos | RemoveTodoItem | UpdateTodoItem>
) => {
  return {
    showTodos: () => dispatch(showTodos()),
    removeTodo: (item: Item) => dispatch(removeTodo(item)),
    updatedTodo: (item: Item) => dispatch(updatedTodo(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItems);
