import React from 'react'

const Input = (props) => {
    return (
        <div>
            <form className="input_form" >
                <input type="text" name="task" value={props.inputValue} onChange={props.handleChange} className="task_input" />
                <button type="button" name="submit" id="add_btn" onClick={props.handleInput} className="add_btn">Add Task</button>
            </form>
        </div>
    )
}


export default Input