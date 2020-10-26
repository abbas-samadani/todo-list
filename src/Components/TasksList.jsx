import React from 'react'
import Task from './Task'
import Titles from './Titles'
const TasksList = (props) => {
    return (
        <table>
            <Titles />
            <Task tasks={props.tasks} handleDelete={props.handleDelete} handleEdit={props.handleEdit}/>
        </table>
    )
}


export default TasksList