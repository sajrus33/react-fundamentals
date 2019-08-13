import React, { Component, Fragment } from 'react';
// import PropTypes from "prop-types";
import ReactDOM from "react-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: 0
        }
        this.update = this.update.bind(this);
    }
    update() {
        this.setState({
            val: this.state.val + 1
        })
    }
    componentWillMount() {
        console.log("will mount");
    }

    render() {
        console.log("render");
        return (
            <button onClick={this.update}>{this.state.val}</button>
        );
    }

    componentDidMount() {
        console.log("Did mount");
    }

    componentWillUnmount() {
        console.log("will unmount");
    }
}

class Wrapper extends Component {

    mount() {
        this.node = this.refs.a;
        ReactDOM.render(<App />, React.findDOMNode(this.node))
    }
    unmount() {
        // console.log(document.getElementById("a"))
        ReactDOM.unmountComponentAtNode(<App />)
    }
    render() {
        return (
            <div>
                <button onClick={this.mount.bind(this)}>mount</button>
                <button onClick={this.unmount.bind(this)}>unmount</button>
                <div ref="a"></div>
            </div>
        )
    }
}
export default Wrapper;
