
import React, { Component } from 'react';

class Task extends Component {

    constructor(props){
        super(props)
    }

    handleDelete= (num) =>{        
        this.props.handleDelete(num)
    }
    
   
    render() {
        const tasks = this.props.tasks.map((task) => {          

            return (
                <tr>                               
                    <td >{task.num}</td>
                    <td className="task" > {task.task} </td>
                    <td className="delete">
                        <a  onClick={() => this.handleDelete(task.num)}>x</a>
                        
                    </td>  
                                 
                </tr>            
            )
        })
        return (
            <tbody>
                {tasks}
            </tbody>
        )
    }
}

export default Task;