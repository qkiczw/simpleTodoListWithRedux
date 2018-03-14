import React, { Component } from 'react';
import {connect} from 'react-redux'


class ListView extends Component {
    render() {
        return (
            <div >
               <ul>
                   {this.props.todoList.map( task => (
                       <li key={task.id}>{task.desc} - czas zadania: {task.time}(min.) <button onClick={()=> this.props.onDeleteTask(task.id)}>Usuń zadanie!</button></li>
                       )
                   )}
               </ul>
            </div>
        );
    }
}



const mapStateToProps = state => {
    return {
        todoList: state.tasks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTask: ( id ) => dispatch({type: 'DELETE_TASK', taskId: id })

}
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);