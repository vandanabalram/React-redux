import React, { Component } from "react";
import "./App.css";
import Task2 from "./Components/Task2";
import Task3 from "./Components/Task3";
import Task4 from "./Components/Task4";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
    <div className="App">
    <Router> 
   <switch>
   <Route exact path='/' component={Task2}></Route>
   <Route exact path='/Task3' component={Task3}></Route>
   <Route exact path='/Task4' component={Task4}></Route> 
   </switch>
 </Router>
    </div>
    );
  }
}
export default App;