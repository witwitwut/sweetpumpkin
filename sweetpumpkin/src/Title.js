import React, { Component } from 'react';

const ButtonStyling = {
    lineHeight: "30px",
    padding: "0 10px",
    background: "goldenrod",
    color: "white",
    border: "0",
    borderRadius: "0",
    cursor: "pointer"
    
}

class Title extends Component{
    constructor(props){
        super(props)
        this.state = {
            counter: 0
        }
        this.onClick = this.onClick.bind(this)
        this.increaseCounter = this.increaseCounter.bind(this)
    }
    increaseCounter(state){
        return {counter: state.counter + 2}
    }
    onClick(){
        this.setState(this.increaseCounter)
    }
    render(){
        return( 
            <div>
            <button onClick={this.onClick} style={ButtonStyling}>Upvote Test</button>
            <h1>
            <span>{this.state.counter}</span>
            Sweet Pumpkins
            </h1>
            </div>
            )
        }
        
        
        
    }
    
    export default Title