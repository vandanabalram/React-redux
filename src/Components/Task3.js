
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateC, updateD, updateE, updateF } from '../Actions/Task3Action';
import './Task3.css';

class Task3 extends Component {
  render() {
    return (
      <div class="container">
        
      <div><h1> C:{this.props.ageC}</h1></div>
      <div><h1>D: {this.props.ageD}</h1></div>
      <div><h1> E: {this.props.ageE}</h1></div>
      <div><h1> F: {this.props.ageF}</h1></div>
      <div><button onClick={() => this.props.updateC(this.props.ageE)}>UPDATE C</button></div>
      <div><button onClick={() => this.props.updateD(this.props.ageF)}>UPDATE D</button></div>
      <div> <button onClick={() => this.props.updateE(this.props.ageC)}>UPDATE E</button></div>
      <div><button onClick={() => this.props.updateF(this.props.ageD)}>UPDATE F</button></div>
      <div>
      <a href="Task4">Task4</a>
      </div>
      </div>
    );
  }
}
const mapStoreToProps = (state) => {
  const { ageC } = state.Task3ReducerC;
  const { ageD } = state.Task3ReducerD;
  const { ageE } = state.Task3ReducerE;
  const { ageF } = state.Task3ReducerF;
  return { ageC, ageD, ageE, ageF };
}

export default connect(mapStoreToProps, { updateC, updateD, updateE, updateF })(Task3);
