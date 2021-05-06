import TodoListItem from '../components/TodoListItem';
import TodoListItems from '../components/TodoListItems';
import React from 'react';

class TodoList extends React.Component {
   render(){
      return (
         <div>
             <TodoListItem></TodoListItem>
             <TodoListItems></TodoListItems>
          </div>
     )
   }
}

export default TodoList;