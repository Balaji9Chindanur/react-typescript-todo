import TodoListItem from "../components/TodoListItem";
import TodoListItems from "../components/TodoListItems";
import React from "react";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <TodoListItem></TodoListItem>
        <div>
          <h3>To Do List</h3>
          <TodoListItems></TodoListItems>
        </div>
      </div>
    );
  }
}

export default TodoList;
