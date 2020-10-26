import React from 'react'


const Section = (props) => {
    return (
        <p className="section">
            Users:
            {props.num && props.num.map((item,index) =>
                <label>
                    <input checked={index === props.selectedIndex} onChange={() =>{props.handleChange(index)}} type="radio" name="user" />
                    {item}
                </label>
            )}
        </p>
    )
}


export default Section