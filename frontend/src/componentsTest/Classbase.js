import React from "react";

class CounterClass extends React.Component {
    constructor() {
        super();
        this.incre = this.incre.bind(this)
        this.state = {
            x: 0
        }
    }

    incre() {
        this.setState({
            x: this.state.x + 1
        })
    }

    render() {
        return (
            <div>
                <hr /><br />
                <h3>Class-base component example</h3>
                <h2>Counter = {this.state.x}</h2>
                <button onClick={this.incre}>Click Me</button>
                <br /><br /><br /><hr />
            </div>
        )
    }
}

export default CounterClass;