import {createStore} from 'redux';

const initialState = {
    tasks: [
        {id: 0, desc: "Mój pierwszy TODO", time: 30},
        {id: 1, desc: "Mój drugi TODO", time: 20},
        {id: 2, desc: "Mój trzeci TODO", time: 10}
    ]
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK' :
            console.log('klikam!')
            return {
                ...state,
                tasks: state.tasks.concat({
                        id: Date.now().toString(32),
                        desc: action.desc,
                        time: action.time
                    })
            }
        case 'DELETE_TASK' :
            console.log('klikam!')
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }
        default:
            return state
}

}

const store = createStore(reducer)

export default store