import React, { Component } from "react";
import axios from 'axios';

import AddForm from './components/AddForm';
import SmurfDisplay from './components/SmurfDisplay';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3333/smurfs').then(res=>{
      console.log(res);
    })
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
        {/* Add in SmurfDisplay and AddForm into your application. */}
          <AddForm/>
          <SmurfDisplay/>
        </main>
      </div>
    );
  }
}

export default App;

