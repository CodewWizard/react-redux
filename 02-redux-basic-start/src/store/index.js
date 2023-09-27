import {createStore} from 'redux';
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    counter : 0,
    showCounter : false     
}

// preparing a slice of our global space
createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
})


const counteReducer =(state = initialState, action)=>{
    if(action.type === 'increment'){
        return{
            counter : state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement'){
        return{
            counter : state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'increase'){
        return{
            counter : state.counter + action.amount,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'reset'){
        return{
            counter : 0,
            showCounter : state.showCounter
        }
    }

    if(action.type === 'toggle'){
        return{
            counter : state.counter,
            showCounter: !state.showCounter
        }
    }

    return state;
}

const store = createStore(counteReducer);

export default store;

