import *as ActionTypes from '../Actions/Type';

const initialstate={
ageB:1
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATE_B:
{
return {...state,ageB:state.ageB+action.value};
}
default:
return state;
}
}