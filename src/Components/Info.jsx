import React, { Component } from 'react';
import Section from './Section';
import SectionInfo from './SectionInfo';
class Info extends Component {

    constructor(props){
        super(props)
        this.state ={
            selectedIndex : 0
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(index) {   
        this.setState({
            selectedIndex : index
        })        
    }

    render() {
        return (
            <>
                <Section num={this.props.num} handleChange={this.handleChange} selectedIndex={this.state.selectedIndex}/>
                <SectionInfo key={this.props.num[this.state.selectedIndex]} userId={this.props.num[this.state.selectedIndex]}/>
                
            </>
        );
    }
}

export default Info;