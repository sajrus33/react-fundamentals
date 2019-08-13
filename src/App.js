import React, { Component, Fragment } from 'react';
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Widget from "./components/Widget";
import Button from "./components/Button";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state1: "i am state",
      state2: "i am state too",
      a: "",
      b: "",
      items: [],
      actualSearch: null
    }

  }
  // lifecycle
  componentDidMount() {
    // just fetch
    fetch("https://swapi.co/api/people/?format=json")
      .then(res => res.json())
      .then(({ results: items }) =>
        this.setState({
          items: items
        }))
  }

  // just custom..
  updateEz = e => {
    this.setState({ state1: e.target.value })
  }
  update = e => {
    this.setState({
      a: this.a.value,
      b: this.refs.b.refs.input.value
    })
  };
  // filter = input handler
  handleSearch = e => {
    console.log(e.target.value)
    this.setState({
      actualSearch: e.target.value
    })
  }


  render() {
    let items = this.state.items;
    if (this.state.actualSearch) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(this.state.actualSearch.toLowerCase())
      )
    }

    return (
      <Fragment >
        {/* ez */}
        <h1> {this.props.txt + " "}{this.props.nr}</h1>
        <p>{this.state.state1} {this.state.state2}</p>
        <input type="text" onChange={this.updateEz.bind(this)} />
        <Widget update={this.update.bind(this)}></Widget>

        {/* props.children */}
        <div style={{ backgroundColor: "goldenrod" }}>
          <Button>I am Btn child</Button>
        </div>

        {/* Refs */}
        <div style={{ backgroundColor: "cadetblue" }}>
          <input
            ref={node => this.a = node}
            onChange={this.update.bind(this)} type="text" />
          <p>{this.state.a}</p>
          <Input
            ref="b"
            update={this.update.bind(this)} type="text" />
          <p>{this.state.b}</p>
        </div>

        {/* Map and Filter for Data Searching */}
        <div style={{ backgroundColor: "tomato" }}>
          <input type="text" onChange={this.handleSearch.bind(this)} />
          {items.map(item => <Person key={item.name} person={item} />)}
        </div>
      </Fragment>
    );
  }
}

// validate and default props
App.propTypes = {
  txt: PropTypes.string.isRequired,
  nr: PropTypes.number
}
App.defaultProps = {
  txt: "this is the default txt"
}

// for refs
class Input extends Component {

  render() {
    return (
      <input
        ref="input"
        type="text"
        onChange={this.props.update} />
    )
  }

}

// for Map data
const Person = props => <h4>{props.person.name}</h4>

export default App;
