import React, { Component } from 'react'
import './App.css';
import axios from "axios"
import Home from './components/Home';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      covid: []
    }
  }

  componentDidMount = () => {
    let api = "https://data.covid19india.org/v4/min/data.min.json"
    axios.get(api)
      .then((res) => {
        console.log(res.data);
        this.setState({
          covid: res.data
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}