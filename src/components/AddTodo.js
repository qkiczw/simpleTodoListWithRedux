import React, { Component } from 'react';
import {connect} from 'react-redux'

const initialState = {
    desc: '',
    time: ''
}

class AddTodo extends Component {
    state = {
        desc:'',
        time: ''
    };

    onHandle = event => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value)

        const patch = {};

        patch[name] = value;
        this.setState(patch);
        console.log(this.state);

    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state);
        this.setState(initialState);

    };

    render() {
        return (
            <div >
               <input name="desc" onChange={this.onHandle} placeholder="Nazwa zadania"/>
                <input name="time" onChange={this.onHandle} placeholder="Czas zadania"/>
                <button onClick={this.handleSubmit}>Dodaj!</button>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => {
    return {
        addTask: ( {desc, time} ) => dispatch({type: 'ADD_TASK', desc, time})

    }
}


export default connect(null, mapDispatchToProps)(AddTodo);