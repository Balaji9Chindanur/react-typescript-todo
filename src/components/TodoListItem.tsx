import React, { Dispatch } from 'react';
import {connect }from 'react-redux';
import {AddTodoItem} from '../store/actions/index';
import {storeTodo} from '../store/action-creators/index';


interface Props {
    addTodo(textValue:string): void  
}

class TodoListItem extends React.Component<Props> {

    inputRef= React.createRef<HTMLInputElement>();
     render(){
         return(
            <div>
                <input type="text" ref={this.inputRef} placeholder="What needs to be done?"/>
                <button onClick={() => this.props.addTodo(
                    (this.inputRef && this.inputRef.current)? this.inputRef.current.value: 'test' )}>Add</button>
            </div> 
         )
     }
}

const mapDispatchToProps = (dispatch:Dispatch<AddTodoItem>) => {
    return {
        addTodo: (textValue:string) => 
             dispatch(storeTodo({text:textValue,id:Math.random()}))
    }  
}

export default connect(null,mapDispatchToProps)(TodoListItem);