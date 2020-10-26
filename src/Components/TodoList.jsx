import React, { Component } from 'react';
import Input from './Input'
import TasksList from './TasksList'


class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: [
                { num: 1, task: 'Task1' },
                { num: 2, task: 'Task2' },
                { num: 3, task: 'Task3' }
            ],
            length: 3,
            inputValue : ''
        
        }
    }

    handleInput = () => {  
             
        let task = this.state.inputValue;        
        let length = this.state.length;
        let num = length !== 0 ? this.state.tasks[length - 1].num : 0;
        length += 1        
        this.setState(state => {
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    { num: num + 1, task: task }
                ],
                length,
                inputValue : ''
            }
        })
    }


    handleChange= (event) =>{
        this.setState({
            inputValue : event.target.value
        })
    }

    handleDelete = (number) => {

        const updateTasks = this.state.tasks.filter(task =>
            task.num !== number
        )
        this.state.length -= 1;        
        this.setState({
            tasks: updateTasks
        })
    }

    handleEdit = (number) =>{
        
        const selectedItem = this.state.tasks.find(task =>
            task.num === number
        )
        
        this.setState({            
            inputValue : selectedItem
        })        
    }

    
    render() {

        return (
            <>
                <Input handleInput={this.handleInput}  handleChange={this.handleChange}  inputValue={this.state.inputvalue}/>
                <TasksList tasks={this.state.tasks} handleDelete={this.handleDelete} />
            </>
        );
    }
}

export default TodoList;