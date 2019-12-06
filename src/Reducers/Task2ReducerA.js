import *as ActionTypes from '../Actions/Type';

const initialstate={
ageA:1
};
export default(state=initialstate,action)=>
{
switch(action.type)
{
case ActionTypes.UPDATE_A:
{
return {...state,ageA:state.ageA+action.value};
}
default:
return state;
}
}