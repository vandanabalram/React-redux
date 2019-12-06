
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateA,updateB} from '../Actions/Task2Action';

class Task2 extends Component {
    render() {
        return (
            <div>
                <a href="Task3">Task3</a>
                <div>A : <span>{this.props.ageA}</span> B: <span>{this.props.ageB}</span></div>
                <button onClick={()=>this.props.updateA(this.props.ageB)}>UPDATE A</button>
                <button onClick={()=>this.props.updateB(this.props.ageA)}>UPDATE B</button>
            </div>
        );
    }
}
const mapStoreToProps=(state)=>
{
const { ageA }=state.Task2ReducerA;
const { ageB }=state.Task2ReducerB;
return { ageA,ageB };
}

export default connect(mapStoreToProps,{updateA,updateB})(Task2);
