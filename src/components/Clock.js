import React, { Component } from 'react'

export class Clock extends Component {
    constructor(props){
        super(props)
        this.state = {date : new Date()}
    }
    componentDidMount(){
this.timerID = setInterval(
    () =>this.tick(),
    1000
)
    }
    componentWillUnmount(){
clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date : new Date()
        })
    }
    render() {
        return (
            <div>
                <h1>hey there </h1>
        <p>the time is {this.state.date.toLocaleTimeString()}</p>
                
            </div>
        )
    }
}

export default Clock
