import React, { Dispatch } from 'react';
import {connect} from 'react-redux';
import { showTodos } from '../store/action-creators/index';
import {ShowTodos} from '../store/actions/index';
import {Item, ItemState} from '../store/reducers/todoReducer';

interface Props {
    data: Item[];
    showTodos(): void;
}
class TodoListItems extends React.Component<Props> {
    render(){
        return(
            <div>
                <ul>
                    {/* {this.props.data.map((item) => {
                        return <li>{item.text}</li>
                    })} */}
                    {"jssjssj"+JSON.stringify(this.props.showTodos())}
                </ul>
            </div>
        )
    }    
}

 const mapStateToProps = (state:ItemState, ownProps:any = {}) => ({
   data: state.data
 });

const mapDispatchToProps = (dispatch:Dispatch<ShowTodos>) => {
    return {
        showTodos: () => dispatch(showTodos())
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(TodoListItems);